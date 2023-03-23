import IFrame from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  structureBuilder,
  { schemaType }
) => {
  if (schemaType === "post") {
    return structureBuilder.document().views([
      structureBuilder.view.form(),
      structureBuilder.view
        .component(IFrame)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          defaultSize: "desktop",
          reload: { button: true },
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
};

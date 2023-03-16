import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemas";

export default defineConfig({
  basePath: "/studio",

  name: "default",
  title: "JAK Blog App",

  projectId: "qeepg798",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

import { defineConfig, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemas";
import { sanityTheme } from "./src/sanityTheme";
import StudioNavbar from "./components/StudioNavbar";

export default defineConfig<WorkspaceOptions>({
  basePath: "/studio",

  name: "default",
  title: "JAK Blog App",

  projectId: "qeepg798",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: sanityTheme,
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar,
    },
  },
});

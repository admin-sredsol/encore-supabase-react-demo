import { api } from "encore.dev/api";
import { promises as fs } from "fs";
import path from "path";

export const listConstructions = api(
  {
    expose: true,
    auth: false, // No authentication required
    method: "GET",
    path: "/constructions",
  },
  async (): Promise<{ body: { id: string; name: string; filePath: string }[] }> => {
    try {
      const constructionsDir = path.join(process.cwd(), "frontend/public/constructions");
      console.log("Constructions directory:", constructionsDir);

      const files = await fs.readdir(constructionsDir);
      console.log("Files in directory:", files);

      const applets = files
        .filter((file) => file.endsWith(".xml"))
        .map((file) => ({
          id: file.replace(".xml", ""),
          name: file.replace(".xml", "").replace(/_/g, " "),
          filePath: `/constructions/${file}`,
        }));

      console.log("Applets:", applets);
      return { body: applets };
    } catch (error) {
      console.error("Error in /constructions endpoint:", error);
      throw error;
    }
  }
);
import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

// Static CI builds work at the root unless a deployment base is supplied.
const basePath = process.env.BASE_PATH ?? "/";

const DEFAULT_DEV_PORT = 5173;

export default defineConfig(async ({ command }): Promise<UserConfig> => {
  let port = DEFAULT_DEV_PORT;

  if (command === "serve") {
    const rawPort = process.env.PORT;

    if (!rawPort) {
      console.warn(
        `PORT was not provided. Defaulting dev server port to ${DEFAULT_DEV_PORT}.`,
      );
    } else {
      const parsedPort = Number(rawPort);

      if (Number.isNaN(parsedPort) || parsedPort <= 0) {
        throw new Error(`Invalid PORT value: "${rawPort}"`);
      }

      port = parsedPort;
    }
  }

  return {
    base: basePath,
    plugins: [
      mockupPreviewPlugin(),
      react(),
      tailwindcss(),
      runtimeErrorOverlay(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [
            await import("@replit/vite-plugin-cartographer").then((m) =>
              m.cartographer({
                root: path.resolve(import.meta.dirname, ".."),
              }),
            ),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});

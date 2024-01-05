/*
 * @Author: cola
 * @Date: 2023-08-06 17:42:54
 * @LastEditors: cola
 * @Description:
 */
import process from "node:process";
import type { ModuleOptions } from "@vite-pwa/nuxt";
import { description, name } from "../package.json";

const scope = "/";

export const pwa: ModuleOptions = {
  registerType: "autoUpdate",
  scope,
  base: scope,
  manifest: {
    id: scope,
    scope,
    name,
    short_name: name,
    description,
    theme_color: "#ffffff",
    icons: [
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,txt,png,ico,svg}"],
    navigateFallbackDenylist: [/^\/api\//],
    navigateFallback: "/",
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts.googleapis.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts.gstatic.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "gstatic-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === "true",
    navigateFallback: scope,
  },
};

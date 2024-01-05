/*
 * @Author: cola
 * @Date: 2023-08-18 11:16:11
 * @LastEditors: cola
 * @Description:
 */
import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  // any custom vitest config you require
  test: {
    dir: 'tests',
    coverage: {
      reportsDirectory: 'coverage',
    },
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./', import.meta.url)),
        domEnvironment: 'js-dom',
      },
    },
  },
})

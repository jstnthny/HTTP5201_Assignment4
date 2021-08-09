// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qualityAssurance: resolve(__dirname, 'QA/qa.html'),
        security: resolve(__dirname, 'Security/security.html'),
        badExample: resolve(__dirname, 'BadExample/badExample.html'),
      }
    }
  }
}
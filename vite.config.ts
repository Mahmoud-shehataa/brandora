import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function staticIndexOutput() {
  return {
    name: 'static-index-output',
    closeBundle() {
      const outputDir = path.resolve(__dirname, 'dist')
      const sourceHtml = path.join(outputDir, 'index.vite.html')
      const targetHtml = path.join(outputDir, 'index.html')

      if (fs.existsSync(sourceHtml)) {
        fs.copyFileSync(sourceHtml, targetHtml)
      }
    },
  }
}

function devIndexTemplate() {
  return {
    name: 'dev-index-template',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url || ''

        if (url === '/') {
          req.url = '/index.vite.html'
        } else if (url.startsWith('/index.html')) {
          req.url = url.replace('/index.html', '/index.vite.html')
        }

        next()
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [
    figmaAssetResolver(),
    staticIndexOutput(),
    devIndexTemplate(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.vite.html'),
    },
  },
})

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    svgrPlugin(),
    checker({
      typescript: true
    }),
    EnvironmentPlugin('all', { prefix: 'REACT_APP_' })
  ]
})

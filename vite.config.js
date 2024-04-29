import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://erGoProcsee.github.io/portfolio_react",
  base: "/portfolio_react/",
  plugins: [react()],
})

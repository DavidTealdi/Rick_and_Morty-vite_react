import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://DavidTealdi.github.io/Rick_and_Morty-vite_react/",
  plugins: [react()],
})

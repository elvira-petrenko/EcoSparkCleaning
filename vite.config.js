import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',            // Vite берёт сайт из папки src
  publicDir: '../public', // папка для статики (favicon и т.п.), создадим позже
  base: './',             // относительные пути, сайт откроется на любом хостинге
  build: {
    outDir: '../dist',    // готовая сборка попадёт в dist/ в корне
    emptyOutDir: true,
  },
  server: {
    open: true,           // сам открывает браузер при запуске
  },
});
import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
export default defineConfig({
base: '/goiteens-hw-js-vite/', // ! IMPORTANT: specify base
root: 'src',
build: {
rollupOptions: {
// ! Это захватывает только HTML-файлы верхнего уровня в src/, и не включает HTML-файлы нижнего уровня
// input: glob.sync('./src/.html'),
// ! Это ищет ВСЕ HTML-файлы, включая HTML-файлы нижнего уровня.
input: glob.sync('./src/**/.html'),
},
outDir: '../dist',
},
plugins: [injectHTML(), FullReload(['./src//.html'])],
});
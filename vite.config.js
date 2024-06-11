import path from 'path';

export default {
  root: './src',
  base: '',
  publicDir: path.resolve(__dirname, '../assets'),
  build: {
    outDir: path.resolve(__dirname, '../www'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
};

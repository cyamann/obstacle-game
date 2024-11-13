const path = require('path');

module.exports = {
  entry: './src/index.js', // Giriş dosyanız
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Çıktı dizini
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS dosyalarını işlemek için
        use: ['style-loader', 'css-loader'], // CSS'i ekleyin
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Statik dosyaların bulunduğu dizin
    },
    port: 9000,
    open: true, // Tarayıcıyı otomatik açma
  },
};

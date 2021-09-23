const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8090
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/sql.js/dist/sql-wasm.wasm',
            to: 'wasm'
          },
          {
            from: 'src/lib/sql.db',
            to: 'db'
          }
        ]
      })
    ],
    externals: {
      fs: 'fs'
    },
    resolve: {
      modules: [
        resolve('src'),
        resolve('src/components')
      ],
      alias: {
        '@': resolve('src'),
        'src': resolve('src'),
        'api': resolve('src/api/'),
        'assets': resolve('src/assets'),
        'css': resolve('src/assets/css'),
        'components': resolve('src/components'),
        'directive': resolve('src/directive')
      },
      fallback: {
        'path': require.resolve('path-browserify'),
        'crypto': require.resolve('crypto-browserify'),
        'stream': require.resolve('stream-browserify')
      }
    }
  }
};

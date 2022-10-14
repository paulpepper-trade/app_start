const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.ENV == "production" ? "production" : "development",
  context: __dirname,
  entry: {
      main: [
        './common/static/common/js/application.js',
        './common/static/common/scss/application.scss'
      ]
  },
  output: {
      // Where Webpack will compile assets to
      path: path.resolve('./static/webpack_bundles/'),
      // Where the compiled assets will be accessed through Django
      // (they are picked up by `collectstatic`)
      publicPath: '/assets/webpack_bundles/',
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css'
    })
  ],

  module: {
    rules: [
      // Use file-loader to handle image assets
      {
        test: /\.(png|jpe?g|gif|woff2?|svg|ico)$/i,
        type: "asset/resource"
      },
      // Extract compiled SCSS separately from JS
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true
              },
            },
          },
        ]
      }
    ]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.scss']
  }
}

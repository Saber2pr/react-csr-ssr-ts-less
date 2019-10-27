const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanCSSPlugin = require("less-plugin-clean-css")
const { WebpackConfig, templateContent } = require("@saber2pr/webpack-configer")

const ExtractCSS = new ExtractTextPlugin("style.min.css")

module.exports = WebpackConfig({
  entry: path.join(__dirname, "client/app.tsx"),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    filename: "bundle.min.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: ExtractCSS.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "less-loader",
              options: {
                plugins: [
                  new CleanCSSPlugin({
                    advanced: true
                  })
                ]
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(woff|svg|eot|ttf)$/,
        use: ["url-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: templateContent("react-ssr-ts-less", {
        injectBody: '<div id="root"></div>'
      })
    }),
    ExtractCSS
  ]
})

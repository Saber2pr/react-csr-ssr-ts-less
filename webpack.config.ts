import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanCSSPlugin from 'less-plugin-clean-css'
import moment from 'moment'
import path from 'path'
import type { Configuration, Options } from 'webpack'
import type { ProxyConfigMap } from 'webpack-dev-server'

const isDev = process.env.NODE_ENV === 'development'

// html
const HTMLPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'index.html'),
  meta: {
    'app-version': moment().format('YYYYMMDDHHmmss'),
  },
})

// css, less, autoprefixer
const ExtractText = new ExtractTextPlugin('style.min.css')
const ExtractCSSLoader = ExtractText.extract({
  use: [
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        plugins: [
          new CleanCSSPlugin({
            advanced: true,
          }),
        ],
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [require('autoprefixer')],
      },
    },
  ],
  fallback: 'style-loader',
})

// code split
const splitChunksOptions: Options.SplitChunksOptions = {
  cacheGroups: {
    commons: {
      test: /\.js$/,
      name: 'vendors',
      chunks: 'all',
    },
  },
}

// proxy
const proxy: ProxyConfigMap = {
  '/api': {
    target: 'xxx',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    secure: false,
  },
}

// webpack config
export default {
  entry: path.join(__dirname, 'client', 'app.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, 'public'),
    // 这里是因为HtmlWebpackPlugin与publicPath冲突
    publicPath: isDev ? undefined : '/public/',
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    proxy,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: ExtractCSSLoader,
      },
      {
        test: /\.(woff|svg|eot|ttf)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [HTMLPlugin, ExtractText],
  optimization: {
    splitChunks: isDev ? false : splitChunksOptions,
  },
} as Configuration

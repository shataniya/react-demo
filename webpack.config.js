const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new WebpackManifestPlugin()
    ],
    devServer: {
        contentBase: './dist',
        open: true // 默认自动打开网页
    },
    module: {
        rules: [
          {
              test: /\.(js|jsx)$/,
              use: 'babel-loader'
          },  
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(csv|tsv)$/,
            use: [
              'csv-loader'
            ]
          },
          {
            test: /\.xml$/,
            use: [
              'xml-loader'
            ]
          }
        ]
    }
}
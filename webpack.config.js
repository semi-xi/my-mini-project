// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                auto: true
              },
            },
          },
        ],
      },
      {
        test: /^((?!\.module).)*css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    hot: true,
    open: true,
    port: 3000,
  },
};

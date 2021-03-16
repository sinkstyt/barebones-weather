import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const entry = './src/main.js';
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'dist')
};
export const devtool = 'eval-source-map';
export const devServer = {
  contentBase: './dist'
};
export const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
  })
];
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /spec/
      ],
      loader: "eslint-loader"
    }
  ]
};
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const imgOutput = 'sources/img/[hash][ext]';
const fontsOutput = 'sources/fonts/[hash][ext]';

module.exports = (_, { mode }) => ({
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: mode === 'production' ? false : 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.sass',
    ],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
      img: path.resolve(__dirname, 'src', 'img'),
      fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/i,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/i,
          /dist/i,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.pug/,
        use: 'pug-plain-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          mode === 'production' ? {
            loader: MiniCssExtractplugin.loader,
            options: {
              publicPath: '',
            },
          } : 'style-loader',
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          mode === 'production' ? MiniCssExtractplugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jp(e)?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `${imgOutput}`,
        },
      },
      {
        test: /^favicon\.(jp(e)?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: `${fontsOutput}`,
        }
      },
    ],
  },
  optimization: {
    minimize: mode === 'production' ? true : false,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 's-components',
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractplugin({
      filename: 'index.css',
    }),
  ],
});

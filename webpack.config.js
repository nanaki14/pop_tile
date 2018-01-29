const webpack  = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeEnv  = process.env.NODE_ENV;
const devBuild = nodeEnv !== 'production';
const autoprefixer = require('autoprefixer');
const precss = require("precss");

const commonLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    query: {
      presets: ['react', 'es2015']
    }
  },
  {
    test: /\.(png|svg|gif|jpg|jpeg)$/,
    loader: 'url-loader',
  }
];

module.exports = [{
  entry: [
    'babel-polyfill',
    __dirname + "/src/assets/js/index.jsx",
  ],
  output: {
    path: __dirname + '/dist/assets/js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: commonLoaders
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      }
    }),
    new webpack.ProvidePlugin({
      'React':    'react',
      'ReactDOM': 'react-dom',
      'styled': 'styled-components',
      '$':        'jquery',
      'jQuery':   'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template:  'ejs-render-loader!./src/index.ejs'
    })
  ]
},{
  entry: [
    __dirname + "/src/assets/css/style.scss",
  ],
  output: {
    path: __dirname + '/dist/assets/css/',
    filename: 'style.css'
  },
  module: {
    loaders: [
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?-url&minimize&sourceMap!sass-loader','postcss-loader']
        })
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: 'file-loader?name=../images/[path][name].[ext]',
        query: {
          useRelativePath: true
        }
      },
      {
        test: /fonts\/.+\.(eot|ttf|woff|svg)$/,
        loader: 'file-loader?name=../fonts/[path][name].[ext]',
        query: {
          useRelativePath: true
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: false
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    })
  ]
}];

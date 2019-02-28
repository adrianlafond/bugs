const path = require('path');

module.exports = {
  entry: './src/skin/pixi-simple.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'pixi-simple-skin.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'PixiSimpleSkin',
    umdNamedDefine: true
  }
};

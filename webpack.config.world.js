const path = require('path');

module.exports = {
  entry: './src/world/index.ts',
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
    filename: 'world.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'World',
    umdNamedDefine: true
  }
};

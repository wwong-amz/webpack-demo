const path = require('path');

module.exports = {
  entry: {
    app: './index.js',
    database: './src/database/database.js',
    util: './src/util/dateUtility.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
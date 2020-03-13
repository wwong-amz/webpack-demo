const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
  // If no modeoption has been set, webpack will fallback to 'production'
  // development: Sets process.env.NODE_ENV on DefinePlugin to value development . Enables NamedChunksPlugin and NamedModulesPlugin.
  // production: Sets process.env.NODE_ENV on DefinePlugin to value production . Enables FlagDependencyUsagePlugin , FlagIncludedChunksPlugin , ModuleConcatenationPlugin , NoEmitOnErrorsPlugin , OccurrenceOrderPlugin , SideEffectsFlagPlugin and TerserPlugin .
  mode: 'development',
  // The point or points where to start the application bundling process. If an array is passed then all items will be processed.
  // A dynamically loaded module is not an entry point.
  entry: {
    // awsSdk: 'aws-sdk',
    app: './index.js',
    getObject: './getObject.js',
    database: './src/database/database.js',
    util: ['./src/util/dateUtility.js', './src/util/getObjectType.js']
    // getDate: './src/util/dateUtility.js',
    // getObjectType: './src/util/getObjectType.js'
  },
  // The plugins option is used to customize the webpack build process in a variety of ways. webpack comes with a variety built-in plugins available under webpack.[plugin-name].
  plugins: [
    // Using this plugin to clean up the files that are not in use by the project
    new CleanWebpackPlugin(),
  ],
  // The top-level output key contains set of options instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack.
  output: {
    // The reason for the brackets around name is because that way we can dynamically set the bundle names to match their entry names
    filename: '[name].bundle.js',
    // The path defines where webpack will stored the compiled bundles.
    path: path.resolve(__dirname, 'dist'),
  }
};
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlTemplate = require('html-webpack-template')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Generate index.html file
exports.generateIndexPage = function (options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: htmlTemplate,
        title: options.title,
        appMountId: options.appMountId,
        inject: false
      })
    ]
  }
}

// Transpile ES6 & JSX syntax
exports.transpileBabel = function (include) {
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel',
          query: { cacheDirectory: true },
          include: include
        }
      ]
    }
  }
}

// Run eslint
exports.lintBabel = function (include) {
  return {
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['eslint'],
          include: include
        }
      ]
    }
  }
}

// Delete build folder between builds
exports.clean = function (path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  }
}

// Set environmental variables as text to optimize transpiling
exports.setFreeVariable = function (key, value) {
  const env = {}
  env[key] = JSON.stringify(value)

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  }
}

// Process the CSS into the javascript
exports.injectCSS = function (include) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: include
        }
      ]
    }
  }
}

// Extract vendor libraries to own chunks to provide independent caching
exports.extractBundle = function (options) {
  const entry = {}
  entry[options.name] = options.entries

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  }
}

// Minify files
exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
}

// Extract CSS to its own css file to style faster
exports.extractCSS = function (paths) {
  return {
    module: {
      loaders: [
        // Extract CSS during build
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: paths
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  }
}

// Start the dev server
exports.devServer = function (options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  }
}

const path = require('path')
const validate = require('webpack-validator')
const merge = require('webpack-merge')
const WPconfig = require('./lib/WPconfig.js')
const pkg = require('./package.json')

// Setup most relevant paths
const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app', 'main.scss'),
  build: path.join(__dirname, 'build')
}

// Setup the environment after the npm task running
const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const common = merge(
  {
    // Process the app folder
    entry: { app: PATHS.app },
    // Output at the build folder with simple file naming
    output: {
      path: PATHS.build,
      filename: '[name].js'
    }
  },
  // Generate index.html file
  WPconfig.generateIndexPage({
    title: 'FrontEnd Sandbox',
    appMountId: 'app'
  }),
  // Transpile ES6 & JSX syntax
  WPconfig.transpileBabel(PATHS.app),
  // Run eslint
  WPconfig.lintBabel(PATHS.app)
)

var config

switch (TARGET) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        // Generated separated source maps
        devtool: 'source-map',
        // Process CSS folder
        entry: { style: PATHS.style },
        // Add hash to files to provide better caching
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js'
        }
      },
      // Delete build folder between builds
      WPconfig.clean(PATHS.build),
      // Set environmental variables as text to optimize transpiling
      WPconfig.setFreeVariable('process.env.NODE_ENV', 'production'),
      // Extract vendor libraries to own chunks to provide independent caching
      WPconfig.extractBundle({
        name: 'vendor',
        entries: Object.keys(pkg.dependencies)
      }),
      // Minify files
      WPconfig.minify(),
      // Extract CSS to its own css file to style faster
      WPconfig.extractCSS(PATHS.style)
    )
    break
  default:
    config = merge(
      common,
      {
        // Generated 'faster-to-rebuild' source maps
        devtool: 'eval-source-map',
        // Process CSS folder
        entry: { style: PATHS.style }
      },
      // Process the CSS into the javascript
      WPconfig.injectCSS(PATHS.style),
      // Start the dev server
      WPconfig.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    )
}

// Validate this webpack config file
module.exports = validate(config, { quiet: true })

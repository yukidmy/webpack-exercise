// Ref.: https://ics.media/entry/12140/

// var path = require('path');

module.exports = {
    entry: `./src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },

    // production: enables optimization and compression / development: enables sourcemap
    // https://webpack.js.org/configuration/mode/
    mode: "development",

    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',  // suits for both development and production

    // Options for webtools-dev-server
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        // Where to serve content from
        // webpack-dev-server --content-base /path/to/content/dir
        contentBase: "dist",  // path.join(__dirname, 'dist')
        
        compress: true,
        open: true,  // Open the browser after server had been started
        port: 8080,

    },
  };
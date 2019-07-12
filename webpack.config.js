// https://ics.media/entry/12140/
// https://webpack.js.org/guides/

// var path = require('path');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry: `./src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },

    // production: enables optimization and compression / development: enables sourcemap
    // https://webpack.js.org/configuration/mode/
    mode: isDev ? "development" : "production",

    // https://webpack.js.org/configuration/devtool/
    devtool: isDev ? 'eval': 'source-map',  // suits for both development and production

    // https://webpack.js.org/configuration/module/
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            },
             {
                 test: /\.css$/,
                 use: [
                     'style-loader',
                     'css-loader'
                 ]
             }
        ]
    },

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
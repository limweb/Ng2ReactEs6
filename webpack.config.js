var ngAnnotatePlugin = require("ng-annotate-webpack-plugin");
module.exports = {
    entry: "./app.js",
    output: {
        path: "./dist",
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel',
                // query: {
                //   optional: ['es7.decorators'],
                //   stage: 0
                // }
            }
        ]
    },
    plugins: [
        new ngAnnotatePlugin({add: true})

    ],
    devServer: {
        hot: true,
        port: 3000
    }
   
};
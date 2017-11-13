const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const env = { production: NODE_ENV === 'production' };

const filePaths = {
    sourceDir: '/src/',
    outputDir: '/build/', // Root directory for the server to serve
    fileName: 'index.js',
    resourceDir: '/assests/'
};

console.log("LOG: ", __dirname)

module.exports = {
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'src/components/')
        }
    },
    devtool: 'source-map',
    entry: [
        'babel-polyfill', /* DO I NEED THIS */
        `.${filePaths.sourceDir}${filePaths.fileName}`
    ],
    output: {
        // path: filePaths.outputDir,
        path: path.join(process.cwd(), filePaths.outputDir),
        // pathInfo: true, /* WHAT DOES THIS DO?? */
        // publicPath: filePaths.resourceDir, /* WHAT DOES THIS DO?? */
        filename: filePaths.fileName
    },
    plugins: [
        new HtmlWebpackPlugin({ /* Injects index.html in build dir */
            title: "Blog"
        })
    ],
    module: {
        rules: [
            // { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: "babel-loader", exclude: /(node_modules|bower_components)/ }, /* presets in .babelrc */
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file-loader?name=[name].[hash].[ext]', exclude: /(node_modules|bower_components)/ },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
            // {test: /\.scss$/, loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'}
        ],
        noParse: /\.min\.js/
    }
};

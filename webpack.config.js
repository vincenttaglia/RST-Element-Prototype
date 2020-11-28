const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = {
    mode: "development",
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watchOptions: {
        poll: true,
        ignored: ["node_modules/**"],
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname),
        watchContentBase: true,
        compress: true,
        publicPath: "/",
        watchOptions: {
            poll: true,
            ignored: ["node_modules/**"],
        },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                },
            }
        ]
    },
    plugins: [
        new ExtraWatchWebpackPlugin({
            dirs: [ path.join(__dirname, 'src') ],
        }),
        new HtmlWebpackPlugin({
            title: "Index",
            template: path.join(__dirname, "./src/templates/index.html"),
            filename: "index.html",
            minify: false,
            inject: false,

        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/dropdown.html'),
            location: 'dropdown',
            template_filename: "index.html",
        })
    ],
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = {
    mode: "development",
    watch: true,
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
            template: "./src/templates/index.html",
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
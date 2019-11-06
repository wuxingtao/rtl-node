const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge.strategy(
    {
        entry: 'prepend', // or 'replace', defaults to 'append'
        'module.rules': 'replace'
    }
)(base, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, { loader: MiniCssExtractPlugin.loader }, {
                loader: 'rtlcss-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        })
    ]
});


const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.common');

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    }
});
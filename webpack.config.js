const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash:8].bound.js"
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
};

const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // contentBase: path.join(__dirnamr, 'dist')
        index: './index.html'
    },
    optimization: {
        minimize: false
    }
}
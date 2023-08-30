const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: path.resolve(__dirname, 'dist')
    }
    
}

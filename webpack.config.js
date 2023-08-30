const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // adiciona CSS a DOM injetando a tag <style>
                    'css-loader' // interpreta @import, url()...
                ]
            }
        ]
    }
    
}

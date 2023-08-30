const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'principal.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // extrai o css para um arquivo externo. O plugin abaixo foi comentado para evitar conflito
                    //'style-loader', // adiciona CSS a DOM injetando a tag <style>
                    'css-loader' // interpreta @import, url()...
                ]
            }
        ]
    }
    
}

const path = require('path');

module.exports = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.scss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // загрузка справа -> налево
            }
        ]
    },
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, './public'),
        port: 3000
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },

};
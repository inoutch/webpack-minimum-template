import path from 'path';

export default {
    entry: [
        path.join(__dirname, 'src/javascript/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [],
    devServer: {
        hot: true
    }
}

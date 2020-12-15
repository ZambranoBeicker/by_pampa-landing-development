const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const htmlWebpack = new htmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.template.html'),
    filename: './index.html',
    minify: 'auto',
})

module.exports = {
    entry: { index: path.resolve(__dirname, 'src/js', 'index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '.',
        filename: 'assets/bundle.js',
    },
    plugins: [
        htmlWebpack,
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
    ],
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    options: {
                        limit: 8192,
                    },
                },
            },
        ],
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist',
        open: true,
    },
}

const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const resolve = path => {
    return Path.resolve(path)
}

module.exports = {
    entry: resolve('src/main'),
    output: {
        path: resolve('dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name][id].chunk.js',
        clean: true
    },
    mode: 'development',

    cache: {
        type: "filesystem",
    },
    resolve: {
        alias: {
            '@$': resolve('src'),
            '@api': resolve('src/api'),
            '@assets': resolve('src/assets'),
            '@comp': resolve('src/components'),
            '@views': resolve('src/views'),
            '@hooks': resolve('src/hooks'),
            '@utils': resolve('src/utils')
        },
        extensions: ['.vue', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                include: resolve('src/assets'),
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/[name][hash:8][ext]",
                },
            },
            {
                test: /\.vue$/,
                include: resolve('src'),
                exclude: /node_modules/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                include: resolve('src'),
                exclude: /node_modules/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(j|t)s$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: true
        })
    ],
    devServer: {
        static: resolve('./dist'),
        port: 8080,
        compress: true,
        https: false,
        hot: true,
        open: true,
        proxy: { // 启动代理
            "/api": {
                target: "http://localhost:3000/",
            }
        }
    }
}
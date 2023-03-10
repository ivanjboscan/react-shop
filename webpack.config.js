const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
        publicPath: '/'
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx'],
        alias: {
            '@assets': path.resolve(__dirname,'src/assets'),
            '@components': path.resolve(__dirname,'src/components'),
            '@containers': path.resolve(__dirname,'src/containers'),
            '@pages': path.resolve(__dirname,'src/pages'),
            '@routes': path.resolve(__dirname,'src/routes'),
            '@styles': path.resolve(__dirname,'src/styles'),
            '@context': path.resolve(__dirname,'src/context'),
            '@hooks': path.resolve(__dirname,'src/hooks'),
            '@icons': path.resolve(__dirname,'src/assets/icons'),
            '@logos': path.resolve(__dirname,'src/assets/logos'),
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                    }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                type: 'asset',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html', 
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer: {
        historyApiFallback: true,
    //    contentBase: path.join(__dirname, 'dist'),
    //    compress: true,
    //    port: 3005,
    }
}

let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports={
    entry:path.resolve('./src/index.js'),
    output:{
        path:path.resolve('./build'),
        filename:'bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:'./build',
        inline:true
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader"
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'myBook',
            template:'./src/index.html'
        }),
        new OpenBrowserWebpackPlugin({url: 'http://localhost:8080'})
    ]
}
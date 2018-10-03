var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

//定义地址
var ROOT_PATH = path.join(__dirname, '../../../');
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '/build/static'); //发布文件所存放的目录
console.log(path.resolve(ROOT_PATH, 'index.html'))
console.log(path.resolve(APP_PATH, 'index.html'))

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            APP_FILE
        ]
    },
    output: {
        publicPath: '/build/static', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //发布文件地址
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['.js', '.jsx'], //后缀名自动补全
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            use: ['babel-loader'],
            include: [APP_PATH]
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            use: ['style-loader', 'css-loader', 'autoprefixer-loader']
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader'],
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            use: 'file-loader?name=[name].[ext]',
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            use: ['jsx-loader', 'babel-loader'],
            include: [APP_PATH]
        }]
    },
    devServer: {
         open: true,
         port: 9000,
         hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({  
            filename: 'index.html',
            template: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

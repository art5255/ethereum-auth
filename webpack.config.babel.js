import {CleanWebpackPlugin} from "clean-webpack-plugin";
import HtmlPlugin from "html-webpack-plugin";
import HappyPack from "happypack";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {HotModuleReplacementPlugin, EnvironmentPlugin} from "webpack";
import autoprefixer from "autoprefixer";
import pickBy from "lodash/pickBy";

const isDev = (mode) => mode === "development";

export default (env, { mode }) => {
    const config = {
        path: `${__dirname}/public`,
        html: {
            filename: "index.html",
            inject: "body",
            template: `${__dirname}/src/index.html`,
            favicon: `${__dirname}/src/logo.svg`,
        },
        css: {
            filename: isDev(mode) ?
                "css/[name].css" :
                "css/[name].[chunkhash].css",
            allChunks: true,
            publicPath: 'css',
        },
    };
    return {
        devtool: isDev(mode) && "inline-source-map",
        entry: pickBy({
            "react-hot-loader/patch": isDev(mode) && "react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:9000": isDev(mode) && "webpack-dev-server/client?http://localhost:9000",
            "webpack/hot/only-dev-server": isDev(mode) && "webpack/hot/only-dev-server",
            bundle: "./src/index.tsx",
        }),
        output: {
            path: config.path,
            publicPath: '/',
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[id].bundle.[chunkhash].js',
        },
        resolve: {
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
            plugins: [
                new TsconfigPathsPlugin(),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?/,
                    exclude: /node_modules\/(?!.*@subscription.*$)/,
                    loader: "happypack/loader?id=ts",
                },
                {
                    test: /\.(css)$/,
                    use: [
                        "css-hot-loader",
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins() {
                                    return [
                                        autoprefixer([
                                            "> 2%",
                                        ]),
                                    ];
                                }
                            },
                        },
                    ],
                },
                {
                    test: /.*\.(ttf|eot|svg|woff|woff2|png|ico|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: isDev(mode) ?
                                    "[path][name].[ext]" :
                                    "[path][name].[hash].[ext]",
                                outputPath: "assets/",
                                publicPath: "/assets/"
                            }
                        },
                    ],
                }
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
            new HtmlPlugin(config.html),
            new MiniCssExtractPlugin(config.css),
            new EnvironmentPlugin({
                NODE_ENV: mode,
            }),
            new HappyPack({
                id: 'ts',
                threads: 4,
                loaders: [
                    {
                        path: "babel-loader",
                        exclude: [/node_modules/]
                    },
                ]
            })
        ],
        devServer: {
            port: 9000,
            host: '0.0.0.0',
            contentBase: './public',
            hot: true,
            historyApiFallback: true,
            publicPath: '/',
        },
    };
}


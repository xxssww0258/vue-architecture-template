// const config = require("./src/config");
const path = require("path");
module.exports = {
  publicPath: ".",
  devServer: {
    proxy: {
      api: {
        target: "http://localhost:4000",
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(path.resolve(__dirname, "./src/icons/svg"))
      .end();

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "./src/icons/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
    // console.log(JSON.stringify(config.toConfig().module, null, "    "));
  },
  configureWebpack: {}
};

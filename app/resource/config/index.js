// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var pkg = require('../../../package.json');
var staticDir = path.resolve(__dirname, '../../node_modules/.ua-release-webroot/static/' + pkg.name + '/dist');
console.log("22222222");
console.dir(__dirname);
console.dir(process.argv.slice(-2));
var env = process.argv.slice(-2);
// 获取当前环境变量
env = env[0] === "--env" ? env[1] : `local`;

var staticLibURI;
switch (env) {
  case "product":
    staticLibURI = '//as.zbjimg.com';
    break;
  case "local":
    staticLibURI = `//localhost:8080`;
    break;
  default:
    staticLibURI = `//as.${env}.zbjdev.com`;
}

module.exports = {
  common: {
    resourcePath: path.join(__dirname, '../../resource/src')
  },
  build: {
    env: require('./prod.env'),
    index: path.resolve(staticDir, 'index.html'),
    assetsRoot: staticDir,
    assetsSubDirectory: 'static',
    assetsPublicPath: staticLibURI + '/static/' + pkg.name + '/dist/',
    outPath: path.join(__dirname, '../../node_modules/.ua-release-webroot/static/' + pkg.name + '/'),
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: staticLibURI + '/static/yibaoquan-web/', // 此处为了支持 webpack 热加载，必须写上全路径。（重要）
    proxyTable: {},
    outPath: path.join(__dirname, '../../dist'), // 本地开发环境输出到 dist 文件夹
    cssSourceMap: false
  }
}

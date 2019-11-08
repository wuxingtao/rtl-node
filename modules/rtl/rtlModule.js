/**
 * @author wu xingtgao
 * @date 2019-11-07
 * @Description:
 */
const rtlStyle = require('./rtlcss');
const minify = require('html-minifier').minify;

module.exports = async(code) => {
    const rtlApp = new rtlStyle(code);
    const result = await rtlApp.init();
    return result;
    // return minify(result,{
    //     collapseWhitespace: true, //折叠有助于文档树中文本节点的空白区域
    //     minifyCSS:true,
    //     minifyJS:true
    // });
};
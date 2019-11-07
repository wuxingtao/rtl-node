/**
 * @author wu xingtgao
 * @date 2019-11-07
 * @Description:
 */
const rtlCli = require('./rtlcss');

module.exports = async(code) => {
    const rtlApp = new rtlCli(code);
    const result = await rtlApp.init();
    return result;
};
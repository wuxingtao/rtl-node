/**
 * @author wu xingtgao
 * @date 2019-11-07
 * @Description: rtlcss Class类
 */
const rtlcss = require('rtlcss');

class RtlCssServer {
    constructor (code) {
        this.code = code;
    }

    init = async () => {
        if (!this.code) {
            return false;
        }
        const reg1 = /\s{1}style="(.*?)"/g; // 匹配带空格的style="
        const reg2 = /<style>(.*?)<\/style>/g;
        const match1 = this.code.match(reg1);
        const match2 = this.code.match(reg2);
        // return this.code;
        for (let index = 0; index < match1.length; index++) {
            this.code = this.code.replace(match1[index], this.styleTrans(1, match1[index]));
        }

        for (let index = 0; index < match2.length; index++) {
            this.code = this.code.replace(match2[index], this.styleTrans(2, match2[index]));
        }
        console.log('rtl ended');
        // return this.code;
        return this.code.substring(1, this.code.length - 1);
    };

    /**
     * 匹配style 类型替换为RTL css
     * @param type  1 style="float:right;" 2 <style>.div{float:right}</style>
     * @param str type类型字符串
     */
    styleTrans = (type, str) => {
        let filterValue = null;
        let result = '';
        switch (type) {
            case 1:
                filterValue = str.substr(0, str.length - 1).replace('style="', '');
                // rtl style String rtl转换后到字符串
                result = ` style="${this.rtlTrans(filterValue)}"`;
                break;
            case 2:
                filterValue = /<(style)(?:[^>]*)?>([\s\S]*?)(?:<\/\1>[^\"\']|<\/\1>$)/ig.exec(str)[2];
                result = `<style>${this.rtlTrans(filterValue)}</style>`;
                break;
            default:
        }
        return result;
    };


    /**
     * rtlcss库 css转换命令
     * @param str
     * @returns {*}
     * var result = rtlcss.process("magint-right:10px;");
     */
    rtlTrans = (str) => {
        console.log(`need rtl : ${str}`);
        return rtlcss.process(str);
    };
}

module.exports = RtlCssServer;
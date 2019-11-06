import Vue from 'vue';
import App from './App.vue';

var rtlcss = require('rtlcss');
// var code = '<div style="magint-right:10px;"><p style="float:left;"></p></div><style>a{margin-right: 10px;padding-right: 20px;}</style><style>div{float:right;}</style>';

// var code = '<div data-v-735c7e8c="" class="wrap"><div data-v-735c7e8c="" class="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-autoheight"> <div class="swiper-wrapper" style="transition-duration: 0ms; height: 477px;"><div data-v-735c7e8c="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 1336px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshoptest.s3.amazonaws.com/uploads/zpgs06PvUma9Dhq2HdR7LTjwcnlAXSbE.png" class="swiper-lazy swiper-lazy-loaded"></a></div><div data-v-735c7e8c="" class="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 1336px; transition-duration: 0ms; opacity: 1; transform: translate3d(-1336px, 0px, 0px);" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshoptest.s3.amazonaws.com/uploads/zpgs06PvUma9Dhq2HdR7LTjwcnlAXSbE.png" class="swiper-lazy swiper-lazy-loaded"></a></div>  <!----> <!----><div data-v-735c7e8c="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 1336px; transition-duration: 0ms; opacity: 0; transform: translate3d(-2672px, 0px, 0px);" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshoptest.s3.amazonaws.com/uploads/zpgs06PvUma9Dhq2HdR7LTjwcnlAXSbE.png" class="swiper-lazy swiper-lazy-loaded"></a></div></div> <div data-v-735c7e8c="" class="swiper-pagination swiper-pagination-pc swiper-default-dot swiper-pagination-clickable swiper-pagination-bullets" style="display: none;"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span></div>   <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div> <div data-v-735c7e8c="" class="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-autoheight" style="display: none;"> <div class="swiper-wrapper" style="transition-duration: 0ms;"><div data-v-735c7e8c="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshopimg.logsss.com/uploads/0vpxHOz9lsCGnERZVThBfdcyF7Kwk1me.png" data-src="https://geshopimg.logsss.com/uploads/esZuGah348NAH09F6jpKRwcoyMbDmzXT.png" class="swiper-lazy"></a></div><div data-v-735c7e8c="" class="swiper-slide" data-swiper-slide-index="0" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshopimg.logsss.com/uploads/0vpxHOz9lsCGnERZVThBfdcyF7Kwk1me.png" data-src="https://geshopimg.logsss.com/uploads/esZuGah348NAH09F6jpKRwcoyMbDmzXT.png" class="swiper-lazy"></a></div> <div data-v-735c7e8c="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshopimg.logsss.com/uploads/0vpxHOz9lsCGnERZVThBfdcyF7Kwk1me.png" data-src="https://geshopimg.logsss.com/uploads/esZuGah348NAH09F6jpKRwcoyMbDmzXT.png" class="swiper-lazy"></a></div></div> <div data-v-735c7e8c="" class="swiper-pagination swiper-pagination-pad swiper-default-dot swiper-pagination-bullets" style="display: none;"></div>   <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div> <div data-v-735c7e8c="" class="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-autoheight" style="display: none;"> <div class="swiper-wrapper" style="transition-duration: 0ms;"><div data-v-735c7e8c="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshopimg.logsss.com/uploads/0vpxHOz9lsCGnERZVThBfdcyF7Kwk1me.png" data-src="https://geshopimg.logsss.com/uploads/HsvKLCn5tj7pQEPJzXgcrSuM3NhUBkFl.png" class="swiper-lazy"></a></div><div data-v-735c7e8c="" class="swiper-slide" data-swiper-slide-index="0" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshopimg.logsss.com/uploads/0vpxHOz9lsCGnERZVThBfdcyF7Kwk1me.png" data-src="https://geshopimg.logsss.com/uploads/HsvKLCn5tj7pQEPJzXgcrSuM3NhUBkFl.png" class="swiper-lazy"></a></div> <div data-v-735c7e8c="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" data-src="src"><a data-v-735c7e8c="" target="_blank" href="javascript:;"><img data-v-735c7e8c="" src="https://geshopimg.logsss.com/uploads/0vpxHOz9lsCGnERZVThBfdcyF7Kwk1me.png" data-src="https://geshopimg.logsss.com/uploads/HsvKLCn5tj7pQEPJzXgcrSuM3NhUBkFl.png" class="swiper-lazy"></a></div></div> <div data-v-735c7e8c="" class="swiper-pagination swiper-pagination-m swiper-default-dot swiper-pagination-bullets" style="display: none;"></div>   <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div></div>';
// var reg = /style="(.*?)"|<style>(.*?)<\/style>/g
import {code} from '@/assets/mock/test.js';

var reg1 = /style="(.*?)"/g;
var reg2 = /<style>(.*?)<\/style>/g;
var match1 = code.match(reg1);
var match2 = code.match(reg2);
for (var index = 0; index < match1.length; index++) {
    code = code.replace(match1[index], styleTrans(1, match1[index]));
}

for (var index = 0; index < match2.length; index++) {
    code = code.replace(match2[index], styleTrans(2, match2[index]));
}

/**
 * 匹配style 类型替换为RTL css
 * @param type  1 style="float:right;" 2 <style>.div{float:right}</style>
 * @param str type类型字符串
 */
function styleTrans (type, str) {
    let filterValue = null;
    let result = '';
    switch (type) {
        case 1:
            filterValue = str.substr(0, str.length - 1).replace('style="', '');
            // rtl style String rtl转换后到字符串
            result = `style="${rtlTrans(filterValue)}"`;
            break;
        case 2:
            filterValue = /<(style)(?:[^>]*)?>([\s\S]*?)(?:<\/\1>[^\"\']|<\/\1>$)/ig.exec(str)[2];
            result = `<style>${rtlTrans(filterValue)}</style>`;
            break;
        default:
    }
    return result;
}

// var result = rtlcss.process("magint-right:10px;");
function rtlTrans (str) {
    console.log(str);
    return rtlcss.process(str);
}

console.log(code);


/* Vue 实例化*/
new Vue({
    render: h => h(App) //渲染组件
}).$mount('#app');
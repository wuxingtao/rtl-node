/**
 * @author wu xingtgao
 * @date 2019-11-07
 * @Description:
 */

const Router = require('koa-router');
const router = new Router();

// rtl服务
const rtlModule = require('../modules/rtl/rtlModule');

router.post('/translate', async (ctx, next) => {
    console.log('rtl------translate start');
    // await next();
    const { htmlCode } = ctx.request.body;
    // ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    let resBody = {
        code: 0,
        data: {
            html: ''
        },
        message: 'success'
    };
    if (htmlCode) {
        try {
            result = await rtlModule(htmlCode).then(async function (value) {
                console.log(value);
                ctx.body = Object.assign(resBody, {
                    data: { html: value }
                });
            });
        } catch (err) {
            ctx.body = Object.assign(resBody, {
                message: 'error'
            });
        }
    }
});

module.exports = router;
const bodyParser = require('koa-bodyparser');
// routes
const Router = require('koa-router');
const router = new Router();
const rtlCtrl = require('./routes/rtl')
// body 解析
const koaBody = require('koa-body');



module.exports =  (app) => {
// 默认 body post参数解析
//     router.use(bodyParser());
    app.use(koaBody({multipart: true, jsonLimit: '50mb',formLimit : '50mb'}));

    router.get('/',(ctx,next)=>{
        ctx.body = 10;
    });
    // rtl 路由服务
    router.use('/rtl',rtlCtrl.routes());

    app.use(router.routes())
        .use(router.allowedMethods())
        .listen(3001, () => {
            console.log('App started, bind port %d, CTRL + C to terminate', 3001);
        });
}
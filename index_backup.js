const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
/* server服务 */
const app = new Koa();
const router = new Router();

/* 中间件 */
const rtlMiddleware = require('./modules/rtlTranslate')

// 默认 body post参数解析
router.use(bodyParser());

router.get('/index',(ctx,next)=>{

});

router.use('/rtl-post',rtlMiddleware)


app.use(router.routers())
    .use(router.allowedMethods())
    .listen(3001);
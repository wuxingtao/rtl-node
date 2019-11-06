const Koa = require('Koa');
const Router = require('Koa-router');
const bodyParser = require('koa-bodyparser');

const App = new Koa();
const router = new Router();

// rtl服务
const rtlcss = require('rtlcss')

// 默认 body post参数解析
router.use(bodyParser());

App.get('/');

App.use(router.routers())
    .use(router.allowedMethods())
    .listen(3001);
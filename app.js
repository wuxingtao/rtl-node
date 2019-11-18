const Koa = require('koa')
const middlewareRegister = require('./middleRegister')

const app = new Koa();
middlewareRegister(app)

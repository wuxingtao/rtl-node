/**
 * @author wu xingtgao
 * @date 2019-11-07
 * @Description:
 */
const Router =require('koa-router')
const router = new Router();

import rtlServer from './routes/rtl'

router.use('/rtl-server',rtlServer)

module.exports = router
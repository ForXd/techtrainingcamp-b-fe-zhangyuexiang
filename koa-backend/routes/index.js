const Router = require('koa-router');
const pathLib = require('path');

let router = Router();


router.use('/', require('./searchRouter'));


module.exports = router.routes();
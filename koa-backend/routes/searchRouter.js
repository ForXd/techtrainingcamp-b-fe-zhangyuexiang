const Router = require('koa-router');
const fs = require('fs');
const get = require('../libs/request');
const { off } = require('process');
let router = Router();

const pageCount = 10;

// get result https://i.snssdk.com/search/api/study/
router.get('study', async ctx => {
    let keyword = ctx.query.keyword;
    let offset = ctx.query.offset;

    let res = await get(`https://i.snssdk.com/search/api/study/?keyword=${keyword}&offset=${offset}`)
    ctx.body = res;
})
// get key word https://i.snssdk.com/search/api/sug/
router.get('sug', async ctx => {
    let keyword = ctx.query.keyword;

    let res = await get(`https://i.snssdk.com/search/api/sug/?keyword=${keyword}`)
    ctx.body = res;
})



module.exports = router.routes();
const NewsModel = require('../model/news');
const Response = require('../util/response');

class NewsController {
    /**
     * 获取新闻
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        const {keywords, num, page} = ctx.request.query;
        const offset = page * (num - 1);
        const limit = parseInt(num);

        await NewsModel.get(keywords, offset, limit)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取新闻列表失败'));
    }
}

module.exports = NewsController;

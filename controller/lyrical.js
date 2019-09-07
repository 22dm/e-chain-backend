const LyricalModel = require('../model/lyrical');
const Response = require('../util/response');

class LyricalController {
    /**
     * 获取舆情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        const {num, page, type} = ctx.request.query;
        const offset = page * (num - 1);
        const limit = parseInt(num);

        //TODO: type 尚不明确

        await LyricalModel.get(type, offset, limit)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取舆情列表失败'));
    }
}

module.exports = LyricalController;

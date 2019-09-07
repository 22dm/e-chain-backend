const ReportModel = require('../model/report');
const Response = require('../util/response');

class ReportController {
    /**
     * 获取研报
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        const {num, page} = ctx.request.query;
        const offset = page * (num - 1);
        const limit = parseInt(num);

        await ReportModel.get(offset, limit)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取研报列表失败'));
    }
}

module.exports = ReportController;


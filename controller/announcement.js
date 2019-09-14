const AnnouncementModel = require('../model/announcement');
const Response = require('../util/response');

class AnnouncementController {
    /**
     * 获取公告
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        const {num, page} = ctx.request.query;
        const offset = page * (num - 1);
        const limit = parseInt(num);

        await AnnouncementModel.get(offset, limit)
            .then(data => {ctx.body = Response.success(data);console.log(data)})
            .catch(() => ctx.body = Response.failed('获取公告列表失败'));
    }
}

module.exports = AnnouncementController;

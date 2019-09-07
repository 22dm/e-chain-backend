const PolicyModel = require('../model/policy');
const Response = require('../util/response');

class PolicyController {
    /**
     * 获取政策
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        const {num, page} = ctx.request.query;
        const offset = page * (num - 1);
        const limit = parseInt(num);

        await PolicyModel.get(offset, limit)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取政策列表失败'));
    }
}

module.exports = PolicyController;

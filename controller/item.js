const ItemModel = require('../model/item');
const Response = require('../util/response');

class ItemController {
    /**
     * 获取舆情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async updatePrice(ctx) {

        //TODO: type 尚不明确

        await ItemModel.updatePrice()
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('更新失败'));
    }
    static async getRecommend(ctx) {

        await ItemlModel.getRecommend()
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取推荐失败'));
    }
}

module.exports = ItemController;
const PortfolioModel = require('../model/portfolio');
const Response = require('../util/response');

class PortfolioController {

    static async buy(ctx) {
        console.log(ctx.request.body);
        const {items,user_id} = ctx.request.body;
        await PortfolioModel.buy(items,user_id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('购买失败'));
    }
    static async sell(ctx) {
        const {id} = ctx.request.body;
        await PortfolioModel.sell(id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('卖出失败'));
    }
    static async recommend(ctx) {
        const {id} = ctx.request.body;
        await PortfolioModel.recommend(id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('推荐失败'));
    }
    static async getHistory(ctx) {
        const user_id=JSON.parse(ctx.request.query.params).user_id;
        console.log(user_id);
        await PortfolioModel.getHistory(user_id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取历史记录失败'));
    }
    static async getRecommend(ctx) {
        await PortfolioModel.getRecommend()
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取推荐失败'));
    }
    static async getPortfolio(ctx) {
        const id=JSON.parse(ctx.request.query.params).id;
        await PortfolioModel.getPortfolio(id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取组合失败'));
    }
}

module.exports = PortfolioController;

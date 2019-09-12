const PortfolioModel = require('../model/portfolio');
const Response = require('../util/response');

class ReportController {

    static async buy(ctx) {
        const {items,userId} = ctx.request.query;
        await PortfolioModel.buy(items,userId)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('购买失败'));
    }
    static async sell(ctx) {
        const id = ctx.request.query;
        await PortfolioModel.sell(id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('卖出失败'));
    }
    static async recommend(ctx) {
        const id = ctx.request.query;
        await PortfolioModel.recommend(id)
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('推荐失败'));
    }
    static async getHistory(ctx) {
        await PortfolioModel.getHistory()
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取历史记录失败'));
    }
    static async getRecommend(ctx) {
        await PortfolioModel.getRecommend()
            .then(data => ctx.body = Response.success(data))
            .catch(() => ctx.body = Response.failed('获取推荐失败'));
    }
}

module.exports = PortfolioController;

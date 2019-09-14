const StockModel = require('../model/stock');
const Response = require('../util/response');

class StockController {
  /**
   * 获取股票信息
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async get(ctx) {
    const { code } = ctx.request.query;

    await StockModel.get(code)
      .then(data => ctx.body = Response.success(data))
      //.catch(() => ctx.body = Response.failed('获取股票信息失败'));
  }
}

module.exports = StockController;

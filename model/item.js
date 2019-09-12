const db = require('../config/db');
const Item = db.import('../schema/item');

Item.sync();

class ItemModel {
    //更新最新的情报
    static async updatePrice() {

    }

    //获取推荐
    static async getRecommend() {
        const stocks_raw = Item.findAll({where: {type: 0}});
        let stocks;
        for (let stock in stocks_raw) {
            stocks.push({
                name: stock.name,
                code: stock.code,
                price: stock.now_price.toFixed(2) + ''
            })
        }
        const funds_raw = Item.findAll({where: {type: 1}});
        let funds;
        for (let fund in funds_raw) {
            funds.push({
                name: fund.name,
                code: fund.code,
                price: fund.now_price.toFixed(2) + ''
            })
        }
        return {stock: stocks, fund: funds};
    }
}

module.exports = ItemModel;

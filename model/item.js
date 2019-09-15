const db = require('../config/db');
const Item = db.import('../schema/item');

Item.sync();

class ItemModel {
    //更新最新的情报
    static async updatePrice() {

    }

    //获取推荐
    static async getRecommend() {
        const stocks_raw = await Item.findAll({where: {type: 0}});
        console.log("shabi");
        let stocks=[];
        for (let i=0;i<stocks_raw.length;i++) {
            const stock=stocks_raw[i].dataValues;
            stocks.push({
                name: stock.name,
                code: stock.code,
                price: stock.now_price.toFixed(2) + ''
            })
        }
        const funds_raw = await Item.findAll({where: {type: 1}});
        let funds=[];
        for (let i=0;i<stocks_raw.length;i++) {
            const fund=funds_raw[i].dataValues;
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

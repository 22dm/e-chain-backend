const db = require('../config/db');
const Stock = db.import('../schema/stock');

Stock.sync();

class StockModel {
  /**
   * 查询股票信息
   * @param code 股票代码
   * @returns 股票信息
   */
  static async get(code) {
    const stock = (await Stock.findOne({ where: { code } })).dataValues;
    let res = {
      name: stock.name,
      code: stock.code,
      day: [],
      week: [],
      month: [],
      main: [],
      basic: []
    }

    for (let i = 1; i <= 20; i++) {
      res.day.push({ time: stock['day' + i + 'date'], value: stock['day' + i + 'value'] });
    }

    for (let i = 1; i <= 12; i++) {
      res.week.push({ time: stock['week' + i + 'date'], value: stock['week' + i + 'value'] });
    }

    for (let i = 1; i <= 5; i++) {
      res.main.push({ name: stock['main' + i + 'name'], income: stock['main' + i + 'value'] });
    }

    for (let i = 1; i <= 12; i++) {
      res.month.push({ time: stock['month' + i + 'date'], value: stock['month' + i + 'value'] });
    }

    for (let i of ["total_mv","circ_mv","total_share","float_share","turnover_rate","pe_ttm","pb","ps_ttm","assets_turn","roe_yearly","type","p_change_min","p_change_max","net_profit_min","net_profit_max"]){
      if(i != 'type'){
        res.basic.push(stock[i].toFixed(2) + "");
      } else{
        res.basic.push(stock[i]);
      }
    }
    
    return res;
  }
}

module.exports = StockModel;

const db = require('../config/db');
const Portfolio = db.import('../schema/portfolio');
const PortfolioItem = db.import('../schema/portfolio_item');
const PortfolioHistory = db.import('../schema/portfolio_history');
const Item = db.import('../schema/item');
Item.sync();
Portfolio.sync();
PortfolioItem.sync();
PortfolioHistory.sync();

class PortfolioModel {
    //买入
    static async buy(items, userId) {
        let myDate = this.getTime();
        Portfolio.create({user_id: userId, buy_time: myDate,recommend:0});
        const portfolios= await Portfolio.findAll();
        const id=portfolios[portfolios.length-1].id+1;
        PortfolioHistory.create({  type: 0, portfolio_id: id });
        for (let i=0;i<items.length;i++) {
            const item=items[i];
            const item_id=await Item.findOne({where:{name:item.name}});
            await PortfolioItem.create({ item_id: item_id.id, buy_price: item.price, amount: item.amount, portfolio_id:id });
        }
        return 0;
    }
    //卖出
    static async sell(id) {
        console.log(id);
        let myDate = this.getTime();
        Portfolio.update({sell_time : myDate}, {where: {id: id}});
        Portfolio.update({sell_price : 0}, {where: {portfolio_id: id}})
        PortfolioHistory.create({ type: 1, portfolio_id: id });
        return 0;

    }

    //推荐
    static async recommend(id) {
        Portfolio.update({recommend : 1}, {where: {id: id}});
        return 0;
    }

    //获得历史记录，按时间降序
    static async getHistory(user_id) {
        let history=[];
        const portfolioHistory = await PortfolioHistory.findAll();
        let len=portfolioHistory.length;
        let tag;
        let time;
        let type;
        let start=0;
        for(let start=0;start<len;start++) {
            let id=portfolioHistory[len-1-start].id;
            const portfolio_history = await PortfolioHistory.findOne({ where: { id:id  } });
            const portfolio =await Portfolio.findOne({where: { id: portfolio_history.portfolio_id}});
            if(portfolio.user_id===user_id) {
                let items = [];
                const portfolioItems = await PortfolioItem.findAll({where: {portfolio_id: portfolio.id}});
                for (let j = 0; j < portfolioItems.length; j++) {
                    const portfolioItem = portfolioItems[j].dataValues;
                    const item = await Item.findOne({where: {id: portfolioItem.item_id}});
                    if (item.type === 0) {
                        type = "股票";
                    } else {
                        type = "基金";
                    }
                    items.push(
                        {
                            type: type,
                            name: item.name,
                            code: item.code,
                            buy_price: portfolioItem.buy_price.toFixed(2) + "",
                            amount: portfolioItem.amount.toFixed(2) + "",
                            sum: (portfolioItem.buy_price * portfolioItem.amount).toFixed(2) + ""
                        }
                    )
                }
                if (portfolio_history.type === 0) {
                    tag = "买入";
                    time = portfolio.buy_time;
                } else {
                    tag = "卖出";
                    time = portfolio.sell_time;
                }
                history.push({
                    name: portfolio.id+"",
                    tag: tag,
                    time: time.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
                    items: items
                });
            }

        }
        return history;
    }

    static async getRecommend() {
        // const portfolioAll=await Portfolio.findAll();
        // const id=portfolioAll[portfolioAll.length].dataValues.id;
        const portfolios = await Portfolio.findAll({ where: { recommend: 1 } });
        let recommendPortfolio = [];
        for (let i = 0; i < portfolios.length; i++) {
            const portfolio = portfolios[i].dataValues;
            const portfolioItems = await PortfolioItem.findAll({ where: { portfolio_id: portfolio.id } });

            let items = [];
            let twenty_days_price = 0;
            for (let j = 0; j < portfolioItems.length; j++) {
                const portfolioItem = portfolioItems[j].dataValues;
                const item = await Item.findOne({ where: { id: portfolioItem.item_id } });
                items.push({
                    type: item.type === 0 ? "股票" : "基金",
                    name: item.name,
                    code: item.code,
                    buy_price: portfolioItem.buy_price.toFixed(2) + "",
                    amount: portfolioItem.amount.toFixed(2) + "",
                    sum: (portfolioItem.buy_price * portfolioItem.amount).toFixed(2) + ""
                });
                twenty_days_price += portfolioItem.amount * await Item.findOne({ where: { id: portfolioItem.item_id } }).twenty_days_ago_price;
            }

            recommendPortfolio.push({
                name: "组合" + portfolio.id,
                items,
                twenty_days_price
            });
        }
        return recommendPortfolio;
    }

    static async getPortfolio(id) {
        const portfolioList =await Portfolio.findAll({ where: { user_id: id } });
        let portfolioReturn=[];
        console.log(portfolioList.length);
        for (let i = 0; i < portfolioList.length; i++) {
            const portfolio = portfolioList[i].dataValues;
            const history=await PortfolioHistory.findAll({where:{portfolio_id:portfolio.id}});
            if(history.length<2) {
                const portfolioItems = await PortfolioItem.findAll({where: {portfolio_id: portfolio.id}});
                let portfolios = [];
                let type;
                let buy_price = 0;
                let now_amount_price = 0;
                for (let j = 0; j < portfolioItems.length; j++) {
                    const portfolioItem = portfolioItems[j].dataValues;
                    const item = await Item.findOne({where: {id: portfolioItem.item_id}});
                    buy_price = buy_price + portfolioItem.buy_price * portfolioItem.amount;
                    now_amount_price = now_amount_price + item.now_price * portfolioItem.amount;
                    if (item.type === 0) type = "股票";
                    else type = "基金";
                    portfolios.push({
                        type: type,
                        name: item.name + "",
                        code: item.code + "",
                        buy_price: portfolioItem.buy_price.toFixed(2) + "",
                        amount: portfolioItem.amount + "",
                        now_price: item.now_price.toFixed(2) + ""
                    })
                }

                portfolioReturn.push({
                    name: portfolio.id,
                    items: portfolios,
                    time: portfolio.buy_time.toISOString().replace(/T/,' ').replace(/\..+/,''),
                    buy_price: buy_price.toFixed(2) + "",
                    now_amount_price: now_amount_price.toFixed(2) + "",
                    earnings: (now_amount_price - buy_price).toFixed(2) + ""
                })
            }

        }
        return portfolioReturn;
    }

    static getTime() {

        var now = new Date();
        var yy = now.getFullYear();      //年
        var mm = now.getMonth() + 1;     //月
        var dd = now.getDate();          //日
        var hh = now.getHours();         //时
        var ii = now.getMinutes();       //分
        var ss = now.getSeconds();       //秒
        var clock = yy + "-";
        if (mm < 10) clock += "0";
        clock += mm + "-";
        if (dd < 10) clock += "0";
        clock += dd + " ";
        if (hh < 10) clock += "0";
        clock += hh + ":";
        if (ii < 10) clock += '0';
        clock += ii + ":";
        if (ss < 10) clock += '0';
        clock += ss;
        return clock;
    }
}

module.exports = PortfolioModel;
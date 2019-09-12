const db = require('../config/db');
const Portfolio = db.import('../schema/portfolio');
const PortfolioItem=db.import('../schema/portfolio_item');
const PortfolioHistory=db.import('../schema/portfolio_history');
const Item=db.import('../schema/item');
Item.sync();
Portfolio.sync();
PortfolioItem.sync();
PortfolioHistory.sync();

class PortfolioModel {
    //买入
    static  async buy( items,userId ){
        var myDate = new Date();
        Portfolio.create({id,user_id:userId,buy_time:myDate.getTime()});
        const portfolioId=Portfolio.getLength()-1;
        PortfolioHistory.create({id,type:0,portfolio_id: portfolioId});
        for(let item in items){
            PortfolioItem.create({id ,item_id: item.id , buy_price: item.price , amount : item.amount , portfolio_id : portfolioId});
        }
        return 0;
    }
    //卖出
    static  async sell(id){
        return PortfolioHistory.create({id,type:1,portfolio_id: id});

    }

    //推荐
    static async recommend(id){
        return Portfolio.findOne({where: {id: id}}).recommend=1;
    }

    //获得历史记录，按时间降序
    static async getHistory(){
        var history;
        var len=PortfolioHistory.getLength()-1;
        var id=0;
        var portfolioId;
        var portfolio;
        var portfolio_history;
        var tag;
        var time;
        while(id<=len){
            portfolio_history=PortfolioHistory.findOne({where:{id}});
            portfolioId=portfolio_history.portfolio_id;
            portfolio=Portfolio.findOne({where:{id:portfolioId}} );
            if(portfolio_history.type===0){
                tag="买入";
                time=portfolio.buy_time;
            }
            else{
                tag="卖出";
                time=portfolio.sell_time;
            }
            history.push({
                name:"组合"+portfolioId,
                tag:tag,
                time:time,
                items:PortfolioItem.findAll({where:{portfolio_id:portfolioId}})
            });
            id=id+1;
        }
    }

    static async getRecommend(){
        var portfolios=Portfolio.findAll({where:{recommend:1}});
        var recommendPortfolio;
        var portfolioItems;
        var twenty_days_price=0;
        for(let portfolio in portfolios){
            portfolioItems=PortfolioItem.findAll({where:{portfolio_id:portfolio.id}});
            for(let portfolioItem in portfolioItems){
                twenty_days_price=portfolioItem.amount*Item.findOne({where:{id:portfolioItem.item_id}}).twenty_days_ago_price+twenty_days_price;
            }
            recommendPortfolio.push({
                name:"组合"+portfolio.id,
                items:portfolioItems,
                twenty_days_ago_price:twenty_days_price
            });
        }
        return recommendPortfolio;
    }

    static async getPortfolio(id){
        var portfolio=Portfolio.findOne({where:{id:id}});
        var portfolioItems=PortfolioItem.findAll({where:{portfolio_id:id}});
        var portfolios;
        var item;
        var type;
        var buy_price=0;
        var now_amount_price=0;
        for(let portfolioItem in portfolioItems){
            item=Item.findOne({where:{id:portfolioItem.item_id}});
            buy_price=buy_price+portfolioItem.buy_price*portfolioItem.amount;
            now_amount_price=now_amount_price+item.now_price*portfolioItem.amount;
            if(item.type===0) type="股票";
            else type="基金";
            portfolios.push({
                type:type,
                name:item.name+"",
                code:item.code+"",
                buy_price: portfolioItem.buy_price.toFixed(2)+"",
                amount:portfolioItem.amount+"",
                now_price:item.now_price.toFixed(2)+""
            })
        }
        return {
            items:portfolio,
            time:portfolio.buy_time+"",
            buy_price:buy_price.toFixed(2)+"",
            now_amount_price:now_amount_price.toFixed(2)+"",
            earnings:(now_amount_price-buy_price).toFixed(2)+""
        }
    }
}

module.exports = PortfolioModel;
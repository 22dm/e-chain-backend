const db = require('../config/db');
const News = db.import('../schema/news');
const Op = require('sequelize').Op;

News.sync();

class NewsModel {
    /**
     * 查询新闻
     * @param keywords  关键字
     * @param offset  偏移量
     * @param limit  最大返回数
     * @returns 新闻列表
     */
    static async get(keywords, offset, limit) {
        return News.findAll({where: {title: {[Op.like]: keywords}}, offset, limit});
    }
}

module.exports = NewsModel;

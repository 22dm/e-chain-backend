const db = require('../config/db');
const Lyrical = db.import('../schema/lyrical');

Lyrical.sync();

class LyricalModel {
    /**
     * 查询舆情
     * @param type  类型
     * @param offset  偏移量
     * @param limit  最大返回数
     * @returns 舆情列表
     */
    static async get(type, offset, limit) {
        return Lyrical.findAll({where: {type}, offset, limit});
    }
}

module.exports = LyricalModel;

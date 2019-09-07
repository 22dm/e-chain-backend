const db = require('../config/db');
const Policy = db.import('../schema/policy');

Policy.sync();

class PolicyModel {
    /**
     * 查询政策
     * @param offset  偏移量
     * @param limit  最大返回数
     * @returns 政策列表
     */
    static async get(offset, limit) {
        return Policy.findAll({offset, limit});
    }
}

module.exports = PolicyModel;

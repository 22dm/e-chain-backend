const db = require('../config/db');
const Report = db.import('../schema/report');

Report.sync();

class ReportModel {
    /**
     * 查询研报
     * @param offset  偏移量
     * @param limit  最大返回数
     * @returns 研报列表
     */
    static async get(offset, limit) {
        return Report.findAll({offset, limit});
    }
}

module.exports = ReportModel;

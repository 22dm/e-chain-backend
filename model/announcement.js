const db = require('../config/db');
const Announcement = db.import('../schema/announcement');

Announcement.sync();

class AnnouncementModel {
    /**
     * 查询公告
     * @param offset  偏移量
     * @param limit  最大返回数
     * @returns 公告列表
     */
    static async get(offset, limit) {
        return Announcement.findAll({offset, limit});
    }
}

module.exports = AnnouncementModel;

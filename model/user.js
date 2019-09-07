const db = require('../config/db');
const User = db.import('../schema/user.js');

User.sync();

class UserModel {
    /**
     * 查询用户信息
     * @param id
     * @returns {Promise.<*>}
     */
    static async get(id){
        return User.findOne({where: {id}});
    }

    /**
     * 创建用户
     * @param id
     * @returns {Promise.<*>}
     */
    static async create(id){
        return User.create({id, level: 0});
    }
}

module.exports = UserModel;

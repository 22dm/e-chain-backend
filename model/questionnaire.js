const db = require('../config/db')
const Questionnaire = db.import('../schema/questionnaire.js')

Questionnaire.sync()

class QuestionnaireModel {
  /**
   * 查询用户的问卷答案
   * @param user_id
   * @returns {Promise.<*>}
   */
  static async getUserAnswers (user_id) {
    return Questionnaire.findAll({ where: { user_id } })
  }

  /**
   * 提交用户的问卷答案
   * 如果问卷已有答案，则update；否则insert
   * @param {*} list
   */
  static async postUserAnswers (list) {
    return Questionnaire.bulkCreate(list, { updateOnDuplicate: true })
  }
}
const QuestionnaireModel = require('../model/questionnaire');
const Response = require('../util/response');

class QuestionnaireController {
  /**
   * 获取用户的问卷答案列表
   * @param ctx 
   * @returns {Promise.<void>}
   */
  static async getUserAnswers(ctx) {
    const userId = ctx.request.query;

    await QuestionnaireModel.getUserAnswers(userId)
    .then(data => ctx.body = Response.success(data))
    .catch(() => ctx.body = Response.failed('获取用户问卷答案列表失败'));
  }

  /**
   * 提交用户的问卷答案
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async postUserAnswers(ctx) {
    const list = ctx.request.query;
    await QuestionnaireModel.postUserAnswers(list)
    .then(data => ctx.body = Response.success(data))
    .catch(() => ctx.body = Response.failed('提交用户问卷答案列表失败'));
  }
}
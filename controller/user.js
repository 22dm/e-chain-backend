const userModel = require('../model/user');
const request = require("request");
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const Response = require('../util/response');

/**
 *
 * 测试请注意：
 *
 * 由于花旗 API 限定回调地址，测试时请使用 3000 端口，并将 e.chain.com 通过 hosts 文件等方式解析至本地
 *
 */

class UserController {
    /**
     * 花旗认证登录
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async login(ctx) {
        const loginUrl = 'https://sandbox.apihub.citi.com/gcb/api/authCode/oauth2/authorize?response_type=code&client_id=a860c63d-6d90-4a54-b7b9-44778094c02c&scope=accounts_details_transactions&countryCode=US&businessCode=GCB&locale=en_US&state=0&redirect_uri=http://e.chain.com:3000/api/pub/loginCallback';
        ctx.status = 302;
        ctx.redirect(loginUrl);
    }

    /**
     * 花旗认证登录（回调）
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async loginCallback(ctx) {
        //通过 code 换取 access_token
        request({
            method: 'POST',
            url: 'https://sandbox.apihub.citi.com/gcb/api/authCode/oauth2/token/us/gcb',
            headers: {
                accept: 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                authorization: 'Basic YTg2MGM2M2QtNmQ5MC00YTU0LWI3YjktNDQ3NzgwOTRjMDJjOlUyc1M4d1YydEIyYVM3YlI0aEsydFU4cVk0d1Axb080eEM4eFg4bEkyeEMzZlIzak0z'
            },
            form: {
                grant_type: 'authorization_code',
                code: ctx.request.query.code,
                redirect_uri: 'http://e.chain.com:3000/api/pub/loginCallback'
            }
        }, (error, response, body) => {
            if (error) return console.error('Failed: %s', error.message);

            //通过 access_token 换取用户信息
            request({
                method: 'GET',
                url: 'https://sandbox.apihub.citi.com/gcb/api/v2/accounts',
                headers: {
                    accept: 'application/json',
                    client_id: 'a860c63d-6d90-4a54-b7b9-44778094c02c',
                    uuid: 'dfb8cf4e-5675-4b84-8489-23d15ccf834a',
                    authorization: 'Bearer ' + JSON.parse(body).access_token
                }
            }, (error, response, body) => {
                if (error) return console.error('Failed: %s', error.message);

                const userId = JSON.parse(body).customer.customerId;
                const token = UserController.signToken(userId);
                ctx.body = Response.success(token);
            })
        })
    }

    /**
     * 签发 token
     * @param id
     * @returns {Promise.<*>}
     */
    static async signToken(id) {
        const user = await userModel.get(id);
        // 判断用户是否存在
        if (!user) {
            await userModel.create(id);
        }
        const userToken = {id};
        return jwt.sign(userToken, secret.sign, {expiresIn: '1h'});
    }

    /**
     * 获取用户信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async get(ctx) {
        const data = ctx.request.body;
        const user = await userModel.get(data.id);
        if (user) {
            ctx.body = Response.success(user);
        } else {
            ctx.body = Response.failed('用户不存在');
        }
    }
}

module.exports = UserController;


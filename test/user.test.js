const supertest = require('supertest');
const chai = require('chai');
const app = require('./../app');

const expect = chai.expect;
const request = supertest(app.listen());

describe('开始测试用户功能', () => {
    it('测试 /api/user/get 请求', done => {
        request
            .post('/api/user/get')
            .send({id: 'starink'})
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.message).to.eql("用户不存在");
                expect(res.body.code).to.eql(-1);
                done()
            })
    })
});
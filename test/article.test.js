const supertest = require('supertest');
const chai = require('chai');
const app = require('./../app');

const expect = chai.expect;
const request = supertest(app.listen());

describe('测试获取文章功能', () => {
    it('测试 /api/pub/getReport 请求', done => {
        request
            .get('/api/pub/getReport?num=10&page=3')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.eql(0);
                done();
            })
    });

    it('测试 /api/pub/getPolicy 请求', done => {
        request
            .get('/api/pub/getPolicy?num=10&page=3')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.eql(0);
                done();
            })
    });

    it('测试 /api/pub/getNews 请求', done => {
        request
            .get('/api/pub/getNews?keywords=aaa&num=10&page=3')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.eql(0);
                done();
            })
    });

    it('测试 /api/pub/getLyrical 请求', done => {
        request
            .get('/api/pub/getLyrical?type=0&num=10&page=3')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.eql(0);
                done();
            })
    });

    it('测试 /api/pub/getAnnouncement 请求', done => {
        request
            .get('/api/pub/getAnnouncement?num=10&page=3')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.eql(0);
                done();
            })
    });
});
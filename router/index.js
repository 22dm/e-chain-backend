const Router = require('koa-router');
const UserController = require('../controller/user');
const AnnouncementController = require('../controller/announcement');
const NewsController = require('../controller/news');
const PolicyController = require('../controller/policy');
const ReportController = require('../controller/report');
const LyricalController = require('../controller/lyrical');
const QuestionnaireController = require('../controller/queationnaire');
const ItemController=require('../controller/item');
const PortfolioController=require('../controller/portfolio');
const router = new Router({prefix: '/api'});

router
    //用户管理
    .get('/pub/login', UserController.login)  // 登录
    .get('/pub/loginCallback', UserController.loginCallback)  // 登录（回调）

    //用户信息
    .post('/user/get', UserController.get) // 获取用户信息

    // 用户问卷调查
    .get('/user/getAnswers', QuestionnaireController.getUserAnswers)
    .post('/user/postAnswers', QuestionnaireController.postUserAnswers)

    //资讯类
    .get('/pub/getNews', NewsController.get) //获取新闻
    .get('/pub/getLyrical', LyricalController.get) //获取舆情
    .get('/pub/getAnnouncement', AnnouncementController.get) //获取公告
    .get('/pub/getPolicy', PolicyController.get) //获取政策
    .get('/pub/getReport', ReportController.get)//获取研报

    //投资类
    .get('/pub/updatePrice',ItemController.updatePrice)//更新项目
    .get('/pub/itemGetRecommend',ItemController.getRecommend)

    //组合类
    .post('/pub/buy',PortfolioController.buy)
    .post('/pub/sell',PortfolioController.sell)
    .post('/pub/recommend',PortfolioController.recommend)
    .get('/pub/getHistory',PortfolioController.getHistory)
    .get('/pub/getRecommend',PortfolioController.getRecommend)
    .get('/pub/getPortfolio',PortfolioController.getPortfolio);

module.exports = router;

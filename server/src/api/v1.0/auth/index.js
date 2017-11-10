const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.get('/exists/email/:email', authCtrl.checkEmail);
auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/check', authCtrl.checkLoginStatus);

module.exports = auth;
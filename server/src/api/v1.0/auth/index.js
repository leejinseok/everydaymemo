const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.get('/exists/email/:email', authCtrl.checkEmail);

module.exports = auth;
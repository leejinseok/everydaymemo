require('dotenv').config();
const {
    PORT: port
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const db = require('./db');
db.connect();

const api = require('./api');
const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(cors());
router.use('/api', api.routes());



app.listen(port, () => {
    console.log(`everydaymemo server is listening to port ${port}`);
})
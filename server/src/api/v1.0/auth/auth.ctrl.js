const User = require('db/models/User');

exports.checkEmail = async (ctx) => {
    const { email } = ctx.params;

    ctx.body = email;
}
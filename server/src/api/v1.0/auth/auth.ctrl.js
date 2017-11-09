const User = require('db/models/User');

exports.checkEmail = async (ctx) => {
    const { email } = ctx.params;

    try {
        const exists = await User.findByEmail(email);
        ctx.body = {
          exists: !!exists
        };
    } catch (e) {
        
    }
}

exports.localRegister = async (ctx) => {
    const { email, password } = ctx.request.body;

    try {
        const exists = await User.findByEmail(email);
        
        if (exists) {
            ctx.status = 409; // conflict
            ctx.body = 'email conflict';
            return;
        }

    } catch (e) {
        ctx.throw(500, e);
    }

    try {
        const user = await User.localRegister(ctx.request.body);
        ctx.body = {
            _id: user._id
        };
      
    } catch (error) {
        
    }
}
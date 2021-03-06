const User = require('db/models/User');

exports.checkLoginStatus = async (ctx) => {
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403;
        return;
    }

    ctx.body = {
        user
    };
}

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

exports.localLogin = async (ctx) => {
    const { email, password } = ctx.request.body;

    try {
        const user = await User.findByEmail(email);
        if (!user) {
            ctx.body = 'no exist';
            return;
        }

        const validated = user.validatePassword(password);
        if (!validated) {
            ctx.body = 'password not match';
            return;
        }

        const accessToken = await user.generateToken();
        ctx.cookies.set('access_token', accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7
        });

        ctx.body = {
            user: {
                id: user._id,
                email: user.email
            }
        }

    } catch (error) {
        ctx.throw(error,500);
    }
}

// 로그아웃
exports.logout = (ctx) => {
    ctx.cookies.set('access_token', null, {
        maxAge: 0, 
        httpOnly: true
    });
    ctx.status = 204;
};
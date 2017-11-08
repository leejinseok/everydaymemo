const User = require('db/models/User');

exports.checkEmail = async (ctx) => {
    const { email } = ctx.params;

    try {
        const account = await User.findByEmail(email);
        ctx.body = {
          exists: !!account
        };
    } catch (e) {
        
    }

    
}
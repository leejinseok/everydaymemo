const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const token = require('lib/token');

const { PASSWORD_HASH_KEY: secret } = process.env;

function hash (password) {
    return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

const Memo = new Schema({
    content: String,
    createAt: {
        type: Date,
        default: Date.now
    }
});

const User = new Schema({
    email: String, 
    thumbnail: { type: String, default: '/static/images/default_thumbnail.png' },
    password: String,
    memo: [{
        type: Memo,
    }]
});

User.statics.findByEmail = function (email) {
    return this.findOne({email}).exec();
}

User.statics.localRegister = function ({email, password}) {
    const user = new this({
        email,
        password: hash(password)
    });

    return user.save();
}

User.methods.validatePassword = function (password) {
    const hashed = hash(password);
    return this.password === hashed;
}

User.methods.generateToken = function () {
    const { _id, email } = this;

    return token.generateToken({
        user: {
            _id,
            email
        }
    }, 'user');
}

module.exports = mongoose.model('User', User);
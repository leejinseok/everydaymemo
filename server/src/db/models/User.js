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
    password: String,
    memo: [{
        type: Memo,
    }]
});

User.statics.findByEmail = function (email) {
    return this.findOne({email}).exec();
}

module.exports = mongoose.model('User', User);
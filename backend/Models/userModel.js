const { Schema, model } = require('../connection');

const mySchema = new Schema({
    username: { type: String, default: 'Anonymous' },
    email: String,
    password: String
});

module.exports = model('users', mySchema);
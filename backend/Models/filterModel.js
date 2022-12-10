const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    name: String,
    image: String,
    values: Object,
    createdBy: { type: Types.ObjectId, ref: 'users' },
    createdAt: Date,
});

module.exports = model('filters', mySchema);
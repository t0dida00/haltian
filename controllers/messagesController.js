var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageObj = new Schema({
    Message: Object ,
    timestamp: { type: Date, default: Date.now },

});

const MessageSchema = mongoose.model('messages', MessageObj);

module.exports = MessageSchema
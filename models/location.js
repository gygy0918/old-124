var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    name: {
        type: String
    },
    //物品相关信息
});
var Model = mongoose.model('Location', locationSchema);
module.exports = Model;

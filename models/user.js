var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    locationId:{
        type: ObjectId,
        ref: 'Location'
    }
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;

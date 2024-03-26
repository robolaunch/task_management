var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var robot_schema = new Schema({
    id: {
        unique: true,
        type: String,
    },
    type: String,
    url: String,
    current_activity: {
        type: String,
        default: "NULL"
    },
    job_id: String
}, {collection: 'robot', versionKey: false, timestamps: true});

var Robot = mongoose.model('Robot', robot_schema);

module.exports = Robot;
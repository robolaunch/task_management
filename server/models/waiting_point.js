const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var waiting_point_schema = new Schema({
    waiting_point_id: {
        unique: true,
        type: String
    },
    position: {
        x: Number,
        y: Number,
        z: Number
    },
    orientation: {
        x: Number,
        y: Number,
        z: Number,
        w: Number
    },
    status: String
}, {collection: 'waiting_point', versionKey: false, timestamps: true});

var WaitingPoint = mongoose.model('WaitingPoint', waiting_point_schema);

module.exports = WaitingPoint;
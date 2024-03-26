var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var location_schema = new Schema({
    location_id: {
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
}, {collection: 'location', versionKey: false, timestamps: true});

var Location = mongoose.model('Location', location_schema);

module.exports = Location;
const findLocation = require('../utils/location/db_functions/find_location').findLocation;
const findLocationAndUpdate = require('../utils/location/db_functions/update_location').findLocationAndUpdate;



/**
 * @brief Controller for updating a location.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function locationUpdateController(connection, received_message, io){
    var filter = {location_id: received_message.locationID};

    var update = {
        location_id: received_message.locationID,
        position: received_message.position,
        orientation: received_message.orientation,
        status: received_message.status
    };

    var options = {returnOriginal: false, upsert: true, new: true};

    var location_to_be_updated = await findLocation(filter);

    if(location_to_be_updated.length != 0){
        var result = await findLocationAndUpdate(filter, update, options);
    };

    io.emit(connection, result);
};



module.exports = {
    locationUpdateController: locationUpdateController
};
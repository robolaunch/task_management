const generateNewLocation = require('../utils/location/db_functions/new_location').generateNewLocation;
const saveLocation = require('../utils/location/db_functions/save_location').saveLocation;



/**
 * @brief Controller for creating a location. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
async function locationCreateController(connection, received_message, io){
    var new_location = await generateNewLocation(connection, received_message, io);

    var result = await saveLocation(new_location, received_message, received_message.messageType);

    io.emit(connection, result);
};



module.exports = {
    locationCreateController: locationCreateController
};
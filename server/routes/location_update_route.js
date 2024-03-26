const locationUpdateController = require('../controller/location_update_controller').locationUpdateController;



/**
 * @brief Router for updating a location. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function locationUpdateRouter(connection, received_message, io){
    locationUpdateController(connection, received_message, io);
};



module.exports = {
    locationUpdateRouter: locationUpdateRouter
};
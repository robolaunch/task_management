const locationCreateController = require('../controller/location_create_controller').locationCreateController;



/**
 * @brief Router for creating a location. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function locationCreateRouter(connection, received_message, io) {
    locationCreateController(connection, received_message, io);
};



module.exports = {
    locationCreateRouter: locationCreateRouter
};
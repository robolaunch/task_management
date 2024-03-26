const locationQueryController = require('../controller/location_query_controller').locationQueryController;



/**
 * @brief Router for getting all locations from mongoDB. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function locationQueryRouter(connection, received_message, io){
    locationQueryController(connection, received_message, io);
};



module.exports = {
    locationQueryRouter: locationQueryRouter
};
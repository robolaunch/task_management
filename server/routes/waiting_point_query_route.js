const waitingPointQueryController = require('../controller/waiting_point_query_controller').waitingPointQueryController;



/**
 * @brief Router for getting all waiting points from mongoDB. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function waitingPointQueryRouter(connection, received_message, io){
    waitingPointQueryController(connection, received_message, io);
};



module.exports = {
    waitingPointQueryRouter: waitingPointQueryRouter
};
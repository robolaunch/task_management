const robotQueryController = require('../controller/robot_query_controller').robotQueryController;



/**
 * @brief Router for getting all robots from mongoDB. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function robotQueryRouter(connection, received_message, io){
    robotQueryController(connection, received_message, io);
};



module.exports = {
    robotQueryRouter: robotQueryRouter
};
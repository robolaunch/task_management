const robotCreateController = require('../controller/robot_create_controller').robotCreateController;



/**
 * @brief Router for creating a robot. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function robotCreateRouter(connection, received_message, io){
    robotCreateController(connection, received_message, io);
};



module.exports = {
    robotCreateRouter: robotCreateRouter
};
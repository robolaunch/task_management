const robotUpdateController = require('../controller/robot_update_controller').robotUpdateController;



/**
 * @brief Router for updating a robot. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function robotUpdateRouter(connection, received_message, io){
    robotUpdateController(connection, received_message, io);
};



module.exports = {
    robotUpdateRouter: robotUpdateRouter
};
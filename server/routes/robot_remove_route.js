const robotRemoveController = require('../controller/robot_remove_controller').robotRemoveController;



/**
 * @brief Router for removing a robot. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function robotRemoveRouter(connection, received_message, io){
    robotRemoveController(connection, received_message, io);
};



module.exports = {
    robotRemoveRouter: robotRemoveRouter
};
const waitingPointRemoveController = require('../controller/waiting_point_remove_controller').waitingPointRemoveController;



/**
 * @brief Router for removing a waiting point. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function waitingPointRmemoveRouter(connection, received_message, io){
    waitingPointRemoveController(connection, received_message, io);
};



module.exports = {
    waitingPointRmemoveRouter: waitingPointRmemoveRouter
};
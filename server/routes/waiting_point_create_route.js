const waitingPointCreateController = require('../controller/waiting_point_create_controller').waitingPointCreateController;



/**
 * @brief Router for creating a waiting point. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
async function waitingPointCreateRouter(connection, received_message, io){
    waitingPointCreateController(connection, received_message, io);
};



module.exports = {
    waitingPointCreateRouter: waitingPointCreateRouter
};
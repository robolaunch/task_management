const waitingPointUpdateController = require('../controller/waiting_point_update_controller').waitingPointUpdateController;



/**
 * @brief Router for updating a waiting point. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function waitingPointUpdateRouter(conenction, received_message, io){
    waitingPointUpdateController(conenction, received_message, io);
};



module.exports = {
    waitingPointUpdateRouter: waitingPointUpdateRouter
};
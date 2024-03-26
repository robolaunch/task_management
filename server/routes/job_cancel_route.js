const jobCancelController = require('../controller/job_cancel_controller').jobCancelController;



/**
 * @brief Router for cancelling a job. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function jobCancelRouter(connection, received_message, io){
    jobCancelController(connection, received_message, io);
};



module.exports = {
    jobCancelRouter: jobCancelRouter
};
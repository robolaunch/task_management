const jobRemoveController = require('../controller/job_remove_controller').jobRemoveController;



/**
 * @brief Router for removing a job. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function jobRemoveRouter(connection, received_message, io){
    jobRemoveController(connection, received_message, io);
};



module.exports = {
    jobRemoveRouter: jobRemoveRouter
};
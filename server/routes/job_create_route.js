const jobCreateController = require('../controller/job_create_controller').jobCreateController;



/**
 * @brief Router for creating a job. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function jobCreateRouter(connection, received_message, io){
    jobCreateController(connection, received_message, io);
};



module.exports = {
    jobCreateRouter: jobCreateRouter
};
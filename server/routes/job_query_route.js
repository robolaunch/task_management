const jobQueryController = require('../controller/job_query_controller').jobQueryController;



/**
 * @brief Router for getting all jobs from mongoDB. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function jobQueryRouter(connection, received_message, io){
    jobQueryController(connection, received_message, io);
};



module.exports = {
    jobQueryRouter: jobQueryRouter
};
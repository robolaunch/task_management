const jobUpdatecontroller = require('../controller/job_update_controller').jobUpdateController;



/**
 * @brief Router for updating a job. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
function jobUpdateRouter(connection, received_message, io){
    jobUpdatecontroller(connection, received_message, io);
};



module.exports = {
    jobUpdateRouter: jobUpdateRouter
};
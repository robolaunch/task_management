const generateNewJob = require('../utils/job/db_functions/new_job').generateNewJob;
const saveJob = require('../utils/job/db_functions/save_job').saveJob;



/**
 * @brief Controller for creating a job.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function jobCreateController(connection, received_message, io){
    var new_job = await generateNewJob(connection, received_message, io);

    var result = await saveJob(new_job, received_message, received_message.messageType);
    
    io.emit(connection, result);
};



module.exports = {
    jobCreateController: jobCreateController
};
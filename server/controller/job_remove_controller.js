const findJob = require('../utils/job/db_functions/find_job').findJob;
const removeJob = require('../utils/job/db_functions/remove_job').removeJob;



/**
 * @brief Controller for removing a job.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function jobRemoveController(connection, received_message, io){
    var filter = {job_id: received_message.jobID};

    var job_to_be_removed = await findJob(filter);

    if(job_to_be_removed[0].job_status != "IN_PROGRESS" && job_to_be_removed[0].job_status != "COMPLETED"){
        var result = await removeJob(filter, received_message, received_message.messageType);
        io.emit("JobRemove", result);
    };
};



module.exports = {
    jobRemoveController: jobRemoveController
};
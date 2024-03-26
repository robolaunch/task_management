const findJob = require('../utils/job/db_functions/find_job').findJob;
const findJobAndUpdate = require('../utils/job/db_functions/update_job').findJobAndUpdate;



/**
 * @brief Controller for cancelling a job.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function jobCancelController(connection, received_message, io){
    var filter = {job_id: received_message.jobID};

    var update = {job_status: received_message.jobStatus};

    var job_to_be_cancelled = await findJob(filter);

    if(job_to_be_cancelled[0].job_status != "IN_PROGRESS" && job_to_be_cancelled[0].job_status != "COMPLETED"){
        var options = {returnOriginal: false};
        var result = await findJobAndUpdate(filter, update, options);
        io.emit(connection, result);
    };
};



module.exports = {
    jobCancelController: jobCancelController
};
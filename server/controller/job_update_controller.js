const findJob = require('../utils/job/db_functions/find_job').findJob;
const findJobAndUpdate = require('../utils/job/db_functions/update_job').findJobAndUpdate;



/**
 * @brief Controller for updating a job.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function jobUpdateController(connection, received_message, io){
    var update = {
        job_id: received_message.jobID,
        job_status: received_message.jobStatus,
        task_list: received_message.taskList,
        last_completed_task: received_message.lastCompletedTask,
        error_code: received_message.errorCode,
        error_message: received_message.errorMessage
    };

    var filter = {job_id: update.job_id};

    var options = {returnOriginal: false, upsert: true, new: true};

    var job_to_be_updated = await findJob(filter);

    console.log("Job to be updated: ", job_to_be_updated);

    if(job_to_be_updated[0].job_status != "IN_PROGRESS" && job_to_be_updated[0].job_status != "COMPLETED"){
        var result = await findJobAndUpdate(filter, update, options);
        io.emit('JobUpdate', result);
    };
};



module.exports = {
    jobUpdateController: jobUpdateController
};
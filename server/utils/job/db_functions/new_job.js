const Jobs = require('../../../models/job');



/**
 * @brief Generating new job on mongoDB db.
 * @param {string} connection Name of topic to communicate with Backend-Front. 
 * @param {JSON} received_message Received messsage as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 * @returns {JSON} new_job 
 * @returns {string} REJECTED
 */
async function generateNewJob(connection, received_message, io){
    return new Promise((resolve, reject) => {
        try{
            var new_job = new Jobs({
                job_id: received_message.jobID,
                task_list: received_message.taskList,
                job_status: "SCHEDULED",
                priority: received_message.priority,
                last_completed_task: {
                    action_name: "NULL",
                    location_id: "NULL"
                },
                error_code: "NULL",
                error_message: "NULL"
            });
            resolve(new_job);
        }catch(error){
            resolve("REJECTED");
        };
    });
};



module.exports = {
    generateNewJob: generateNewJob
};
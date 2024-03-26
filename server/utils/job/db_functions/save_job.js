const generateJobCreateResponseMessage = require('../functions/generate_response_messages/generate_job_create_response_message').generateJobCraeteResponseMessage;



/**
 * 
 * @param {JSON} new_job New job from Front-end to DB.
 * @param {JSON} message Message to save db.
 * @param {string} message_type Message type for socket.io rooms.
 * @returns {JSON} job_create_response_message
 */
async function saveJob(new_job, message, message_type){
    return new Promise((resolve, reject) => {
        new_job.save(async function(err){
            if(err){
                message = {
                    "jobStatus": "REJECTED",
                    "jobID": message.jobID
                };
                var job_create_response_message = generateJobCreateResponseMessage(message);
            }else{
                message = {
                    "jobStatus": "ACCEPTED",
                    "jobID": message.jobID
                };
                var job_create_response_message = generateJobCreateResponseMessage(message);
            };
            resolve(job_create_response_message);
        });
    });
};



module.exports = {
    saveJob: saveJob
};
const Job = require('../../../models/job');
const generateJobRemoveResponseMessage = require('../functions/generate_response_messages/generate_job_remove_response_message').generateJobRemoveResponseMessage;



/**
 * @brief Function to remove job from mongoDB db.
 * @param {JSON} filter Filter is used to find job.
 * @param {JSON} message Message will be comed from user.
 * @param {String} message_type Message type is name of the topic (socket.io)
 * @returns {JSON} job_remove_message_response
 */
async function removeJob(filter, message, message_type){
    return new Promise((resolve, reject) => {
        Job.findOneAndRemove(filter, function(err){
            if(err){
                message = {"jobStatus": "REJECTED"};
                var job_remove_message_response = generateJobRemoveResponseMessage(filter, message);
            }else{
                message = {"jobStatus": "ACCEPTED"};
                var job_remove_message_response = generateJobRemoveResponseMessage(filter, message);
            };
            resolve(job_remove_message_response);
        });
    });
};



module.exports = {
    removeJob: removeJob
};
const Job = require('../../../models/job');
const generateJobCancelResponseMessage = require('../functions/generate_response_messages/generate_job_cancel_response_message').generateJobCancelResponseMessage;
const generateJobUpdateResponseMessage = require('../functions/generate_response_messages/generate_job_update_response_message').generateJobUpdateResponseMessage;



/**
 * @brief Finding job and updating via update parameter.
 * @param {JSON} filter Filter to find job which will be updated.
 * @param {JSON} update Uptaded value.
 * @param {JSON} options Options for updating value.
 * @returns job_update_response_message 
 */
async function findJobAndUpdate(filter, update, options){
    return new Promise((resolve, reject) => {
        Job.findOneAndUpdate(filter, update, options, function(err){
            if(update.job_status == "CANCELLED"){
                if(err){
                    update["job_status"] = "REJECTED";
                    var job_cancel_response_message = generateJobCancelResponseMessage(filter, update);
                }else{
                    update["job_status"] = "ACCEPTED";
                    var job_cancel_response_message = generateJobCancelResponseMessage(filter, update);
                };
                resolve(job_cancel_response_message);
            }else{
                if(err){
                    update["job_status"] = "REJECTED";
                    var job_update_response_message = generateJobUpdateResponseMessage(filter, update);
                }else{
                    update["job_status"] = "ACCEPTED";
                    var job_update_response_message = generateJobUpdateResponseMessage(filter, update);
                };
                resolve(job_update_response_message);
            };
        });
    });
};



module.exports = {
    findJobAndUpdate: findJobAndUpdate
};

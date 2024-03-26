/**
 * @brief Job update response message generator function.
 * @param {JSON} filter Filter to find job which will be updated.
 * @param {JSON} update Uptaded value.
 * @returns job_update_message
 */
function generateJobUpdateResponseMessage(filter, update){
    try{
       var job_update_message = {
        "messageType": "JobUpdate",
        "jobID": filter.job_id,
        "jobStatus": update.job_status
       };
    }catch(error){
        var job_update_message = {
            "messageType": "JobUpdate",
            "jobID": filter.job_id,
            "jobStatus": update.job_status
        };
    };
    return job_update_message;
};



module.exports = {
    generateJobUpdateResponseMessage: generateJobUpdateResponseMessage
};
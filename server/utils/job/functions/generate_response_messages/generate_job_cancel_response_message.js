/**
 * @brief Job cancel response message generator function.
 * @param {JSON} filter Filter to find job which will be updated.
 * @param {JSON} update Uptaded value.
 * @returns job_cancel_response_message
 */
function generateJobCancelResponseMessage(filter, update){
    try {
        var job_cancel_response_message = {
            "messageType": "JobCancel",
            "jobID": filter.job_id,
            "jobStatus": update.job_status
        };        
    } catch (error) {
        var job_cancel_response_message = {
            "messageType": "JobCancel",
            "jobID": filter.job_id,
            "jobStatus": "REJECTED"
        };
    };
    return job_cancel_response_message;
};


module.exports = {
    generateJobCancelResponseMessage: generateJobCancelResponseMessage
};
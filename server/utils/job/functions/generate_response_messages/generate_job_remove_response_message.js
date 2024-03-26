/**
 * @brief Job remove response message generator function.
 * @param {JSON} message Message which will be getted from Front-end. 
 * @returns {JSON} job_remove_message
 */
function generateJobRemoveResponseMessage(filter, message){
    try{
       var job_remove_message = {
        "messageType": "JobRemove",
        "jobID": filter.job_id,
        "jobStatus": message.jobStatus
       };
    }catch(error){
        var job_remove_message = {
            "messageType": "JobRemove",
            "jobID": filter.job_id,
            "jobStatus": "REJECTED"
        };
    };
    return job_remove_message;
};



module.exports = {
    generateJobRemoveResponseMessage: generateJobRemoveResponseMessage
};
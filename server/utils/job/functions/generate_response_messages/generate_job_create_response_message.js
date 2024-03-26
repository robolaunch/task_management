/**
 * @brief Job create response message generator function.
 * @param {JSON} message Message which will be getted from Front-end. 
 * @returns {JSON} job_create_message
 */
function generateJobCraeteResponseMessage(message){
    try{
       var job_create_message = {
        "messageType": "JobCreate",
        "jobID": message.jobID,
        "jobStatus": message.jobStatus
       };
    }catch(error){
        var job_create_message = {
            "messageType": "JobCreate",
            "jobID": message.jobID,
            "jobStatus": message.jobStatus
        };
    };
    return job_create_message;
};



module.exports = {
    generateJobCraeteResponseMessage: generateJobCraeteResponseMessage
};
const findRobot = require('../../../robot/db_functions/find_robot').findRobot;



/**
 * @brief Job query response message generator functions.
 * @param {JSON} jobs Jobs which is getted by mongoDB. 
 * @returns job_query_message
 */
async function generateJobQueryMessage(jobs){
    try{
        var job_query_message = new Array();
       for(var i=0; i<jobs.length; i++){
        job_query_message.push({
            "messageType": "JobQuery",
            "jobID": jobs[i].job_id,
            "jobStatus": jobs[i].job_status,
            "errorCode": jobs[i].error_code,
            "errorMessage": jobs[i].error_message,
            "taskList": jobs[i].task_list,
            "robotID": "NULL",
            "completedTime": jobs[i].updatedAt
        });

        if(jobs[i].job_status == "COMPLETED"){
            var robot = await findRobot({url: jobs[i].robot_url});
            console.log("Robot: ", robot[0].id);
            job_query_message[i]["robotID"] = robot[0].id;

        };
       } 
       return job_query_message;
    }catch(error){
        console.log(error);
    };
};



module.exports = {
    generateJobQueryMessage: generateJobQueryMessage
};
/**
 * @brief Robot query response message generator functions.
 * @param {JSON} robots Locations which is getted by mongoDB. 
 * @returns robot_query_message
 */
async function generateRobotQueryMessage(robots){
    try{
       var robot_query_message = new Array();
       for(var i=0; i<robots.length; i++){
            robot_query_message.push({
                "messageType": "RobotQuery",
                "robotID": robots[i].id,
                "robotURL": robots[i].url,
                "currentActivity": robots[i].current_activity,
                "jobID": robots[i].job_id,
            });
       };

       return robot_query_message;
    }catch(error){
        console.log(error);   
    };
};



module.exports = {
    generateRobotQueryMessage: generateRobotQueryMessage
};
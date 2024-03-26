/**
 * @brief Robot create response message generator function.
 * @param {JSON} message Message for generating robot create response message
 * @returns {JSON} robot_create_message
 */
function generateRobotCreateResponseMessage(message){
    try{
        var robot_create_message = {
            "messageType": "RobotCreate",
            "robotID": message.robotID,
            "robotType": message.robotType,
            "robotUrl": message.robotUrl,
            "currentActivity": message.currentActivity,
            "jobID": message.jobID,
            "robotStatus": message.robotStatus
        };
    }catch(error){
        var robot_create_message = {
            "messageType": "RobotCreate",
            "robotID": message.robotID,
            "robotType": message.robotType,
            "robotUrl": message.robotUrl,
            "currentActivity": message.currentActivity,
            "jobID": message.jobID,
            "robotStatus": "REJECTED"
        };
    };
    return robot_create_message;
};



module.exports = {
    generateRobotCreateResponseMessage: generateRobotCreateResponseMessage
};
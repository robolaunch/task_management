/**
 * @brief Robot update response message generator
 * @param {JSON} filter Filter is used to find robot from mongoDB db.
 * @param {JSON} update Updated value.
 * @returns robot_update_message
 */
function generateRobotUpdateResponseMessage(filter, update){
    try{
       var robot_update_message = {
        "messageType": "RobotUpdate",
        "robotID": filter.id,
        "robotStatus": update.robot_status
       };
    }catch(error){
        var robot_update_message = {
            "messageType": "RobotUpdate",
            "robotID": filter.id,
            "robotStatus": update.robot_status
        };
    };
    return robot_update_message;
};



module.exports = {
    generateRobotUpdateResponseMessage: generateRobotUpdateResponseMessage
};
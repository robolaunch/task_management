/**
 * @brief Robot remove response message generator function.
 * @param {JSON} message Message for generating robot remove response message
 * @returns {JSON} robot_remove_message
 */
function generateRobotRemoveResponseMessage(filter, message){
    try{
        var robot_remove_message = {
            "messageType": "RobotRemove",
            "robotID": filter.id,
            "robotStatus": "ACCEPTED"
        };
    }catch(error){
        var robot_remove_message = {
            "messageType": "RobotRemove",
            "robotID": filter.id,
            "robotStatus": "REJECTED"
        };
    };
    return robot_remove_message;
};



module.exports = {
    generateRobotRemoveResponseMessage: generateRobotRemoveResponseMessage
};
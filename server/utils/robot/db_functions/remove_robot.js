const Robot = require('../../../models/robot');
const generateRobotRemoveResponseMessage = require('../functions/generate_response_messages/generate_robot_remove_response_message').generateRobotRemoveResponseMessage;



/**
 * @brief Function to remove robot from mongoDB db.
 * @param {JSON} filter Filter is used to find robot.
 * @param {JSON} message Message will be comed from user.
 * @param {String} message_type Message type is name of the topic (socket.io)
 * @returns {JSON} robot_remove_message_response
 */
async function removeRobot(filter, message, message_type){
    return new Promise((resolve, reject) => {
        Robot.findOneAndRemove(filter, function(error){
            if(error){
                message = {"robotStatus": "REJECTED"};
                var robot_remove_message_response = generateRobotRemoveResponseMessage(filter, message);
            }else{
                message = {"robotStatus": "REJECTED"};
                var robot_remove_message_response = generateRobotRemoveResponseMessage(filter, message);
            };
            resolve(robot_remove_message_response);
        });
    });
};



module.exports = {
    removeRobot: removeRobot
};
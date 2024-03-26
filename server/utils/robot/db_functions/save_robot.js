const generateRobotCreateResponseMessage = require('../functions/generate_response_messages/generate_robot_create_response_message').generateRobotCreateResponseMessage;



/**
 * @brief Function to save robot to mongoDB.
 * @param {JSON} new_robot New robot from Front-end to DB.
 * @param {JSON} message Message to save db.
 * @param {string} message_type Message type for socket.io rooms.
 * @returns {JSON} robot_create_response_message
 */
async function saveRobot(new_robot, message, message_type){
    return new Promise((resolve, reject) => {
        new_robot.save(async function(err){
            if(err){
                console.log(err);
                message.robotStatus = "REJECTED";
                var robot_create_response_message = generateRobotCreateResponseMessage(message);
            }else{
                message.robotStatus = "ACCEPTED";
                var robot_create_response_message = generateRobotCreateResponseMessage(message);
            };
            resolve(robot_create_response_message);
        });
    });
};



module.exports = {
    saveRobot: saveRobot
};
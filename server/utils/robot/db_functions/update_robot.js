const Robot = require('../../../models/robot');
const generateRobotUpdateResponseMessage = require('../functions/generate_response_messages/generate_robot_update_response_message').generateRobotUpdateResponseMessage;



/**
 * @brief Finding robot and updating via update parameter.
 * @param {JSON} filter Filter is used to find robot which will be updated.
 * @param {JSON} update Uptaded value.
 * @param {JSON} options Options for updating value.
 * @returns robot_update_response_message
 */
async function findRobotAndUpdate(filter, update, options){
    return new Promise((resolve, reject) => {
        Robot.findOneAndUpdate(filter, update, options, function(error){
            if(error){
                update["robot_status"] = "REJECTED";
                var robot_update_response_message = generateRobotUpdateResponseMessage(filter, update);
                resolve(robot_update_response_message);
            }else{
                update["robot_status"] = "ACCEPTED";
                var robot_update_response_message = generateRobotUpdateResponseMessage(filter, update);
                resolve(robot_update_response_message);
            };
        });
    });
};



module.exports = {
    findRobotAndUpdate: findRobotAndUpdate
};
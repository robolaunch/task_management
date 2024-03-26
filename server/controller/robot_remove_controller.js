const findRobot = require('../utils/robot/db_functions/find_robot').findRobot;
const removeRobot = require('../utils/robot/db_functions/remove_robot').removeRobot;



/**
 * @brief Controller for removing a robot. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
async function robotRemoveController(connection, received_message, io){
    var filter = {id: received_message.robotID};

    var robot_to_be_removed = await findRobot(filter);

    if(robot_to_be_removed[0].current_activity != "DRIVING"){
        var result = await removeRobot(filter, received_message, received_message.messageType);
        io.emit(connection, result);
    };
};



module.exports = {
    robotRemoveController: robotRemoveController
};
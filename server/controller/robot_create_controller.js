const generateNewRobot = require('../utils/robot/db_functions/new_robot').generateNewRobot;
const saveRobot = require('../utils/robot/db_functions/save_robot').saveRobot;



/**
 * @brief Controller for creating a robot. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
async function robotCreateController(connection, received_message, io){
    var new_robot = await generateNewRobot(connection, received_message, io);
    
    var result = await saveRobot(new_robot, received_message, received_message.messageType);

    io.emit(connection, result);
};



module.exports = {
    robotCreateController: robotCreateController
};
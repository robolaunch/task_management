const findRobot = require('../utils/robot/db_functions/find_robot').findRobot;
const generateRobotQueryMessage = require('../utils/robot/functions/generate_response_messages/generate_robot_query_response_message').generateRobotQueryMessage;



/**
 * @brief Controller for getting all robots from mongoDB.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function robotQueryController(connection, received_message, io){
    var filter = {
        createdAt: {
            $gte: received_message.since,
            $lte: received_message.until
        }
    };

    var result = await findRobot(filter);

    var robot_query_message = await generateRobotQueryMessage(result);

    io.emit(connection, robot_query_message);
};



module.exports = {
robotQueryController: robotQueryController
};
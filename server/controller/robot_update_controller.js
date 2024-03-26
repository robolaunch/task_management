const findRobot = require('../utils/robot/db_functions/find_robot').findRobot;
const findRobotAndUpdate = require('../utils/robot/db_functions/update_robot').findRobotAndUpdate;



/**
 * @brief Controller for updating a robot.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function robotUpdateController(connection, received_message, io){
    var update = {
        id: received_message.robotID,
        type: received_message.robotType,
        url: received_message.robotUrl,
        current_activity: received_message.currentActivity,
        job_id: received_message.jobID
    };

    var filter = {id: received_message.robotID};

    var options = {returnOriginal: false, upsert: true, new: true};

    var robot_to_be_updated = await findRobot(filter);

    console.log("Robot to be updated: ", robot_to_be_updated);

    if(robot_to_be_updated[0].current_activity != "DRIVING"){
        var result = await findRobotAndUpdate(filter, update, options);
        io.emit(connection, result);
    };
};



module.exports = {
    robotUpdateController: robotUpdateController
};
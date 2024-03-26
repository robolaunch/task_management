const findRobot = require('../utils/robot/db_functions/find_robot').findRobot;
const findIndex = require('../utils/arrays/find_index_of_array').findIndex;
const robot_topics = require('../ros/ros_connections/ros_initialize').robot_topics;


/**
 * 
 * @param {*} connection 
 * @param {*} received_message 
 * @param {*} io 
 */
async function robotGoalPoseController(connection, received_message, io){
    var robot_to_send_goal_pose = await findRobot({"id": received_message.robotID});
    
    io.emit(connection, {});
};



module.exports = {
    robotGoalPoseController: robotGoalPoseController
};
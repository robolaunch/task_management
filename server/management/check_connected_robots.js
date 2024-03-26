const findRobot = require('../utils/robot/db_functions/find_robot').findRobot;
const findIndex = require('../utils/arrays/find_index_of_array').findIndex;
const generateRobotCurrentActivityToBackend = require('../utils/robot/ros_functions/client_functions/client_robot_current_activity_to_backend').generateRobotCurrentActivityToBackend;
const robot_services = require('../ros/ros_connections/ros_initialize').robot_services;



/**
 * @brief Checking all robots which is 'CONNECTED' or 'UNSUPPORTED' to get current activity using backend connection. 
 * @returns None
 */
async function checkConnectedRobots(){
    var connected_robots = await findRobot({});

    for(var i=0; i<connected_robots.length; i++){
        if(connected_robots[i].current_activity == "CONNECTED" || connected_robots[i].current_activity == "UNSUPPORTED"){
            var index_of_robot_services = findIndex(robot_services, connected_robots[i].url);
            await generateRobotCurrentActivityToBackend(robot_services[index_of_robot_services][connected_robots[i].url].robot_current_activity_to_backend)
        }; 
    };
};



module.exports = {
    checkConnectedRobots: checkConnectedRobots
};

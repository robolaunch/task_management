const ROSLIB = require('roslib');
const advertiseWaitingPointsToRobot = require('../advertise_functions/advertise_waiting_points_to_robot').advertiseWaitingPointsToRobot;



/**
 * @brief Generating all waiting point services and returning these services using an array.
 * @param {ROSLIB.Ros} ros
 * @returns Waiting points service list 
 */
function generateServices(ros){
    // waiting_points_to_robot service as aROSLIB.Service
    var waiting_point_to_robot = new ROSLIB.Service({
        ros: ros,
        name: '/waiting_points_to_robot',
        serviceType: 'robot_backend_interface_msgs/srv/WaitingPointsToRobot'
    });

    advertiseWaitingPointsToRobot(waiting_point_to_robot);

    // returning service_list
    return {
        waiting_point_to_robot: waiting_point_to_robot
    };
};



module.exports = {
    generateServices: generateServices
};
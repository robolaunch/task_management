const ROSLIB = require('roslib');
const advertiseRobotToBackendService = require('../advertise_functions/advertise_robot_to_backend_service').advertiseRobotToBackendService;



/**
 * @brief Generating all robot services and returning these services using an array.
 * @param {ROSLIB.Ros} ros
 * @returns Robot service list 
 */
function generateServices(ros){
    var robot_to_backend = new ROSLIB.Service({
        ros: ros,
        name: '/robot_to_backend',
        serviceType: 'robot_backend_interface_msgs/srv/RobotToBackend'
    });
    
    var robot_current_activity_to_backend = new ROSLIB.Service({
        ros: ros,
        name: '/robot_current_activity_to_backend',
        serviceType: 'robot_backend_interface_msgs/srv/RobotCurrentActivityToBackend'
    });

    advertiseRobotToBackendService(robot_to_backend);

    return {
        robot_to_backend: robot_to_backend,
        robot_current_activity_to_backend: robot_current_activity_to_backend
    };
};



module.exports = {
    generateServices: generateServices
};
const ROSLIB = require('roslib');
const advertiseLocationToRobot = require('../advertise_functions/advertise_location_to_robot_service').advertiseLocationToRobot;



/**
 * @brief Generating all location services and returning these services using an array.
 * @param {ROSLIB.Ros} ros
 * @returns Location service list 
 */
function generateServices(ros){
    // location_to_robot service as a ROSLIB.Service
    var location_to_robot = new ROSLIB.Service({
        ros: ros,
        name: '/location_to_robot',
        serviceType: 'robot_backend_interface_msgs/srv/LocationToRobot'
    });

    advertiseLocationToRobot(location_to_robot);

    // returning service_list
    return {
        location_to_robot: location_to_robot
    };
};



module.exports = {
    generateServices: generateServices
};
const ROSLIB = require('roslib');
const advertiseJobToBackendService = require('../advertise_functions/advertise_job_to_backend_service').advertiseJobToBackendService;



/**
 * @brief Generating all job services and returning these services using an array.
 * @param {ROSLIB.Ros} ros
 * @returns Job service list 
 */
function generateServices(ros){
    // job_to_robot service as a ROSLIB.Service
    var job_to_robot = new ROSLIB.Service({
        ros: ros,
        name: '/job_to_robot',
        serviceType: 'robot_backend_interface_msgs/srv/JobToRobot'
    });

    // job_to_backend service as a ROSLIB.Service
    var job_to_backend = new ROSLIB.Service({
        ros: ros,
        name: '/job_to_backend',
        serviceType: 'robot_backend_interface_msgs/srv/JobToBackend'
    });

    advertiseJobToBackendService(job_to_backend);

    // returning service list
    return {
        job_to_robot: job_to_robot,
        job_to_backend: job_to_backend
    };
};



module.exports = {
    generateServices: generateServices
};
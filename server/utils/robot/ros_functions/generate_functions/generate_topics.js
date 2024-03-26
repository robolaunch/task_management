const ROSLIB = require('roslib');
const laserScanCallback = require('../callback_functions/laser_scan_callback').laserScanCallback;



/**
 * @brief Rostopic generator function to subsscribe or publish.
 * @param {ROSLIB.Ros} ros 
 * @returns Topic list 
 */
function generateTopics(ros){
    // laser scan listener
    var laser_scan_listener = new ROSLIB.Topic({
        ros: ros,
        name: '/scan',
        messageType: 'sensor_msgs/msg/LaserScan',
    });

    // goal pose publisher
    var goal_pose_publisher = new ROSLIB.Topic({
        ros: ros,
        name: '/scan',
        messageType: 'geometry_msgs/msg/PoseStamped'
    });

    laser_scan_listener.subscribe(async function(message){
        laserScanCallback(message, ros.socket._url);
    });

    // returning all topics as a json format
    return{
        laser_scan_listener: laser_scan_listener,
        goal_pose_publisher: goal_pose_publisher
    };
};



module.exports = {
    generateTopics: generateTopics
};
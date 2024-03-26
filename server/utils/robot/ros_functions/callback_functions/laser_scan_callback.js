/**
 * @brief Laser scan callback function.
 * @param {JSON} message Laser scan callback message JSON format (sensor_msgs/msg/LaserScan) 
 * @param {string} url Url of robot. It should be like 'ws://x.x.x.x:9090'
 * @returns None
 */
async function laserScanCallback(message, url){
    // console.log("Message: ", message);
    // console.log("Robot url: ", url);
};



module.exports = {
    laserScanCallback: laserScanCallback
};
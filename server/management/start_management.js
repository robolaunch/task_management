const listAndConnectToRos = require('../ros/ros_connections/ros_connection').listAndConnectToRos;



/**
 * @brief Starting management system.
 * @returns None 
 */
async function startManagement(){
    await listAndConnectToRos();
};



module.exports = {
    startManagement: startManagement
};
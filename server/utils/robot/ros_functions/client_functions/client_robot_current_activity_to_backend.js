const ROSLIB = require('roslib');
const findRobotAndUpdate = require('../../db_functions/update_robot').findRobotAndUpdate;



/**
 * @brief Client ROS Service to get robot's current activity from robot using backend connection.
 * @param {ROSLIB.Service} client 
 * @returns None
 */
async function generateRobotCurrentActivityToBackend(client){
    // Request as a ROSLIB.ServiceRequest, it will be an empty request.
    var request = new ROSLIB.ServiceRequest({});

    // Calling service via client and updateing robot's current activity according the response.
    client.callService(request, async function(result){
        await findRobotAndUpdate({url: client.ros.socket._url}, {current_activity: result.current_activity.data}, {returnOriginal: false});
    });
};



module.exports = {
    generateRobotCurrentActivityToBackend: generateRobotCurrentActivityToBackend
};
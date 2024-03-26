const findRobotAndUpdate = require('../../db_functions/update_robot').findRobotAndUpdate;
const ROSLIB = require('roslib');



/**
 * @brief Advertiser robot_to_backend service.
 * @param {ROSLIB.Service} client Ros service client to update robot status from robot to backend.
 * @return {boolean} true
 */
function advertiseRobotToBackendService(client){
    client.advertise(function(request, response){
        if(request.robot.job_id.data != ""){
            var update = {
                current_activity: request.robot.current_activity.data,
                job_id: request.robot.job_id.data
            };
        }else{
            var update = {
                current_activity: request.robot.current_activity.data
            };
        };

        var filter = {
            url: client.ros.socket._url
        };

        var options = {
            returnOriginal: false,
            upsert: true,
            new: true
        };

        findRobotAndUpdate(filter, update, options);
        response.response = {data: 'ACCEPTED'};
        return true;
    });
};



module.exports  ={
    advertiseRobotToBackendService: advertiseRobotToBackendService
};
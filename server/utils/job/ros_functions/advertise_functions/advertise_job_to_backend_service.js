const ROSLIB = require('roslib');
const findJobAndUpdate = require('../../db_functions/update_job').findJobAndUpdate;
const job_to_backend = "robot_backend_interface/srv/JobToBackend";



/**
 * @brief @brief Advertiser function to use JobToBackend.srv, this service is advertised from Backend so that robots can use this to update jobs which they were doing.
 * @param {ROSLIB.Service<job_to_backend.request, job_to_backend.response>} client 
 * @returns {boolean} true or false
 */
function advertiseJobToBackendService(client){
    client.advertise(function(request, response){
        try{
            console.log("Request: ", request);
            var update = {
                job_status: request.job_status.data,
                error_code: request.error_code.data,
                error_message: request.error_message.data,
                last_completed_task: {
                    action_name: request.last_completed_task.action_name.data,
                    location_id: request.last_completed_task.location.location_id.data
                }
            };

            // If job is completed, write url of the robot to mongoDB.
            if(request.job_status.data == "COMPLETED"){
                update.robot_url = client.ros.socket._url;
            };

            var filter = {job_id: request.job_id.data};
            var options = {returnOriginal: false, upsert: true, new: true};
            
            // Update job with update parameter using filter to find.
            findJobAndUpdate(filter, update, options);

            // Take result from findJobAndUpdate and return result as a response.;
            response.response = {data: "ACCEPTED"};
            return true;
        }catch(error){
            console.log(error);
            response.response = {data: "REJECTED"};
            return false;
        };
    });
};



module.exports = {
    advertiseJobToBackendService: advertiseJobToBackendService
};
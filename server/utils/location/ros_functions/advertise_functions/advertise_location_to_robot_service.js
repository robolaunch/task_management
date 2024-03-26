const ROSLIB = require('../../db_functions/find_location').findLocation;
const findLocation = require('../../db_functions/find_location').findLocation;
const location_to_robot = "robot_backend_msgs/srv/LocationToRobot"



/**
 * @brief @brief Advertiser function to use LocationToRobot.srv, this service is advertised from Backend so that give location information to robot which has requested.
 * @param {ROSLIB.Service<location_to_robot.request, location_to_robot.response>} client 
 * @returns {boolean} true or false
 */
async function advertiseLocationToRobot(client){
    var locations = await findLocation({});
    client.advertise(function(request, response){
        try {
            for(var i=0; i<locations.length; i++){
                console.log(request);
                if(locations[i].location_id == request.location_id.data){
                    response.location = {
                        location_id: {
                            data: locations[i].location_id
                        },
                        pose: {
                            position: {
                                x: locations[i].position.x,
                                y: locations[i].position.y,
                                z: locations[i].position.z
                            },
                            orientation: {
                                x: locations[i].orientation.x,
                                y: locations[i].orientation.y,
                                z: locations[i].orientation.z,
                                w: locations[i].orientation.w
                            }
                        }
                    };
                };
            };

            console.log("Response location: ", response);
            return true;
        }catch(error){
            console.log(error);
            return false;
        };
    });
};



module.exports = {
    advertiseLocationToRobot: advertiseLocationToRobot
};
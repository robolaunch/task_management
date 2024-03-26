const ROSLIB = require('roslib');
const findWaitingPoints = require('../../db_functions/find_waiting_point').findWaitingPoint;
const waiting_points_to_robot = "robot_backend_interface_msgs/srv/WaitingPointsToRobot";



/**
 * @brief @brief Advertiser function to use WaitingPointsToRobot.srv, this service is advertised from backend so that give waiting information to robot which has requested.
 * @param {ROSLIB.Service<waiting_points_to_robot.request, waiting_points_to_robot.response>} client 
 * @returns {boolean} true or false
 */
async function advertiseWaitingPointsToRobot(client){
    var waiting_points = await findWaitingPoints({});

    client.advertise(function(request, response){
        console.log("Waiting point request: ", request)
        response.waiting_points = [];

        for(var i=0; i<waiting_points.length; i++){
            response.waiting_points.push({
                location_id: {
                    data: waiting_points[i].waiting_point_id
                },
                pose: {
                    position: {
                        x: waiting_points[i].position.x,
                        y: waiting_points[i].position.y,
                        z: waiting_points[i].position.z
                    },
                    orientation: {
                        x: waiting_points[i].orientation.x,
                        y: waiting_points[i].orientation.y,
                        z: waiting_points[i].orientation.z,
                        w: waiting_points[i].orientation.w
                    }
                }
            });
        };

        return true;
    });
};



module.exports = {
    advertiseWaitingPointsToRobot: advertiseWaitingPointsToRobot
};
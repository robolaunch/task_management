/**
 * @brief Waiting Point query response message generator functions.
 * @param {JSON} waiting_points Locations which is getted by mongoDB. 
 * @returns waiting_point_query_message
 */
async function generateWaitingPointQueryMessage(waiting_points){
    try {
        var waiting_point_query_message = new Array();
        for(var i=0; i<waiting_points.length; i++){
            waiting_point_query_message.push({
                "messageType": "WaitingPointQuery",
                "waitingPointID": waiting_points[i].waiting_point_id,
                "position": {
                    "x": waiting_points[i].position.x,
                    "y": waiting_points[i].position.y,
                    "z": waiting_points[i].position.z
                },
                "orientation": {
                    "x": waiting_points[i].orientation.x,
                    "y": waiting_points[i].orientation.y,
                    "z": waiting_points[i].orientation.z,
                    "w": waiting_points[i].orientation.w
                }
            });
        };

        return waiting_point_query_message;
    } catch (error) {
        console.log(error);
    };
};



module.exports = {
    generateWaitingPointQueryMessage: generateWaitingPointQueryMessage
};
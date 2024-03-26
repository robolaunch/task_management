/**
 * @brief Generating waiting point create response message for Frontend.
 * @param {JSON} message Message for generating waiting point create response message.
 * @returns {JSON} waiting_point_create_message
 */
function generateWaitingPointCreateResponseMessage(message){
    try{
        var waiting_point_create_message = {
            "messageType": "WaitingPointCreate",
            "waitingPointID": message.waitingPointID,
            "position": {
                "x": message.position.x,
                "y": message.position.y,
                "z": message.position.z
            },
            "orientation": {
                "x": message.orientation.x,
                "y": message.orientation.y,
                "z": message.orientation.z,
                "w": message.orientation.w
            },
            "status": message.status,
            "waitingPointStatus": message.waitingPointStatus
        };
    }catch(error){
        var waiting_point_create_message = {
            "messageType": "WaitingPointCreate",
            "waitingPointID": message.waitingPointID,
            "position": {
                "x": message.position.x,
                "y": message.position.y,
                "z": message.position.z
            },
            "orientation": {
                "x": message.orientation.x,
                "y": message.orientation.y,
                "z": message.orientation.z,
                "w": message.orientation.w
            },
            "status": message.status,
            "waitingPointStatus": "REJECTED"
        };
    };
    return waiting_point_create_message;
};



module.exports = {
    generateWaitingPointCreateResponseMessage: generateWaitingPointCreateResponseMessage
};
/**
 * @brief Generating location create response message for Frontend.
 * @param {JSON} message  
 * @returns {JSON} location_create_message
 */
function generateLocationCreateResponseMessage(message){
    try{
       var location_create_message = {
        "messageType": "LocationCreate",
        "locationID": message.locationID,
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
        "locationStatus": message.locationStatus
       }
    }catch(error){
        var location_create_message = {
            "messageType": "LocationCreate",
            "locationId": message.locationID,
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
            "locationStatus": "REJECTED"
           };       
    };
    return location_create_message;
};



module.exports = {
    generateLocationCreateResponseMessage: generateLocationCreateResponseMessage
};

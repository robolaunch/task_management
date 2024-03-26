/**
 * 
 * @param {JSON} filter Filter to find location which will be updated. 
 * @param {string} update Update value from Front-end.
 * @returns {JSON} location_update_message
 */
function generateLocationUpdateResponseMessage(filter, update){
    try{
       var location_update_message = {
        "messageType": "LocationUpdate",
        "locationID": filter.location_id,
        "locationStatus": "ACCEPTED"
       };
    }catch(error){
        var location_update_message = {
            "messageType": "LocationUpdate",
            "locationID": filter.location_id,
            "locationStatus": "REJECTED"
        };
    };
    return location_update_message;
};



module.exports = {
    generateLocationUpdateResponseMessage: generateLocationUpdateResponseMessage
};
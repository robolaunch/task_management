const generateLocationCreateResponseMessage = require('../functions/generate_response_messages/generate_location_create_response_message').generateLocationCreateResponseMessage;



/**
 * @brief Saving a location object to mongoDB.
 * @param {JSON} new_location New location from Front-end to DB.
 * @param {JSON} message Message to save db.
 * @param {string} message_type Message type for socket.io rooms.
 * @returns {JSON} location_create_response_message
 */
async function saveLocation(new_location, message, message_type){
    return new Promise((resolve, reject) => {
        new_location.save(async function(error){
            if(error){
                console.log(error);
                message.locationStatus = "REJECTED";
                var location_create_response_message = generateLocationCreateResponseMessage(message);
            }else{
                message.locationStatus = "ACCEPTED";
                var location_create_response_message = generateLocationCreateResponseMessage(message);
            };
            resolve(location_create_response_message);
        });
    });
};



module.exports = {
    saveLocation: saveLocation
};
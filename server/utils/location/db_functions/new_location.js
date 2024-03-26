const Location = require('../../../models/location');



/**
 * @brief Generating new location on mongoDB db.
 * @param {string} connection Name of topic to communicate with Backend-Front. 
 * @param {JSON} received_message Received messsage as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 * @returns {JSON} new_location 
 * @returns {string} REJECTED
 */
async function generateNewLocation(connection, received_message, io){
    return new Promise((resolve, reject) => {
        try{
           var new_location = new Location({
                location_id: received_message.locationID,
                position: {
                    x: received_message.position.x,
                    y: received_message.position.y,
                    z: received_message.position.z
                },
                orientation: {
                    x: received_message.orientation.x,
                    y: received_message.orientation.y,
                    z: received_message.orientation.z,
                    w: received_message.orientation.w
                },
                status: received_message.locationStatus
           });
           resolve(new_location);
        }catch(error){
            resolve("REJECTED");
        };
    });
};



module.exports = {
    generateNewLocation: generateNewLocation
};
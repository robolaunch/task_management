const WaitingPoint = require('../../../models/waiting_point');



/**
 * @brief Generating new waiting point on mongoDB db.
 * @param {string} connection Name of topic to communicate with Backend-Front. 
 * @param {JSON} received_message Received messsage as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 * @returns {JSON} new_waiting_point 
 * @returns {string} REJECTED
 */
async function generateNewWaitingPoint(connection, received_message, io){
    return new Promise((resolve, reject) => {
        try{
           var new_waiting_point = new WaitingPoint({
                waiting_point_id: received_message.waitingPointID,
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
           resolve(new_waiting_point); 
        }catch(error){
            resolve("REJECTED");
        };
    });
};



module.exports = {
    generateNewWaitingPoint: generateNewWaitingPoint
};
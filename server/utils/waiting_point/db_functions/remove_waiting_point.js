const WaitingPoint = require('../../../models/waiting_point');
const generateWaitingPointRemoveRepsonseMessage = require('../functions/generate_response_messages/generate_waiting_point_remove_response_message').generateWaitingPointRemoveResponseMessage;



/**
 * @brief Function to remove waiting_point from mongoDB db.
 * @param {JSON} filter Filter is used to find waiting_point.
 * @param {JSON} message Message will be comed from user.
 * @param {String} message_type Message type is name of the topic (socket.io)
 * @returns {JSON} waiting_point_remove_message_response
 */
async function removeWaitingPoint(filter, message, message_type){
    return new Promise((resolve, reject) => {
        WaitingPoint.findOneAndRemove(filter, function(error){
            if(error){
                message = {"waitingPointStatus": "REJECTED"};
                var waiting_point_remove_message_response = generateWaitingPointRemoveRepsonseMessage(filter, message);
            }else{
                message = {"waitingPointStatus": "ACCEPTED"};
                var waiting_point_remove_message_response = generateWaitingPointRemoveRepsonseMessage(filter, message);
            };
            resolve(waiting_point_remove_message_response);
        });
    });
};



module.exports = {
    removeWaitingPoint: removeWaitingPoint
};
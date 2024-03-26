/**
 * @brief Waiting point remove response message generator function.
 * @param {JSON} message Message for generating waiting point remove response message
 * @returns {JSON} waiting_point_remove_message
 */
function generateWaitingPointRemoveResponseMessage(filter, message){
    try{
       var waiting_point_remove_message = {
            "messageType": "WaitingPointRemove",
            "waitingPointID": filter.waiting_point_id,
            "waitingPointStatus": "ACCEPTED"
       }; 
    }catch(error){
        var waiting_point_remove_message = {
            "messageType": "WaitingPointRemove",
            "waitingPointID": filter.waiting_point_id,
            "waitingPointStatus": "REJECTED"
        };
    };
    return waiting_point_remove_message;
};



module.exports = {
    generateWaitingPointRemoveResponseMessage: generateWaitingPointRemoveResponseMessage
};
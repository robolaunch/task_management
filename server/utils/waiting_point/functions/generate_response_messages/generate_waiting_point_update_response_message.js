/**
 * @brief Waiting point update response message generator
 * @param {JSON} filter Filter to find waiting point which will be updated. 
 * @param {JSON} update Updated value
 * @returns waiting_point_update_message
 */
function generateWaitingPointUpdateResponseMessage(filter, update){
    try{
       var waiting_point_update_message = {
        "messageType": "WaitingPointUpdate",
        "waitingPointID": filter.waiting_point_id,
        "status": "ACCEPTED"
       };
    }catch(error){
        var waiting_point_update_message = {
            "messageType": "WaitingPointUpdate",
            "waitingPointID": filter.waiting_point_id,
            "status": "REJECTED"
        };
    };
    return waiting_point_update_message;
};



module.exports  = {
    generateWaitingPointUpdateResponseMessage: generateWaitingPointUpdateResponseMessage
};
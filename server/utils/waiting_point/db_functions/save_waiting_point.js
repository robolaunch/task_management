const generateWaitingPointCreateResponseMessage= require('../functions/generate_response_messages/generate_waiting_point_create_response_message').generateWaitingPointCreateResponseMessage;



/**
 * @brief Function for saving waiting point to mongoDB.
 * @param {JSON} new_waiting_point 
 * @param {JSON} message 
 * @param {String} message_type 
 * @returns waiting_point_create_response_message
 */
async function saveWaitingPoint(new_waiting_point, message, message_type){
    return new Promise((resolve, reject) => {
        new_waiting_point.save(async function(err){
            if(err){
                message["status"] = "REJECTED";
                var waiting_point_create_response_message = generateWaitingPointCreateResponseMessage(message);
                resolve(waiting_point_create_response_message);
            }else{
                message["status"] = "ACCEPTED";
                var waiting_point_create_response_message = generateWaitingPointCreateResponseMessage(message);
                resolve(waiting_point_create_response_message);
            };
        });
    });
};



module.exports = {
    saveWaitingPoint: saveWaitingPoint
};
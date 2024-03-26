const WaitingPoint = require('../../../models/waiting_point');
const generateWaitingPointUpdateResponseMessage = require('../functions/generate_response_messages/generate_waiting_point_update_response_message').generateWaitingPointUpdateResponseMessage;



/**
 * @brief Finding waiting point and updating via update parameter.
 * @param {JSON} filter Filter to find waiting point which will be updated.
 * @param {JSON} update Uptaded value.
 * @param {JSON} options Options for updating value.
 * @returns waiting_point_update_response_message
 */
async function findWaitingPointAndUpdate(filter, update, options){
    return new Promise((resolve, reject) => {
        WaitingPoint.findOneAndUpdate(filter, update, options, function(error){
            if(error){
                update["waiting_point_status"] = "REJECTED";
                var waiting_point_update_response_message = generateWaitingPointUpdateResponseMessage(filter, update);
                resolve(waiting_point_update_response_message);
            }else{
                update["waiting_point_status"] = "ACCEPTED";
                var waiting_point_update_response_message = generateWaitingPointUpdateResponseMessage(filter, update);
                resolve(waiting_point_update_response_message);
            };
        });
    });
};



module.exports = {
    findWaitingPointAndUpdate: findWaitingPointAndUpdate
};
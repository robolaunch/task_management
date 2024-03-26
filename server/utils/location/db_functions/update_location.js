const Location = require('../../../models/location');
const generateLocationUpdateResponseMessage = require('../functions/generate_response_messages/generate_location_update_response_message').generateLocationUpdateResponseMessage;



/**
 * @brief Finding location and updating via update parameter.
 * @param {JSON} filter Filter is used to find location which will be updated.
 * @param {JSON} update Uptaded value.
 * @param {JSON} options Options for updating value.
 * @returns location_update_response_message
 */
async function findLocationAndUpdate(filter, update, options){
    return new Promise((resolve, reject) => {
        Location.findOneAndUpdate(filter, update, options, function(error){
            if(error){
                update["location_status"] = "REJECTED";
                var location_update_response_message = generateLocationUpdateResponseMessage(filter, update);
                resolve(location_update_response_message);
            }else{
                update["location_status"] = "ACCEPTED";
                var location_update_response_message = generateLocationUpdateResponseMessage(filter, update);
                resolve(location_update_response_message);
            };
        });
    });
};



module.exports = {
    findLocationAndUpdate: findLocationAndUpdate
};
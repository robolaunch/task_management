const findLocation = require('../utils/location/db_functions/find_location').findLocation;
const generateLocationQueryMessage = require('../utils/location/functions/generate_response_messages/generate_location_query_response_message').generateLocationQueryMessage;



/**
 * @brief Controller for getting all locations from mongoDB. 
 * @param {String} connection 
 * @param {JSON} received_message 
 * @param {Socket} io 
 */
async function locationQueryController(connection, received_message, io){
    var filter = {
        createdAt: {
            $gte: received_message.since,
            $lte: received_message.until
        }
    };

    var result = await findLocation(filter);

    var location_query_message = await generateLocationQueryMessage(result);
    console.log(location_query_message);
    io.emit(connection, location_query_message);
};



module.exports = {
    locationQueryController: locationQueryController
};
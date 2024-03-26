const findWaitingPoint = require('../utils/waiting_point/db_functions/find_waiting_point').findWaitingPoint;
const generateWaitingPointQueryMessage = require('../utils/waiting_point/functions/generate_response_messages/generate_waiting_point_query_response_message').generateWaitingPointQueryMessage;



/**
 * @brief Controller for getting all waiting points from mongoDB.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function waitingPointQueryController(connection, received_message, io){
    var filter = {
        createdAt: {
            $gte: received_message.since,
            $lte: received_message.until
        }
    };

    var result = await findWaitingPoint(filter);

    var waiting_point_query_message = await generateWaitingPointQueryMessage(result);

    console.log(waiting_point_query_message);

    io.emit(connection, waiting_point_query_message);
};



module.exports = {
    waitingPointQueryController: waitingPointQueryController
};
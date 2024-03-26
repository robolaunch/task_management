const generateNewWaitingPoint = require('../utils/waiting_point/db_functions/new_waiting_point').generateNewWaitingPoint;
const saveWaitingPoint = require('../utils/waiting_point/db_functions/save_waiting_point').saveWaitingPoint;



/**
 * @brief Controller for creating a waiting point. 
 * @param {string} connection Name of topic to communicate with Backend-Frontend.
 * @param {JSON} received_message Received message as a json format from Frontend.
 * @param {Socket} io IO module from SocketIO
 */
async function waitingPointCreateController(connection, received_message, io){
    var new_waiting_point = await generateNewWaitingPoint(connection, received_message, io);

    var result = await saveWaitingPoint(new_waiting_point, received_message, received_message.message_type);

    io.emit(connection, result);
}



module.exports = {
    waitingPointCreateController: waitingPointCreateController
};
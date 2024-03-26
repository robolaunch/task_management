const findWaitingPoint = require('../utils/waiting_point/db_functions/find_waiting_point').findWaitingPoint;
const removeWaitingPoint = require('../utils/waiting_point/db_functions/remove_waiting_point').removeWaitingPoint;



/**
 * @brief Controller for removing a waiting point.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function waitingPointRemoveController(connection, received_message, io){
    var filter = {waiting_point_id: received_message.waitingPointID};

    var waiting_point_to_be_removed = await findWaitingPoint(filter);

    if(waiting_point_to_be_removed.length != 0){
        var result = await removeWaitingPoint(filter, received_message, received_message.messageType);
    };
    io.emit(connection, result);
};



module.exports = {
    waitingPointRemoveController: waitingPointRemoveController
};
const findWaitingPoint = require('../utils/waiting_point/db_functions/find_waiting_point').findWaitingPoint;
const findWaitingPointAndUpdate = require('../utils/waiting_point/db_functions/update_waiting_point').findWaitingPointAndUpdate;



/**
 * @brief Controller for updating a job.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function waitingPointUpdateController(connection, received_message, io){
    var filter = {waiting_point_id: received_message.waitingPointID};

    var update = {
        waiting_point_id: received_message.waitingPointID,
        position: received_message.position,
        orientation: received_message.orientation,
        status: received_message.status
    };

    var options = {returnOriginal: false, upsert: true, new: true};

    var waiting_point_to_be_updated = await findWaitingPoint(filter);

    if(waiting_point_to_be_updated.length != 0){
        var result = await findWaitingPointAndUpdate(filter, update, options);
    };
    
    io.emit(connection, result);
};



module.exports = {
    waitingPointUpdateController: waitingPointUpdateController
};
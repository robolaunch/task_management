const findJob = require('../utils/job/db_functions/find_job').findJob;
const generateJobQueryMessage = require('../utils/job/functions/generate_response_messages/generate_job_query_response_message').generateJobQueryMessage;



/**
 * @brief Controller for getting all jobs from mongoDB.
 * @param {string} connection Name of topic to communicate with Backend-Fronted. 
 * @param {JSON} received_message Received message as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 */
async function jobQueryController(connection, received_message, io){
    var filter = {
        createdAt: {
            $gte: received_message.since,
            $lte: received_message.until
        }
    };

    var result = await findJob(filter);
    
    var job_query_message = await generateJobQueryMessage(result);
    
    io.emit(connection, job_query_message);
};



module.exports = {
    jobQueryController: jobQueryController
};
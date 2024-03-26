const Robot = require('../../../models/robot');



/**
 * @brief Generating new robot on mongoDB db.
 * @param {string} connection Name of topic to communicate with Backend-Front. 
 * @param {JSON} received_message Received messsage as a json format from Frontend. 
 * @param {Socket} io IO module from socket.io 
 * @returns {JSON} new_robot 
 * @returns {string} REJECTED
 */
async function generateNewRobot(connection, received_message, io){
    return new Promise((resolve, reject) => {
        try{
            var new_robot = new Robot({
                id: received_message.robotID,
                type: received_message.robotType,
                url: received_message.robotUrl,
                current_activity: received_message.currentActivity,
                job_id: received_message.jobID
            });
            resolve(new_robot);
        }catch(error){
            resolve("REJECTED");
        };
    });
};



module.exports = {
    generateNewRobot: generateNewRobot
};
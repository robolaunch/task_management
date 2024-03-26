const findRobot = require('../../utils/robot/db_functions/find_robot').findRobot;
const rosInit = require('./ros_initialize').rosInit;



/**
 * @brief Listing and connection to all robots via rosInit() function.
 * @returns None
 */
async function listAndConnectToRos(){
    // filter is empty to get all robots from mongoDB.
    var filter = {};

    // get all robots from mongoDB.
    var robots = await findRobot(filter);

    for(var i=0; i<robots.length; i++){
        rosInit(robots[i].url);
    };
};



module.exports = {
    listAndConnectToRos: listAndConnectToRos
};
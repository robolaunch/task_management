const Robots = require('../../../models/robot');



/**
 * @brief Function to find robot from mongoDB db.
 * @param {JSON} filter Filter is used to find robot from mongoDB which will be required for this process.
 * @returns result
 * @returns error
 */
async function findRobot(filter){
    return new Promise((resolve, reject) => {
        Robots.find(filter, (error, result) => {
            if(error){
                resolve(error);
            }else{
                resolve(result);
            };
        });
    });
};



module.exports = {
    findRobot: findRobot
};
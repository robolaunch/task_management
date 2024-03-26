const WaitingPoint = require('../../../models/waiting_point');



/**
 * @brief Function to find waiting point from mongoDB db.
 * @param {JSON} filter Filter is used to find waiting point from mongoDB which will be required for this process.
 * @returns {JSON} result
 * @returns {JSON} error
 */
async function findWaitingPoint(filter){
    return new Promise((resolve, reject) => {
        WaitingPoint.find(filter, (error, result) => {
            if(error){
                resolve(error);
            }else{
                resolve(result);
            };
        });
    });
};



module.exports = {
    findWaitingPoint: findWaitingPoint
};
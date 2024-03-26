const Jobs = require('../../../models/job');



/**
 * @brief Function to find job from mongoDB db.
 * @param {JSON} filter 
 * @returns {JSON} result
 * @returns {JSON} error
 */
async function findJob(filter){
    return new Promise((resolve, reject) => {
        Jobs.find(filter, (err, result) => {
            if(err){
                resolve(err);
            }else{
                resolve(result);
            };
        });
    });
};



module.exports = {
    findJob: findJob
};
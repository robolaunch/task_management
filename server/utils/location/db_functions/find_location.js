const Location = require('../../../models/location');



/**
 * @brief Function to find location from mongoDB db.
 * @param {JSON} filter Filter is used to find location from mongoDB which will be required for this process.
 * @returns result
 * @returns error
 */
async function findLocation(filter){
    return new Promise((resolve, reject) => {
        Location.find(filter, (error, result) => {
            if(error){
                resolve(error);
            }else{
                resolve(result);
            };
        });
    });
};



module.exports = {
    findLocation: findLocation
};
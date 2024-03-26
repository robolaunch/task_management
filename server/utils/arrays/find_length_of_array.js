/**
 * @brief Finding length of an array.
 * @param {Array} array 
 * @returns Length of the array
 */
function findLength(array){
    try {
        var length = Object.keys(array).length;
        return length;   
    }catch(error){
        return -1;
    };
};



module.exports = {
    findLength: findLength
};
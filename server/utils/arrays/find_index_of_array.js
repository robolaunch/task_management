/**
 * @brief Finding index in an array via searched_key parameter.
 * @param {Array} array 
 * @param {string} searched_key 
 * @returns Index of value.
 */
function findIndex(array, searched_key){
    for(var i=0; i<array.length; i++){
        if(Object.keys(array[i]) == searched_key){
            return i;
        }
    };
    return -1;
};



module.exports = {
    findIndex: findIndex
};
/**
 * @brief Deleting a value from array via index parameter.
 * @param {Array} array 
 * @param {Number} index 
 * @returns Spliced array
 */
function deleteElementFromArray(array, index){
    if(index != -1){
        array.splice(index, 1);
        return array;
    };
};



module.exports = {
    deleteElementFromArray: deleteElementFromArray
};
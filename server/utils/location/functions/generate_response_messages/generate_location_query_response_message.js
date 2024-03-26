/**
 * @brief Location query response message generator functions.
 * @param {JSON} locations Locations which is getted by mongoDB. 
 * @returns location_query_message
 */
async function generateLocationQueryMessage(locations){
    try{
    console.log("Locations: ", locations);
    var location_query_message = new Array();
    for(var i=0; i<locations.length; i++){
        console.log(i);
        location_query_message.push({
            "messageType": "LocationQuery",
            "locationID": locations[i].location_id,
            "position": {
                "x": locations[i].position.x,
                "y": locations[i].position.y,
                "z": locations[i].position.z
            },
            "orientation": {
                "x": locations[i].orientation.x,
                "y": locations[i].orientation.y,
                "z": locations[i].orientation.z,
                "w": locations[i].orientation.w
            },
            "status": locations[i].status
        });
       };
       
       return location_query_message;

    }catch(error){
        console.log(error);
    };
};



module.exports = {
    generateLocationQueryMessage: generateLocationQueryMessage
};
async function indexController(connection, received_message, io){
    console.log(received_message);
    io.emit(connection, {
        "messageType": "IndexController"
    });
};



module.exports = {
    indexController: indexController
};
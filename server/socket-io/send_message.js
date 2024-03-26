var io;

function createIOConnection(imported_io){
    io = imported_io;
    console.log("IO is getted as a parameter for sendMessage() function.");
};



function sendMessage(connection, message){
    try {
        io.emit(connection, message);
    }catch(error){
        console.log("IO module has not defined yet.");   
    }
};



module.exports = {
    createIOConnection: createIOConnection,
    sendMessage: sendMessage
};
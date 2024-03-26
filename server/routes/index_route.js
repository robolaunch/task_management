const indexController = require('../controller/index_controller').indexController;



function indexRouter(connection, received_message, io){
    indexController(connection, received_message, io);
};



module.exports = {
    indexRouter: indexRouter
};
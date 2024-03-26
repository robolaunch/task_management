// socket.io module
const io = require('socket.io');

// Index Router
const indexRouter = require('./index_route').indexRouter;

// Job Router
const jobCreateRouter = require('./job_create_route').jobCreateRouter;
const jobCancelRouter = require('./job_cancel_route').jobCancelRouter;
const jobQueryRouter = require('./job_query_route').jobQueryRouter;
const jobUpdateRouter = require('./job_update_route').jobUpdateRouter;
const jobRemoveRouter = require('./job_remove_route').jobRemoveRouter;

// Robot Router
const robotCreateRouter = require('./robot_create_route').robotCreateRouter;
const robotQueryRouter = require('./robot_query_route').robotQueryRouter;
const robotUpdateRouter = require('./robot_update_route').robotUpdateRouter;
const robotRemoveRouter = require('./robot_remove_route').robotRemoveRouter;

// Location Router
const locationCreateRouter = require('./location_create_route').locationCreateRouter;
const locationQueryRouter = require('./location_query_route').locationQueryRouter;
const locationUpdateRouter = require('./location_update_route').locationUpdateRouter;

// Waiting Point Router
const waitingPointCreateRouter = require('./waiting_point_create_route').waitingPointCreateRouter; 
const waitingPointQueryRouter = require('./waiting_point_query_route').waitingPointQueryRouter;
const waitingPointUpdateRouter = require('./waiting_point_update_route').waitingPointUpdateRouter;
const waitingPointRemoveRouter = require('./waiting_point_remove_route').waitingPointRmemoveRouter;



/**
 * @brief Route manager 
 * @param {Scoket} io IO module to emit for re-publishing messages.
 * @returns None 
 */
function socketIORouteManager(io){
    io.on('connection', function(socket){
        console.log("Connected from SocketIO Module...");

        socket.on('Index', (received_message) => {
            indexRouter('Index', received_message, io);
        });

        socket.on('JobCreate', (received_message) => {
            jobCreateRouter('JobCreate', received_message, io);
        });

        socket.on('JobCancel', (received_message) => {
            jobCancelRouter('JobCancel', received_message, io);
        });

        socket.on('JobQuery', (received_message) => {
            jobQueryRouter('JobQuery', received_message, io);
        });

        socket.on('JobUpdate', (received_message) => {
            jobUpdateRouter('JobUpdate', received_message, io);
        });

        socket.on('JobRemove', (received_message) => {
            jobRemoveRouter('JobRemove', received_message, io);
        });

        socket.on('RobotCreate', (received_message) => {
            robotCreateRouter('RobotCreate', received_message, io);
        });

        socket.on('RobotQuery', (received_message) => {
            robotQueryRouter('RobotQuery', received_message, io);
        });

        socket.on('RobotUpdate', (received_message) => {
            robotUpdateRouter('RobotUpdate', received_message, io);
        });

        socket.on('RobotRemove', (received_message) => {
            robotRemoveRouter('RobotRemove', received_message, io);
        });

        socket.on('LocationCreate', (received_message) => {
            locationCreateRouter('LocationCreate', received_message, io);
        });

        socket.on('LocationQuery', (received_message) => {
            locationQueryRouter('LocationQuery', received_message, io);
        });

        socket.on('LocationUpdate', (received_message) => {
            locationUpdateRouter('LocationUpdate', received_message, io);
        });

        socket.on('WaitingPointCreate', (received_message) => {
            waitingPointCreateRouter('WaitingPointCreate', received_message, io);
        });

        socket.on('WaitingPointQuery', (received_message) => {
            waitingPointQueryRouter('WaitingPointQuery', received_message, io);
        });

        socket.on('WaitingPointUpdate', (received_message) => {
            waitingPointUpdateRouter('WaitingPointUpdate', received_message, io);
        });

        socket.on('WaitingPointRemove', (received_message) => {
            waitingPointRemoveRouter('WaitingPointRemove', received_message, io);
        });
    });
};



module.exports = {
    socketIORouteManager: socketIORouteManager
};
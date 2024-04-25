// Express Module
const express = require("express");

// Cors Module
const cors = require("cors");

// app with express
const app = express();

// http and http with security
const http = require("http");
const https = require("https");

// Config from .env file
const config = require("./server/config");

// Connecting MongoDB
const db = require("./server/models/db");

// SocketIO configuration
app.use(
  cors({
    origin: "https://127.0.0.1:8080/",
    methods: ["GET", "POST"],
  })
);

const server = http.createServer(app);
const io = require("socket.io")(server);

// Creating SocketIO connection for sendMessage() function.
const create_io_connection = require("./server/socket-io/send_message");

// Route Management
const route_manager = require("./server/routes/route_manager");

// Starting Fleet Management
const start_management = require("./server/management/start_management");
const fleet_management = require("./server/management/fleet_management");

start_management.startManagement();
fleet_management.fleetManagement();

config();

// Listening 8000 Port with SocketIO
server.listen(process.env.APP_PORT || 8000, () => {
  route_manager.socketIORouteManager(io);
  create_io_connection.createIOConnection(io);
  console.log("SocketIO module is started successfully!");
});

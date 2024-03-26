const ROSLIB = require('roslib');

// Update functions
const findRobotAndUpdate = require('../../utils/robot/db_functions/update_robot').findRobotAndUpdate;

// Generate Service Functions
const generateRobotServices = require('../../utils/robot/ros_functions/generate_functions/generate_services').generateServices;
const generateJobServices = require('../../utils/job/ros_functions/generate_functions/generate_services').generateServices;
const generateLocationServices = require('../../utils/location/ros_functions/generate_functions/generate_services').generateServices;
const generateWaitingPointServices = require('../../utils/waiting_point/ros_functions/generate_functions/generate_services').generateServices;

// Generate Topic Functions
const generateRobotTopics = require('../../utils/robot/ros_functions/generate_functions/generate_topics').generateTopics;
const generateJobTopics = require('../../utils/job/ros_functions/generate_functions/generate_topics').generateTopics;
const generateLocationTopics = require('../../utils/location/ros_functions/generate_functions/generate_topics').generateTopics;
const generateWaitingPointTopics = require('../../utils/waiting_point/ros_functions/generate_functions/generate_topics').generateTopics;

// Array Functions
const findIndex = require('../../utils/arrays/find_index_of_array').findIndex;
const deleteElementFromArray = require('../../utils/arrays/delete_element_from_array').deleteElementFromArray;



// Services to search desired services from service list via ros_url
var robot_services = [];
var job_services = [];
var location_services = [];
var waiting_point_services = [];

// Topics to search desired topics from topic list via ros_url
var robot_topics = [];
var job_topics = [];
var location_topics = [];
var waiting_point_topics = [];



/**
 * @brief Initialize ROS connection with ROSLIB.Ros, so this state is first initialize via Ros object.
 * @param {*} url Url of the robot, it is like ws://x.x.x.x:9090
 * @returns None
 */
async function rosInit(url){
    var ros = new ROSLIB.Ros({
        url: url
    });

    ros.on('connection', async function(){
        // Services to search desired services from service_array in JSON format
        var robot_service = {};
        var job_service = {};
        var location_service = {};
        var waiting_point_service = {};

        // Topics to search desired topics from topic_array in JSON format.
        var robot_topic = {};
        var job_topic = {};
        var location_topic = {};
        var waiting_point_topic = {};

        // Generate Services via Ros functions.
        robot_service[ros.socket._url] = generateRobotServices(ros);
        job_service[ros.socket._url] = generateJobServices(ros);
        location_service[ros.socket._url] = generateLocationServices(ros);
        waiting_point_service[ros.socket._url] = generateWaitingPointServices(ros);

        // Generate Topics via Ros functions.
        robot_topic[ros.socket._url] = generateRobotTopics(ros);
        job_topic[ros.socket._url] = generateJobTopics(ros);
        location_topic[ros.socket._url] = generateLocationTopics(ros);
        waiting_point_topic[ros.socket._url] = generateWaitingPointTopics(ros);

        // Pushing services in JSON format to belongs service arrays.
        robot_services.push(robot_service);
        job_services.push(job_service);
        location_services.push(location_service);
        waiting_point_services.push(waiting_point_service);

        // Pushing topics in JSON format to belongs topic arrays.
        robot_topics.push(robot_topic);
        job_topics.push(job_topic);
        location_topics.push(location_topic);
        waiting_point_topics.push(waiting_point_topic);

        // Update robot status as "CONNECTED"
        await findRobotAndUpdate({url: ros.socket._url}, {current_activity: 'CONNECTED'}, {returnOriginal: false, new: true});
    });

    ros.on('close', async function(message){
        // Update status of robot as 'UNCONNECTED'
        await findRobotAndUpdate({url: ros.socket._url}, {current_activity: 'UNCONNECTED'}, {returnOriginal: false, new: true});

        // Finding index of services from array via array functions.
        var index_of_robot_service = findIndex(robot_services, ros.socket._url);
        var index_of_job_service = findIndex(job_services, ros.socket._url);
        var index_of_location_service = findIndex(location_services, ros.socket._url);
        var index_of_waiting_point_service = findIndex(waiting_point_services, ros.socket._url);

        // Finding index of topics from array via array functions.
        var index_of_robot_topic = findIndex(robot_topics, ros.socket._url);
        var index_of_job_topic = findIndex(job_topics, ros.socket._url);
        var index_of_location_topic = findIndex(location_topics, ros.socket._url);
        var index_of_waiting_point_topic = findIndex(waiting_point_topics, ros.socket._url);

        // Deleting services from array via array functions.
        deleteElementFromArray(robot_services, index_of_robot_service);
        deleteElementFromArray(job_services, index_of_job_service);
        deleteElementFromArray(location_services, index_of_location_service);
        deleteElementFromArray(waiting_point_services, index_of_waiting_point_service);

        // Deleting topics from array via array functions.
        deleteElementFromArray(robot_topics, index_of_robot_topic);
        deleteElementFromArray(job_topics, index_of_job_topic);
        deleteElementFromArray(location_topics, index_of_location_topic);
        deleteElementFromArray(waiting_point_topics, index_of_waiting_point_topic);

        // Wait for a second to reconnect to Ros.
        setTimeout(function(){
            rosInit(url);
        }, 1000);
    });

    // Close ros connection when any errors occur.
    ros.on('error', async function(message){
        ros.close();
    });

    // Close ros connection when ros is shutdowned.
    ros.on('shutdown', async function(message){
        ros.close();
    });
};



module.exports = {
    rosInit: rosInit,
    // Exported services
    robot_services: robot_services,
    job_services: job_services,
    location_services: location_services,
    waiting_point_services: waiting_point_services,
    // Exported topics
    robot_topics: robot_topics,
    job_topics: job_topics,
    location_topics: location_topics,
    waiting_point_topics: waiting_point_topics
};

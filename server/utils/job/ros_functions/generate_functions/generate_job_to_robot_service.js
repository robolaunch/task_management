const ROSLIB = require('roslib');
const Job = require('../../../../models/job');
const Task = 'robot_backend_interface_msgs/msg/Task';
const JobToRobot = 'robot_backend_interface_msgs/JobToRobot'
const findLength = require('../../../arrays/find_length_of_array').findLength;
const deleteElementFromArray = require('../../../arrays/delete_element_from_array').deleteElementFromArray;



/**
 * @brief Sending a job to robot from backend which one is created by user and saves to mongoDB.
 * @param {string} job_id 
 * @param {Array<Job.task>} tasks 
 * @param {Task} last_completed_task 
 * @param {ROSLIB.Service<JobToRobot.request, JobToRobot.response>} client 
 * @returns {JobToRobot.response} response 
 */
function generateJobToRobotService(job_id, tasks, last_completed_task, client){
    return new Promise((resolve, reject) => {
        console.log("Tasks: ", tasks.length)
        var task_for_robot = new Array();
        for(var i=0; i<tasks.length; i++){
            task_for_robot.push({
                action_name: {data: tasks[i].ActionName},
                location: {location_id: {data: tasks[i].LocationId}}
            });
        };
        
        console.log("Task for robot: ", task_for_robot);
        var request = new ROSLIB.ServiceRequest({
            job_id: {data: job_id},
            tasks: task_for_robot
            // tasks: [
            //     {
            //         action_name: {data: tasks[0].ActionName},
            //         location: {location_id: {data: tasks[0].LocationId}}
            //     },
            //     {
            //         action_name: {data: tasks[1].ActionName},
            //         location: {location_id: {data: tasks[1].LocationId}}
            //     }
            // ],
            // last_completed_task: {
            //     action_name: {data: last_completed_task.action_name},
            //     location: {location_id: {data: last_completed_task.location_id}}
            // }
        });

        client.callService(request, response => {
            resolve(response);
        }, err => {
            resolve("REJECTED");
        });
    });
};



module.exports = {
    generateJobToRobotService: generateJobToRobotService
};
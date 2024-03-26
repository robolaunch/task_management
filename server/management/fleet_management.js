const checkConnectedRobots = require('./check_connected_robots').checkConnectedRobots;
const findRobot = require('../utils/robot/db_functions/find_robot').findRobot;
const findJob = require('../utils/job/db_functions/find_job').findJob;
const findIndex = require('../utils/arrays/find_index_of_array').findIndex;
const generateJobToRobotService = require('../utils/job/ros_functions/generate_functions/generate_job_to_robot_service').generateJobToRobotService;
const job_services = require('../ros/ros_connections/ros_initialize').job_services;



/**
 * @brief Fleet management to give a mission to available robot using ROSBridge.
 * @returns None
 */
async function fleetManagement(){
    setInterval(async function(){
        await checkConnectedRobots();
        var robots = await findRobot({current_activity: "IDLE"});
        var jobs = await findJob({job_status: "SCHEDULED"});

        if(robots.length > 0 && jobs.length > 0){
            console.log("There is a mission and an available robot to do this mission.");
            var index_of_job_service = findIndex(job_services, robots[0].url);
            console.log("Job to send robot: ", jobs[0]);
            var job_service_response = await generateJobToRobotService(jobs[0].job_id, jobs[0].task_list, jobs[0].last_completed_task, job_services[index_of_job_service][robots[0].url].job_to_robot);    
        };
    }, 2000);
};



module.exports = {
    fleetManagement: fleetManagement
};
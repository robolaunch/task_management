std_msgs/String job_id # ID of job
robot_backend_interface_msgs/Task[] tasks # Task List for jobs, it can have 2 or more tasks. Normally task list has 2 task and they are like a start-point and end-point
robot_backend_interface_msgs/Task last_completed_task # Last completed task information as a robot_backend_interface_msgs/Task type
robot_backend_interface_msgs/Task next_task # Next task 
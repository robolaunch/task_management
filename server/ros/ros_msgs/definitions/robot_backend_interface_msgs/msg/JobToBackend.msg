std_msgs/String job_id # ID of job to update from robot to backend
std_msgs/String job_status # Status of job to update
std_msgs/String error_code # Error code of job if it exist
std_msgs/String error_message # Error message of job if it exist
robot_backend_interface_msgs/Task last_completed_task # Last completed task
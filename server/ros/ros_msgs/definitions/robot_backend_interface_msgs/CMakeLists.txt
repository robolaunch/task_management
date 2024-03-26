cmake_minimum_required(VERSION 3.8)
project(robot_backend_interface_msgs)

if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  add_compile_options(-Wall -Wextra -Wpedantic)
endif()

# find dependencies
find_package(ament_cmake REQUIRED)
find_package(builtin_interfaces REQUIRED)
find_package(rosidl_default_generators REQUIRED)
find_package(std_msgs REQUIRED)
find_package(geometry_msgs REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  # Robot Messages
  "msg/Robot.msg"

  # Job Messages
  "msg/Job.msg"

  # Task Messages
  "msg/Task.msg"

  # Location Messages
  "msg/Location.msg"
  
  # Robot Services
  "srv/UpdateRobotStatus.srv"
  "srv/RobotToBackend.srv"
  "srv/RobotCurrentActivityToBackend.srv"

  # Job Services
  "srv/JobToBackend.srv"
  "srv/JobToRobot.srv"

  # Location Services
  "srv/LocationToRobot.srv"
  "srv/WaitingPointsToRobot.srv"

  DEPENDENCIES builtin_interfaces std_msgs geometry_msgs
)

ament_export_dependencies(rosidl_default_runtime)

ament_package()

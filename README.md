# task_management

### Nodejs and Npm Installation for Ubuntu 22.04

```bash
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04
```

### MongoDB Installation for Ubuntu 22.04

```bash
https://www.cherryservers.com/blog/install-mongodb-ubuntu-22-04
```

### MongoDB Compass Installation for Ubuntu 22.04

```bash
https://linuxgenie.net/how-to-install-mongodb-compass-on-ubuntu-22-04/
```

### Installing all dependencies

```bash
sudo npm install --save
```

### Services

- [x] Job Cancel
- [x] Job Create
- [x] Job Query
- [x] Job Remove
- [x] Job Update
- [x] Location Create
- [x] Location Query
- [x] Location Update
- [ ] Location Load
- [x] Robot Create
- [x] Robot Query
- [x] Robot Remove
- [x] Robot Update
- [x] Waiting Point Create
- [x] Waiting Point Query
- [ ] Waiting Point Load
- [x] Waiting Point Remove
- [x] Waiting Point Update

### Rosbridge

- [x] Robot services
- [x] Robot topics
- [x] Job services
- [x] Job topics
- [x] Location services
- [x] Location topics
- [x] Waiting Point services
- [x] Waiting Point topics

### Fleet Management

- [x] Start Management
- [x] Fleet Management (if mission status == "SCHEDULED" and robot status == "IDLE")

### Task Maangement for FSM

task_management package in robolaunch_colcon_ws is the main package on robot's side. We need to run this command using task_management FSM.
https://github.com/furkansariyildiz/robolaunch_colcon_ws

```bash
source install/setup.bash
ros2 run task_management fsm.py
```

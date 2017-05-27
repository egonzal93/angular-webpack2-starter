
#Used starter template for this projects
bugs: https://github.com/qdouble/angular-webpack2-starter/issues
homepage: https://github.com/qdouble/angular-webpack2-starter#readme
  
### How to run the app

#### 1. Go to sdm-app
#### 2. $ npm run server:dev
#### 3. Launch the browser and go to http://localhost:8080

### How to install the app locally

#### 1. Download and install yarn or nodeJS
#### 2. Go to sdm-app
#### 3. $ yarn or $ npm i


### Kill a process running on a port
### $ netstat -anv |grep [.]PORT
### $ kill -9 PID
### $ ss -tanp |grep .8080

##Get the process id of a process thats listening to a specific port. (MAC)
###$ sudo lsof -i -n -P | grep TCP |grep 4200

#### export NODE_ENV=development
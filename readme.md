
# Exam in web-application and Api design

### Concept
The exam is about building a web application using a Single-Page-Application (SPA)
approach (with React and React-Router), using NodeJS (serving static files, REST API 
and WebSockets). There is only a single NodeJS instance, serving both the frontend 
(e.g., HTML, CSS and bundle.js) and the backend (business logic, REST API and WebSockets). 
The main goal of the exam is to show the understanding of the different technologies learned in class.
The given exam task was to create a quizgame without the use of a real database, but only an inmemory  i.e a Map.

At the moment this project includes REST API, routing with some communication 
between client and server through sockets and some Restfull API. Although the missing parts is under developement.

Extra: The project includes a Dockerfile for the application to create a containerized image for it to be used in infrastructure servicessuch as e.g Container registries or Kubernetes for cloud deployments. 


### Project structure
The project is separated between front-end and back-end and includes also other files and folders which defines the settings 
of the project. 

The front-end, which is the clients side,  is written in .jsx which will later be compiled into regular Javascript.
The module that handles this is called Babel and is installed inside the folder  /node_modules among many other modules that builds 
up the projects. After Babel has finished compiling it will merge all the contents into a bundle.js inside /public folder.
The output bundle.js is defined in a file called 'webpack.config.js'

 
### Install and running application

 To run this application you need to have installed the latest Nodejs runtime downloaded from 
 from https://nodejs.org/en/download. Remember to include npm during installment.
 
 The next tool you need is a cli such as GitBash (if you are on 
 a windows machine) to run 'npm' or yarn commands. 
 
 Now we need to install the projects modules. The node modules and their versions are defined inside 
 the package.json file. Open up a Cli and navigate to the root folder of the project and type 'npm install' or 'yarn install' to install.
 If you get any errors:
 1. Try to create a folder and name it 'node_modules'.This will be filled with all the modules needed to run the 
 applicaiton which is reffered to in package.json. 
 2. Try to delete packa-Lock file and install again.
 
Once finished run 'yarn run dev' or 'yarn run start' to run it locally, then go to localhost:8080 on a browser.
 
## Docker
To build a container image and run it locally with Docker navigate to root folder and follow these command steps in bash:
1. docker image build -t -nameTagOfYourChoice- .  (dont miss the dot)  
2. docker run chosenNametag -p <choose a port such as 8080> 
3. docker run nametag
4. navigate to https://localhost:8080 in a browser
5. remember to remove all afterwards with commands:

docker system prune -a

docker volume prune

### Usefull docker commands

docker images  (lists all images)

docker ps  (lists all running images with their id's)

docker stop id  (stops running images)
 


#Exam in web-application and Api design

###Concept
The exam is about building a web application using a Single-Page-Application (SPA)
approach (with React and React-Router), using NodeJS (serving static files, REST API 
and WebSockets). There is only a single NodeJS instance, serving both the frontend 
(e.g., HTML, CSS and bundle.js) and the backend (business logic, REST API and WebSockets). 
The main goal of the exam is to show the understanding of the different technologies learned in class.

At the moment this project does not include REST API , but it does
include React and React-routing using NodeJS with some communication 
between client and  server. Although the missing parts will be implemented soon in future.

The given exam task was to create a quizgame which included authentication. 

###Project structure
The project is separated between front-end and back-end and includes also other files and folders which defines the settings 
of the project. 

The front-end, which is the clients side,  is written in .jsx which vil later be compiled into regular Javascript.
The module that handles this is called Babel and is installed inside the folder  /node_modules among many other modules that builds 
up the projects. After Babel has finished compiling it will merge all the contents into a bundle.js inside /public folder.
The output bundle.js is defined in a file called 'webpack.config.js'

 
###Install and running application

 To run this application you need to have installed the latest Nodejs and can be downloaded 
 from here https://nodejs.org/en/download. Remember to include npm during installment.
 
 The next tool you need is a cli such as GitBash (if you are on 
 a windows machine) to run 'npm' commands. 
 
 Now we need to install the projects modules. The node modules and their versions are defined inside 
 the package.json file. Open up a Cli and navigate to the root folder of the project and type 'npm install' to install.
 
 Once finished run "npm run dev" and open up localhost:8080
 
 
 ###Resources
 Code-snippets that has been barrowed has been referred to inside code
 
 
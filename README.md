1.Create a server folder

2.Create react native project

3.go to server folder (cd server)

1.npm init (package.json is created)

2.npm install express mysql cors nodemon

3.create the file inside the server (server.js)

4.then go to package.json and add the following

  "name": "server",
  
  "version": "1.0.0",
  
  "description": "",
  
  "main": "App.js",
  
  "type": "module",//ADD THIS
  
        "scripts": {
            "start": "nodemon server.js", // add
          },
          



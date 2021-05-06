#### Starting server
1. Change the directory to server
2. Create a file named jobs.json
3. Add all the jenkins jobs along with the base64 encrypted credentials as shown below.
```
[
  {
    "job": "https://jenkins-url/job/example-job/",
    "credentials": "base64 encryped credemtials"
  }
]
```
4. Execute `npm start` to start the server.

Note: Server will start listening on port 5000 by default. You can set a env varianle named PORT to use a diff port.

#### Starting React local dev server
1. Change directory to ui.
2. Execute `npm start`.

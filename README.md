# node-sandbox
Use for testing APIs

## Steps for setting up sandbox
1. run commdand in root directory: npm install
  - this will install all dependencies defined in packages.json file
2. run command in root directory: node server
  - node will run instance of server.js file

## Testing APIs
Use ./backend/app.js to test APIs:

author api's in following fashion  
```
  app.use('/*yourUrl*', (req, res, next) => {     
    **api content here**
       console.log(req.body)        // req.body refers to json object of request
       res.send('Hello')            // sends response to client requestor
       // or
       res.json({message: 'Hello'}) // sends response in json
  })
```
 req - request of HTTP  
 res - response of HTTP  
 next - Moves HTTP request along middleware pipeline  
 
      

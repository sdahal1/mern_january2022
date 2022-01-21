const express = require("express"); //require is a way of importing something in a js file
const app = express(); //create a variable called app--> this variable is an instance of express
const port = 8000;







//this line is usually at the bottom
app.listen( 8000, () => console.log(`Listening on port: ${port}`) );

const express = require("express"); //require is a way of importing something in a js file
const app = express(); //create a variable called app--> this variable is an instance of express
const port = 8000;


//this is what you did in flask
// @app.route("/hello")
// def sayhello():
//     return "hello"

let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content:"A wise man once said nothing at all", author:"Wes"},
    {content:"Comparison is a theif of joy", author:"Theodore Roosevelt"},
    {content:"Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content:"You Attract what you vibrate", author:"Fritz"},
    {content:"Wherever you go, there you are", author:"Eckhart Tolle"}
]


//this is an api endpoint
app.get("/api/hello",(req,res)=>{
    res.json({msg:"hello express!!!"})
} )


//get all quotes
app.get("/api/quotes", (req,res)=>{
    res.json({count: quotes.length, results: quotes })
})










//this line is usually at the bottom
app.listen( 8000, () => console.log(`Listening on port: ${port}`) );

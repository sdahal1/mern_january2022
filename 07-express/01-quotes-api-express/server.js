const express = require("express"); //require is a way of importing something in a js file
const app = express(); //create a variable called app--> this variable is an instance of express
const port = 8000;

//need these two lines below to be able to read and extract the information received from post requests
app.use(express.json())
app.use(express.urlencoded({extended:true})) //be able to read form information


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

//get one quote by "id"
app.get("/api/quotes/:idx", (req,res)=>{
    res.json({results: quotes[req.params.idx]})
})

//add a new quote
app.post("/api/quotes", (req,res)=>{
    console.log("req.body", req.body)
    quotes.push(req.body) //push the form information into the quotes array
    res.json({count: quotes.length, results: quotes })
})

















//this line is usually at the bottom
app.listen( port, () => console.log(`Listening on port: ${port}`) );

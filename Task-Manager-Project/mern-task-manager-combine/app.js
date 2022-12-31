const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');
const rateLimit =require('express-rate-limit');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');


// Database Lib Import
const mongoose =require('mongoose');
const path = require("path");
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/todo?retryWrites=true&w=majority";
let OPTION={user:'testuser7777',pass:'testuser7777',autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

app.use(express.static('client/build'));

// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

module.exports=app;

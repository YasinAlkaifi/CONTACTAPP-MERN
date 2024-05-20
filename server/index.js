const express=require("express");
const app=express();//initializing  our app
const bodyParser=require("body-parser");
const cors=require("cors");
const mysql=require("mysql2");


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

//Database connection with MySql
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"ahmad1122",
    database:"contact_db_react",
});



app.listen(5000,()=>{
    console.log("Server Port:5000");
})
 
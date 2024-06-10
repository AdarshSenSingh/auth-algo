const express= require('express');
const cors= require('cors');
require('dotenv').config();

const app= express();
const router = require('./router/auth_router')
const dbConnection = require("./database/db")
// middleware i can use json in my application

// if i want to give acess to frontended of different domain to server of different domain
const corsOption= {
    origin:"http://localhost:5173",
    methods:"POST, GET , PUT, DELETE",
    credentials:"true",
}
app.use(cors());
app.use(express.json());
app.use("/auth",router);

const PORT= 5000;
dbConnection().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is listening on ${PORT}`);
        
    });
});

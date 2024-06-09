const express= require('express');
require('dotenv').config();
const app= express();
const router = require('./router/auth_router')
const dbConnection = require("./database/db")
// middleware i can use json in my application
app.use(express.json());
app.use("/auth",router);

const PORT= 5000;
dbConnection().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is listening on ${PORT}`);
        
    });
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app= express();
app.use(cors());
app.use(express.json());
dotenv.config();
const URL= process.env.MONGOURL;
const PORT= process.env.PORT;
mongoose.connect(URL).then(()=>{
    console.log("Database connection sucessful");
    app.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT}`);
    })
    
}).catch(error=> console.log("Error While DB Connection",error));




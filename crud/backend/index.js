import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import route from "./router/Problemrouter.js";
const app= express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
const URL= process.env.MONGOURL;
const PORT= process.env.PORT||6000;
mongoose.connect(URL).then(()=>{
    console.log("Database connection sucessful");
    app.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT}`);
    })
    
}).catch(error=> console.log("Error While DB Connection",error));

app.use("/crud",route);



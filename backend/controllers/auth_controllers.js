// inside controllers my main logic would be there

const express= require('express');
const router = express.Router();
 const home= async(req,res)=>{

    try {
        return    res
        .status(200)
        .send("welcome in router main page.");
    } catch (error) {
        console.log("inside auth_controller.js ",error);
    }
}


const register =async(req,res)=>{
  try {
    console.log(req.body);
    res
    .status(200)
    .json({message:req.body});
  } catch (error) {
    console.log("Error inside the resister-> authcontroller ",error);
  }
};




module.exports={home,register};
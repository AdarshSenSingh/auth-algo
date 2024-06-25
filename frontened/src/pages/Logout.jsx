import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../token/auth";


const Logout = () => {
  const {LogoutUser}= useAuth();
   useEffect(()=>{
      LogoutUser();
   },[LogoutUser]);
   alert("You are sucessfully Logout");
   return <Navigate to="/login"/>
}

export default Logout
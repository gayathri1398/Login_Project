import axios from 'axios';


import { SIGNIN, SIGNUP,VERIFY } from "./auth.type";

export const signin=(userData)=>async(dispatch)=>{
    try {
        const User = await axios(
            {
                method:"POST",
                url:"http://localhost:8080/auth/signin",
                data:{credentials:userData}
             });

             localStorage.setItem("loginToken",JSON.stringify({token:User.data.token}))
           
           return dispatch({type:SIGNIN,payload:User})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error.message})
    }
}
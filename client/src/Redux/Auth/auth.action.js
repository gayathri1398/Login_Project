import axios from 'axios';


import { SIGNIN, SIGNUP,VERIFY } from "./auth.type";

export const signin=(userData)=async(dispatch)=>{
    try {
        const User = await axios(
            {
                method:"POST",
                url:"http://localhost:8080/auth/signin",
                data:{userData}
             });
           
           return dispatch({type:SIGNUP,payload:User.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}
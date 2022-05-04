import { SIGNIN,SIGNUP,VERIFY } from "./auth.type";

const INITIALSTATE={};

const UserReducer =(state=INITIALSTATE,action)=>{
    switch (action.type) {
        case SIGNUP:
           return {
               ...state
           }
          
        case SIGNIN:
            return{
                ...state
            }
           
    
        default:
            return{
                ...state
            }
           
    }
}

export default UserReducer;
import React,{ useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyDialog from './Dialogbox';

// action
import { signin } from '../Redux/Auth/auth.action';


// 


const NewLoginPage = (props) => {
   const [isOpenCreateAccount,setIsOpenCreateAccount]=useState(false);
  
   const [userData,setUserData]=useState({
     fullname:"",
     email:"",
     password:"",
     active:false,
    //  loading:false
   });
   const dispatch = useDispatch();

   const handleChange =(e)=> setUserData((prev)=>({...prev, [e.target.name]:e.target.value}))

   const openCreateAccount=()=> setIsOpenCreateAccount(true);

   const logged =(props)=>{
      location.href=`http://localhost:3000/${props.token}`
   } 
   
   const submit=()=>{
      setUserData((prev)=>({...prev,active:true}))
      dispatch(signin(userData));
      logged
   }
   
    return <>
    
    <MyDialog isOpen={isOpenCreateAccount} setIsOpen={setIsOpenCreateAccount} />


<div className='w-full'>
    <div className='w-1/3 bg-emerald-300  h-screen relative  '/>
        <div className='absolute w-4/5 shadow-2xl inset-28 flex  rounded-md'> 
         {/*left part  */}
        <div className=' relative h-full w-2/5'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmUilN05uYqug2OAAjkeCrdlN3O-tOJRkrw&usqp=CAU"
                alt="logo"
                className="w-28 bg-emerald-300 rounded-full absolute top-8 left-8"/>
                <p className='absolute top-28 left-8'>The first company to make your meetings <br/>wonderful!</p>
        </div>
      {/* Right part */}
        <div className='w-3/5 font-bold py-4'>
     <h1 className='text-gray-800 pb-4 text-4xl text-center '>Welcome</h1>
   <p className='text-gray-600 text-base pb-4 text-center '>To keep connected with us please login with your email and password</p>
   <div className=' w-3/4 ml-20 rounded-md h-3/5'>
      <div className='py-4 px-2'>
        <label htmlFor="email" > Email Address</label><br/>
          <input type="email"
           id='email'
           name='email'
           value={userData.email} 
           onChange={handleChange}
           placeholder='xyz@gmail.com'
           className='w-full outline-none px-1 py-1 border-2 rounded-sm'/>
      </div>
      <div className='py-4 px-2'>
        <label htmlFor="password" > Password</label><br/>
          <input type="password"
           id='password'
           name='password'
           value={userData.password}
           onChange={handleChange}
           placeholder='*****' 
           className='w-full outline-none px-1 py-1 border-2 rounded-sm'/>
      </div>
      <div className=''>
      <p className='text-sm text-gray-500 py-2 px-2 italic'>Don't have an account?</p>
    
     <input type="submit"
      value="Login now" 
      onClick={submit}
      className=' ml-4 p-1 rounded-md bg-emerald-500 text-white'/>

      <input type="submit"
      value="Create Account" 
      className=' ml-4 p-1 text-black rounded-md hover:bg-emerald-500 hover:text-white'
      onClick={openCreateAccount}/>
     </div>
   </div>
        </div>
        </div>
</div>

    
    </>
        
    
}

export default NewLoginPage

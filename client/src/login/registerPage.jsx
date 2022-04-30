import React from 'react';


const RegisterPage=()=> {
    return (
        <div className='container mx-auto px-2 grid grid-cols-2 gap-4'>
         <div className=''>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_9mtD5ui6Md3q_gH2IxE7hE2qqcHn9rdFA&usqp=CAU" 
            alt="logo"
            className="w-28"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7RFKNjIqvsqbOmUsejdCofOpeoP_-N2LOw&usqp=CAU"
            alt="loginImg"
            className="w-full"/>
         </div>
         <div className='pt-28 font-bold  w-full '>
           <h1 className='text-gray-500 pb-4 text-4xl text-center '>Welcome</h1>
           <p className='text-gray-600 text-base pb-4 text-center '>To keep connected with us please login with your email and password</p>
           <div className='border-2 border-sky-100 w-3/4 h-3/6 ml-20 rounded-md'>
           <div className='py-4 px-2'>
                <label htmlFor="name" > Full Name</label><br/>
                  <input type="text" id='name' placeholder='Gayathrivasu' className='w-full outline-none'/>
              </div>
              <div className='py-4 px-2'>
                <label htmlFor="email" > Email Address</label><br/>
                  <input type="email" id='email' placeholder='xyz@gmail.com' className='w-full outline-none'/>
              </div>
              <div className='py-4 px-2'>
                <label htmlFor="password" > Password</label><br/>
                  <input type="password" id='password' placeholder='*****' className='w-full outline-none'/>
              </div>
             <input type="submit"
              value="Login now" 
              className='border-2 ml-4 p-1 rounded-md bg-sky-500 text-white'/>
              <input type="submit"
              value="Create Account" 
              className='border-2 ml-4 p-1 text-black rounded-md hover:bg-sky-500 hover:text-white'/>
           </div>
           
         </div>
         </div>
    )
}

export default RegisterPage

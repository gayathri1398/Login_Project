import React from 'react'

const LoginPage=()=> {
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
           <div className='border-2 border-sky-100 w-3/4 h-2/5 ml-20 rounded-md'>
              <div className='py-4 px-2'>
                <label htmlFor="email" > Email Address</label><br/>
                  <input type="email" name='email' placeholder='xyz@gmail.com' className='w-full'/>
              </div>
              <div className='py-4 px-2'>
                <label htmlFor="password" > Password</label><br/>
                  <input type="password" name='password' placeholder='*****' className='w-full'/>
              </div>
           </div>
         </div>
         </div>
    )
}

export default LoginPage

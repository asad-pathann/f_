import React from 'react'
import { Link } from 'react-router-dom'
import LoginFrom from '../Commpent/auth/LoginFrom'

const Login = () => {
  return (
    < >
 <div className="min-h-screen flex  justify-center items-center  bg-[#F2F4F7]">

    <div className="xl:w-[50%] lg:w-[65%]  md:w-[70%]   grid   grid-cols-1 lg:grid-cols-2  gap-5  h-full  w-[90%] p-3 mx-auto ">
 
    <div className='flex flex-col m-0  p-0  '>
    <img
              src="https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png"
              alt="logo"
              width={200}
            />
      <p className=' text-1xl md:text-2xl font-semibold text-gray-600 '>Facebook helps you connect and share with the people in your life.</p>
    </div>

  {/* right from data  */}
  <LoginFrom/>
 
    </div>
 </div>



    </ >
  )
}

export default Login

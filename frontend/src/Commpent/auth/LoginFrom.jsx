import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { IoEye } from "react-icons/io5";



const LoginFrom = () => {
     const [controll,setcontroll] = useState({
        email:"",
        password:""
     })

    //  state sction
     const [showEye,setshowEye] = useState(false)
      const [ShowPass,setShowPass] = useState(false)
    //  
     const handleControll = (e)=>{
        setcontroll({
            ...controll,
            [e.target.name] : e.target.value
        })
     }
      const {email,password} = controll

 
 useEffect(()=>{
if(password.length > 0 ){
  setshowEye(true)

}
else{
setshowEye(false)
}

 },[password])
 
 
 
  return (
    < >
      
      <form className='p-6  rounded-md bg-white  '>
    <input

autoComplete='email'
    value={email}
    onChange={handleControll} type="text" placeholder='inter your name ' className='w-full border border-gray-400   rounded-md outline-0 p-3 ' name="" id="" />
    {/* <div className='relative'>

    <input
    value={password}     
    onChange={handleControll} type={ShowPass ? 'text' :  'password'} placeholder='inter your name ' className={`w-full border border-gray-400 my-4   rounded-md outline-0 p-3  `} name="password" id="" />

    
   {ShowPass ? (<FaEyeSlash className="absolute  top-1/2 right-3 -translate-y-1/2 text-gray-800" onClick={()=>setShowPass(true)} />) : (<FaRegEye className='absolute  top-1/2 right-3 -translate-y-1/2 text-gray-800' onClick={()=>setShowPass(false)}/>)}
 

    </div> */}
    <div className="relative">
          <input
            name="password"
            value={password}
            onChange={handleControll}
            type={ShowPass ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 my-2 outline-0 focus:border-blue-500 border border-gray-200 rounded-md"
          />

          {ShowPass ? (
            <FaEye
              onClick={() => setShowPass(false)}
              size={20}
              cursor={"pointer"}
              className={`absolute   top-1/2 right-3 -translate-y-1/2 text-gray-800`}
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPass(true)}
              size={20}
              cursor={"pointer"}
              className={`absolute  top-1/2 right-3 -translate-y-1/2 text-gray-800`}
            />
          )}

          {/* <FaEyeSlash onClick={()=>setShow(!show)} className={`absolute ${!show && 'hidden'} top-1/2 right-3 -translate-y-1/2 text-gray-800`} cursor={'pointer'} size={20} /> */}
        </div>


<button className='w-full  rounded-md bg-blue-700  text-white font-bold  p-3 '>Log in </button>
    
<Link className='my-2 block text-center  text-blue-500 mb-6 '><a href="">Forgetten password </a></Link>

<hr  className='h-[1px] bg-gray-400 border-0 '/>

<button className='bg-[#42B72A] p-3 font-semibold sm:w-full  cursor-pointer  rounded-md text-white md:w-1/2 md:whitespace-nowrap     my-5  mx-auto  block '>
<Link to={"/register"}>
  Create New Accout 
</Link>
</button>
  </form>
    </ >
  )
}

export default LoginFrom

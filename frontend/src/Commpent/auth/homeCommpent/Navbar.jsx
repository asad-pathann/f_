import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiHome6Fill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";

const Navbar = () => {
     const [focus,setfocus] = useState(false)
  return (
    < >
   <nav className='flex justify-between '>
    {/* start div logo */}
    

<div className={`flex gap-2 items-center  p-2 transition-all duration-150 ${focus && 'shadow-2xl shadow-gray-400 p-3 '}`}>
  {/* arrow */}
  <div className={`flex items-center justify-center h-[30px] w-[30px] bg-gray-300 rounded-full ${focus ? 'opacity-100 ' : "opacity-0"}`}>
    
  <HiOutlineArrowNarrowLeft />
  </div>
    <img
    className={`${focus ? 'hidden' : "block"}`}
     src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width={40} alt="" />
    <div
    onBlur={()=> setfocus(false)}
    onFocus={()=>setfocus(true)} className={`flex items-center gap-2 bg-[#F0F2F5]  rounded-full  ${ focus ? "p-3" : 'p-2 '}`}>
    <IoSearchSharp size={20 } className='ms-1 text-gray-600 '/>
        <input type="text" placeholder='Search Facebook' className='outline-0 ' />
    </div>
</div>



    {/* min div  */}
    <div className='flex items-center gap-6 '>
      <div className='flex w-[40px] relative group transition-all  hover:bg-gray-200 h-[40px] rounded-md items-center justify-center '>
      <RiHome6Fill size={30} />
      <div className='bg-black transition-all duration-150   group-hover:block   absolute top-full  hidden    rounded-md text-white'>
        <h3 className='text-sm p-1  font-semibold'>home</h3>
      </div>
      </div>
      <div className='flex w-[40px] hover:bg-gray-200 h-[40px] rounded-md items-center justify-center '>
      <FaUserGroup  size={30} />
      </div>
      <div className='flex w-[40px] hover:bg-gray-200 h-[40px] rounded-md items-center justify-center '>
      <MdOutlineOndemandVideo  size={30} />
      </div>
      <div className='flex w-[40px] hover:bg-gray-200 h-[40px] rounded-md items-center justify-center '>
      <BsShop size={30} />
      </div>
      

    </div>
    {/* last div */}
   </nav>
    </ >
  )
}

export default Navbar

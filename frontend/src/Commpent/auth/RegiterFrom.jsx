import React, { useEffect, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiFillQuestionCircle } from "react-icons/ai";

const RegiterFrom = () => {
     const [controll,setcontroll] = useState({
          email:"",
          password:"",
          date:"",
          month:"",
          year:"",
          f_name:"",
          l_name:"",
          gander:"",
          pronune:""

       })
        // distructuring 
       const {email,password,f_name,l_name,gander,date,month,year,pronune} = controll
  
      //  state sction
       const [showEye,setshowEye] = useState(false)
        const [ShowPass,setShowPass] = useState(false)
         const [opencustom,setopencustom] = useState(false)
      //  
       const handleControll = (e)=>{
          setcontroll({
              ...controll,
              [e.target.name] : e.target.value
          })
       }
      
        // month array 
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        // 
        // year ganriter 
         const yearGanariter = ()=>{
          let year = []
          for(let i=2025; i>1975; i --){
            year.push(i)
          }
          return year  
         }
   
         const redioRef = useRef()
   useEffect(()=>{
  if(password.length > 0 ){
    setshowEye(true)
  
  }
  else{
  setshowEye(false)
  }
  
   },[password])
   const [redio,setredio] = useState("")
  
   
  return (
    < >
    <form className='p-2 mt-0  rounded-md bg-white  '>
 

      <h4 className='text-2xl text-center font-bold my-1 '>Create a new account</h4>
      <p className='text-gray-500 text-center  mb-4  '>It's quick and easy.</p>
      <hr  className='h-[1px] bg-gray-300  border-0 mb-2 w-full '/>


<div className='grid grid-cols-2 gap-2'>
  <input
  value={f_name}
  name='f_name'
  onChange={handleControll} type="text"placeholder='f_name' className='p-2 rounded-md border outline-0 border-gray-400' />
  <input
  value={l_name}
  name='l_name'
  onChange={handleControll} type="text"placeholder=' l_name ' className='p-2 rounded-md border outline-0 border-gray-400' />
</div>

<div className='flex gap-1  items-center my-2  '>
  <p className="text-gray-400">Date of birth </p>
  <span><AiFillQuestionCircle className='text-gray-400' /></span>
</div>


{/* date and month year section  */}
<div className='grid grid-cols-3 gap-3 '>
<select
onChange={handleControll}
value={date}
 className='border border-gray-300 rounded-md p-2 ' name="date" id="date">
{Array.from({length:31}).map((_,index)=>{
  return  <option value={index + 1} key={index}>{index+1}</option>
})}
</select>
<select
onChange={handleControll} className='border border-gray-300 rounded-md p-2 ' name="month" id="date">
  value={month}
{months?.map((item,index)=>{
  return <option value={index } key={item}>{item}</option>
})}
</select>
<select
onChange={handleControll} className='border border-gray-300 rounded-md p-2 ' name="year" id="date">
  value={year}
 {yearGanariter()?.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
 })}
</select>
</div>

{/* gander section  */}


<div className='flex gap-1  items-center my-2  '>
  <p className="text-gray-400">Gander  </p>
  <span><AiFillQuestionCircle className='text-gray-400' /></span>
</div>

<div className='grid grid-cols-3 gap-3 '>
  <div className='flex justify-between items-center p-2 rounded-md border border-gray-400 '>
    <h4>Female</h4>
    <input
    value={'female'}
checked= {gander === 'female'}
    onChange={handleControll} 
    onClick={()=>setopencustom(false)} type="radio" name="gander" id="female " />
  </div>
  <div className='flex justify-between items-center p-2 rounded-md border border-gray-400 '>
    <h4>Male</h4>
    <input
    value={'male'} 
    checked = {gander == 'male'}
    onChange={handleControll} onClick={()=>setopencustom(false)} type="radio" name="gander" id={'male'} />
  </div>
  <div className='flex justify-between items-center p-2 rounded-md border border-gray-400 '>
    <h4>Custom</h4>
    <input
    value={'custom'}
    checked = {gander === 'custom'}
    onChange={handleControll} onClick={()=>setopencustom(true)} type="radio" name="gander" id=" custom" />
  </div>
</div>

<select
onChange={handleControll} value={pronune}    className={`p-2 rounded-md border my-3    border-gray-400 w-full  ${opencustom ? 'block' : 'hidden'}`} name="pronune" id="">
 
  
<option value="" disabled selected>Select Your pronune</option>

{[
  `She: "Wish her a happy birthday`,
  `He: "Wish him a happy birthday"`,
  `They: "Wish them a happy birthday"`,
].map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})}
</select>
{/* finshed custom section  */}



 
 {/* email input  */}
    <input

autoComplete='email'
    value={email}
    onChange={handleControll} type="text" placeholder='inter your name ' className='w-full border my-2  border-gray-400   rounded-md outline-0 p-2 ' name="email" id="" />
    {/* <div className='relative'>

    <input
    value={password}     
    onChange={handleControll} type={ShowPass ? 'text' :  'password'} placeholder='inter your name ' className={`w-full border border-gray-400 my-4   rounded-md outline-0 p-3  `} name="password" id="" />

    
   {ShowPass ? (<FaEyeSlash className="absolute  top-1/2 right-3 -translate-y-1/2 text-gray-800" onClick={()=>setShowPass(true)} />) : (<FaRegEye className='absolute  top-1/2 right-3 -translate-y-1/2 text-gray-800' onClick={()=>setShowPass(false)}/>)}
 

    </div> */}
    {/* password  section  */}
    <div className="relative">
          <input
            name="password"
            value={password}
            onChange={handleControll}
            type={ShowPass ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 my-2 outline-0 focus:border-blue-500 border border-gray-400 rounded-md"
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

<p className='text-gray-600 text-sm '>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
<p className='text-gray-600 text-sm my-2 '>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
 
 <button className='p-2 rounded-md text-white  font-bold bg-[#00A400] w-1/2 mx-auto block'>
  sign up 
 </button>
 <Link to={'/'}>
 <a className='text-blue-600 text-center block my-3 ' href="/">Already have an account?</a>
 </Link>

 
  </form>
      
    </ >
  )
}

export default RegiterFrom

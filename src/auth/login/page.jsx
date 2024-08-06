import React from 'react';
import FieildInput from '../../Componant/cunstoms/inputs/fieild';
import EmailIcon from '@mui/icons-material/Email';
import SoildBtn from '../../Componant/cunstoms/buttoms/soildBtn';
import OutlineBtn from '../../Componant/cunstoms/buttoms/outlineBtn';
import LockIcon from '@mui/icons-material/Lock';
import LoginApi from '../api/post';
import Cookie from "cookie-universal";
function Login(props) {
   const [data, setData] = React.useState({})
   const cookies = Cookie()
   async function handleLogin(e) {
    e.preventDefault();
  
    try {
      const response = await LoginApi(data);
      console.log(response);
  
      if (response.status === 200) {
        cookies.set("access", response.data?.token);
        window.location.pathname = "/dashboard";
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, display an error message to the user
    }
  }
    return (
        <div className='bg-white h-screen overflow-hidden'>
            <div className=' bg-white shadow-xl h-full rounded-xl flex md:flex-row flex-col justify-between'>
              <div className=' bg-white md:w-1/4 border-r border-secoundColor h-full justify-center items-center flex'>
               <div className='w-11/12'>
               <img src={require('../../media/images/logo.png')}/>
               <div className=' text-grayBlue text-center font-[600]'>Login into your account</div>
               <form onSubmit={handleLogin}>
               <div className='mt-7'>
               <FieildInput event={(e)=>setData({...data,email:e.target.value})} value={data.email} label="Email address" placeholder="Arabian Bureau@gmail.com" type="email" icon={<EmailIcon/>}/>
               </div>
               <div className='mt-7'>
               <FieildInput event={(e)=>setData({...data,password:e.target.value})} value={data.password} label="Password" placeholder="Enter your password" type="password" icon={<LockIcon/>}/>
               </div>
               <div className='text-end text-purple my-2 underline underline-offset-4'>Forgot password?</div>
              <div className='my-5'>
              <SoildBtn className="w-full shadow-[#FD7401]" text="Login"/>
              </div>
              <div className='my-7 flex items-center gap-4'>
                <div className='border-b h-0 border-whiteGray w-5/12 flex'></div>
                <div className='text-whiteGray text-sm'>OR</div>
                <div className='border-b h-0 border-whiteGray w-5/12 flex'></div>
              </div>
              <div>
              <OutlineBtn className="w-full shadow-lg " text="Signup now"/>
              </div>
               </form>
               </div>
              </div>
              <div className='w-3/4 relative hidden md:flex h-full bg-grayWhite  justify-center items-center'>
              <img className='w-[638px] h-[638px]' src={require('../../media/images/login/login.png')}/>
              <div className='w-[606px] blur-2xl opacity-55 -right-[22.25rem] h-[360px] rotate-90 rounded-full bg-secoundColor absolute'></div>
              </div>
            </div>
            
        </div>
    );
}

export default Login;
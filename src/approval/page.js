import React, { useEffect } from 'react';
import Line from '../Componant/cunstoms/line';
import FooterPage from '../Componant/footPage';
import { useDispatch, useSelector } from 'react-redux';
import ApprovallGetApi from '../dashboard/approvall/api/get';
import { GetCompanyApprovall } from '../tools/redux/Slices/Approvall';
import LoadingPage from '../Componant/loading';

function Approvel(props) {
  const dataTypeCompany = [
    
    require('../media/images/approval/adnoc.png'),
    require('../media/images/approval/2.png'),
    require('../media/images/approval/3.png'),
    require('../media/images/approval/4.png'),
    require('../media/images/approval/5.png'),
    require('../media/images/approval/6.png'),
    require('../media/images/approval/7.png'),
    require('../media/images/approval/8.png'),
    require('../media/images/approval/9.png')  ];

    const {approvall_info,loading} = useSelector((state)=>state.approvallPageSlice)
    const dispatch = useDispatch()
    useEffect(() => {
     try{
      ApprovallGetApi("en").then((res) => dispatch(GetCompanyApprovall(res.data)))   
    
    }
     catch(error) {
       
     }
    },[])   
    return (
        <>
        {loading && <LoadingPage/>}
        <div className=' flex justify-center  bg-thirdColor lg:h-[1280px]   rounded-[87px]'>
        <div className=' w-11/12 h-max bg-white rounded-[40px]'>
               <div className=' text-center font-bold text-[48px] text-Blueblack'>Approvals </div>
              <div className=' my-5'><Line/></div> 
             <div className=' flex justify-center '>
                <div className=' justify-center flex w-full'>
         <div className='w-11/12'>
         <div className="grid grid-cols-5 gap-4 justify-items-center lg:px-28 md:px-14 sm:px-12 px-1 mt-10">
                  {approvall_info.map((item, index) => (
                    <img key={index} src={item.image} alt={index} className="lg:w-28 sm:w-52 md:w-52 w-64" />
                  ))}
                </div>
            </div>
              </div>
              </div>
              <div className=' my-20'><Line/></div> 

            </div>
        </div>

        
        <div className='h-max'>

        <FooterPage classNameParent="h-[250px]  mt-40" 
        classNameChild="h-[323px] lg:w-[90%] rounded-[40px] lg:h-[972px]   lg:-top-[50rem] -top-[10rem] "  img={require("../media/images/approval/footer.jpeg")}/>

        </div>
   </> );
}

export default Approvel;
import React, { useEffect } from 'react';
import AlertContainer from '../Componant/alertContainer';
import FooterPage from '../Componant/footPage';
import { useDispatch, useSelector } from 'react-redux';
import TraningGetApi from '../dashboard/traning/api/get';
import { GetCompanyTraning } from '../tools/redux/Slices/TraningPage';
import LoadingPage from '../Componant/loading';

function Training(props) {
    const topics = [
        "General Health and Safety",
        "Lifting Equipment and Lifting Operations",
        "Working at Height",
        "Forklift and Lift Trucks",
        "Plant and Machinery Operations",
        "Access Equipment and MEWP’s",
        "Scaffolding Awareness & Competent Person"
      ];
  const {lang} = useSelector((state)=>state.Toggle)
  const {traning_info,loading} = useSelector((state)=>state.traningPage)
  const dispatch = useDispatch()
  useEffect(() => {
   try{
    TraningGetApi(lang).then((res) => dispatch(GetCompanyTraning(res.data)))   
  
  }
   catch(error) {
     
   }
  },[lang])
    return (
        <>
            <div className='flex relative justify-center bg-thirdColor rounded-[87px] pb-10  h-max'>
            {loading && <LoadingPage/>}

                <div className='w-11/12 justify-cente '>
                    <img className=' rounded-[40px]' src={traning_info.Traning_0?.image} alt="" />
                    <img className='w-[127px] h-[65px] top-10 absolute right-1/3' src={require("../media/images/training/dots.png")} alt="" />
                    <div className=' font-bold absolute top-10 right-32 md:text-2xl text-xl lg:text-[35px] text-Blueblack'>
                        <div>TRAINING</div>
                        <div>SERVICES</div>
                    </div>
                    <div className=' flex justify-center relative  '>
                        <div className=' w-[92%] lg:relative lg:-top-10'>
                            <AlertContainer className=" font-[400] bg-overColor bg-opacity-90 w-full h-max lg:py-10 py-2" 
                            doc={traning_info.Traning_0?.description} />
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col-reverse  justify-between relative'>


                        <div className='lg:w-7/12 text-[400] mt-5 lg:m-auto text-[20px] flex flex-col gap-14 '>
                            <div dir={lang ==="en" ?"ltr":"rtl"} className='lg:w-8/12' >{traning_info.Traning_1?.description?.slice(0,100)}</div>
                            <div dir={lang ==="en" ?"ltr":"rtl"} className='lg:w-8/12' >{traning_info.Traning_1?.description?.slice(100,300)}</div>
                        </div>
                        <div className='lg:w-5/12 mt-5 lg:mt-auto flex justify-center'>
                            <img className='w-[510px] h-[560px] z-10 lg:absolute top-0 rounded-[32px]' src={traning_info.Traning_0?.image} alt="" />
                        </div>

                    </div>

                </div>
            </div>


        
            <section >
         <div className=' flex justify-center my-5'>
            <div className='w-11/12'>
            <ul className=' list-disc list-inside text-[20px] font-bold'>

                {topics.map((topic) => (
                    <li>{topic}</li>
                ))}
            </ul>
            </div>
         </div>

            </section>

            <section>
                <div className=' flex justify-center h-max'>
                <FooterPage classNameParent="mt-80 w-full h-[300px] bg-thirdColor" classNameChild="w-[90%]  -top-40 h-[400px]" img={traning_info.Traning_2?.image}/>

                </div>
            </section>

        </>);
}

export default Training;
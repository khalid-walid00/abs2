import React, { useEffect } from "react";
import AlertContainer from "../Componant/alertContainer";
import FooterPage from "../Componant/footPage";
import { useDispatch, useSelector } from "react-redux";
import InspectionGetApi from "../dashboard/inspecion/api/get";
import { GetCompanyInspecion } from "../tools/redux/Slices/InspecionPage";
import LoadingPage from "../Componant/loading";

function Inspections(props) {
  const lists = [
    {
      id: 1,
      items:["Pressure Equipment’s",
    "Fall Protection",
    "Electrical Equipment’s & Power Actuated Tools (PAT) Testing",
    "Local Exhaust Ventilation (LEV) systems",
    "Cranes & Lifting Equipment and Accessories",]
    },
    {
        id: 1,
        items:["Elevators & Escalators",
    "Plant and Machinery",
    "Access Equipment and MEWPS",
    "Scaffolding & Working Platforms"]
      }
    ];
const {inspecion_info,loading} = useSelector((state)=>state.inspecionPage)
const {lang} = useSelector((state)=>state.Toggle)
const dispatch = useDispatch()
useEffect(() => {
  try{
     InspectionGetApi(lang).then((res) => dispatch(GetCompanyInspecion(res.data)))   
 
 }
  catch(error) {
    
  }
 },[lang])
 console.log(loading)
return (
    <>
      {loading && <LoadingPage/>}
      <section className=" overflow-x-hidden section1">

        <div className=" h-max bg-thirdColor flex justify-center rounded-[87px]">
          <div className=" w-11/12 ">
            <div className=" relative">
              <img
                className=""
                alt="icon"
                src={require("../media/images/inspections/header.png")}
              />
              <img
                className="w-[120px] h-[65px] absolute top-4 right-0"
                alt="icon"
                src={require("../media/images/dots.png")}
              />
              <div className=" lg:w-[35rem] w-[12rem] absolute top-8 left-10 text-white font-bold lg:text-[40px] md:text-2xl text-lg sm:text-xl xl:text-[40px] 2xl:text-[40px] ">
                INDUSTRY EXPERTS IN KEEPING OUR CUSTOMERS SAFE & COMPLIANT
              </div>
            </div>
            <div className=" flex justify-center relative -top-8">
              <div className="w-[96%]">
                <AlertContainer
                  className="bg-overColor w-full p-2"
                  doc={
                    <div className=" font-[400] text-[20px]">
                      <div className="text-center md:text-start">
                     {inspecion_info?.Inspecion_0?.description?.slice(0,200)}
                      </div>
                      <div className="text-center md:text-start">
                      {inspecion_info?.Inspecion_0?.description?.slice(200,1000)}
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2  */}

      <section>
        <div className=" flex justify-center mt-5">
          <div className=" lg:w-10/12 xl:w-10/12 2xl:w-10/12  md:w-11/12 w-full flex lg:flex-row flex-col  ">
            <div className="lg:w-8/12 flex flex-col items-center my-5">
              <div className="flex justify-around items-center gap-5 lg:h-[150px] w-full h-32 lg:w-[634px] xl:w-[746px] 2xl:w-[914px]  bg-secoundColor40 rounded-[20px]">
                <img
                  className="w-10 h-12"
                  alt="icon"
                  src={require("../media/images/book.png")}
                />
                <div className=" lg:text-[36px] md:text-xl text-lg  font-bold">
                  <div className=" lg:w-[27rem] w-full">
                    TESTING, INSPECTION, & CERTIFICATION SERVICES
                  </div>
                </div>
              </div>
              <div className=" text-[20px] w-11/12" dir={lang ==="en" ? "ltr" : "rtl"}>
              {inspecion_info?.Inspecion_1?.description?.slice(0,200)}
              </div>
            </div>

            <div className="flex justify-center">
              <img
                className="w-[450px] h-[452px] rounded-[32px]"
                alt="icon"
                src={inspecion_info?.Inspecion_1?.image}
              />
            </div>
          </div>
        </div>
      </section>


      {/* section 3 */}
      <section>
      <div className="flex justify-center mt-5">
      <div className="flex md:flex-row flex-col justify-center  items-center  lg:w-10/12 md:11/12  w-11/12">
{
  lists.map((list) => (
    <div className=" lg:w-6/12 w-10/12 ">
      <ul className=" list-disc list-inside">
      {list.items.map((item) => (
        <li className=" lg:text-[20px] text-lg font-bold">{item}</li>
      ))}
      </ul>
    </div>
  ))
}



      </div>
      </div>
      </section>


      <saection>
<FooterPage classNameParent="h-[250px] mt-40" classNameChild="h-[323px] w-full -top-24 "  img={inspecion_info?.Inspecion_2?.image}/>
      </saection>
    </>
  );
}

export default Inspections;

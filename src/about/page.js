import React, { useEffect } from "react";
import shipmentImg from "../media/images/about/head.png";
import Line from "../Componant/cunstoms/line";
import AlertContainer from "../Componant/alertContainer";
import { useDispatch, useSelector } from "react-redux";
import { GetCompanyAbout } from "../tools/redux/Slices/AboutPage";
import AboutGetApi from "../dashboard/about/api/get";
import LoadingPage from "../Componant/loading";

function About(props) {
  const dataOwner = [
    {
      img: require("../media/images/about/owner.png"),
      name: "Chairman’s Message",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt.",
    },
    {
      img: require("../media/images/about/manager.png"),
      name: "Managing Director’s Message",
      des: "Everyone want to live safely without any harm in their life by means of their or others actions. We ABoS in the field of inspection & training certification body for oil & gas as well as construction industries to provide better judgments’ to ensure the safety.The core team of ABoS has essential knowledge in the field of inspection for lifting equipments as per the local & international standards. Since we had the professional team which is having hands on experience & knowledge in the field of lifting equipment inspection services.We have the confident that our team is equipped with such capabilities and serve the nation (UAE) to ensure zero harm to the environment & people of the nation",
    },
  ];

  const aboutList = [
    {
      title:
        "In consideration of Confidential Information being made available to the Arabian Bureau of Services by our clients and/or its agents, Arabian Bureau of Services agrees and undertakes that it shall:",
      list: [
        "Only use the Confidential Information in relation to work pertaining to the Services.",
        "Not without the client’s prior specific written approval, divulge, disclose or reveal the Confidential Information to any third party.",
        "Treat the Confidential Information as strictly confidential and with no less than the same care as the Client uses to protect its own Confidential Information.",
        "Not make copies in any form of any documents containing the Confidential Information, unless essential to the performance of the Services.",
        "Shall not advertise or publicly announce, communicate or circulate the existence of any agreement or the fact that we are providing services to any client, without the prior written consent of the client.",
        "ABOS shall inform the client in advance of any information ABOS intends to place it in the public domain. Except for information that the client makes publicly available or when agreed between ABOS and the clients.",
        "When the inspection body is required by law or authorized by contractual commitments to release confidential information, the client or individual concerned shall, unless prohibited by law, be notified of the information provided.",
        "Information about the client obtained from sources other than the client (e.g., complainant, regulators) shall be treated as confidential.",
      ],
       img: require("../media/images/about/loader.png"),
    },
  ];
  const {about_info,loading} = useSelector((state)=>state.aboutPage)
  const {lang} = useSelector((state)=>state.Toggle)
  const [refresh, setRefresh] = React.useState(false);
  const [element, setElement] = React.useState({
    id:""
  });
  const dispatch = useDispatch()
  useEffect(() => {
   try{
    AboutGetApi(lang).then((res) => dispatch(GetCompanyAbout(res.data)))   
  
  }
   catch(error) {
     
   }
  },[lang])
  console.log("lang",lang)
  
  return (
    <>
      {loading && <LoadingPage/>}
      <section>
        <div className="h-max flex justify-center rounded-[87px] bg-thirdColor">
          <div className="w-11/12">
            <div className="lg:flex lg:flex-row-reverse flex-col  firstabout">
              <div className="lg:w-6/12 pl-3 pt-1 relative">
                <img
                  src={about_info.About_0?.image}
                  alt="Shipment"
                  className="w-full border-4xl"
                />
                <ul className="list-disc grid grid-cols-6 absolute top-0 lg:-right-9 -right-0 w-40 text-white text-xl">
                  {[...Array(6)].map((_, colIdx) => (
                    <div key={colIdx}>
                      {[...Array(4)].map((_, liIdx) => (
                        <li key={liIdx}></li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="lg:flex md:flex sm:flex flex-col md:flex-row sm:flex-row textfirstabout md:w-12/12 lg:w-6/12">
                <div className="lg:w-4/12 flex justify-center md:mx-2 items-center">
                  <div
                    className="rounded-3xl lg:h-52  md:h-52 sm:h-52 h-36 lg:w-36 sm:w-36 w-full my-2 md:w-36 flex flex-col justify-center"
                    style={{ backgroundColor: "#11b4ea9d" }}
                  >
                    <div className="flex justify-center">
                      <img
                        alt="book"
                        src={require("../media/images/book.png")}
                        className="w-10 text-Blueblack"
                      />
                    </div>
                    <i className="fa-solid fa-book-bookmark text-5xl text-center"></i>
                    <ul className="text-center text-2xl color-blue-1000 font-bold">
                      <li id="t1-p1-about text-Blueblack">Company</li>
                      <li id="t2-p1-about text-Blueblack">Profile</li>
                    </ul>
                  </div>
                </div>
                <div
                  id="p1-about"
                  className="lg:w-8/12 mt-3 text-lg p-2 relative"
               
                  dir={lang ==="en" ? "ltr" : "rtl"}>
                 {about_info?.About_0?.description?.slice(0, 200)}
                  <br />
                  {about_info?.About_0?.description?.slice(201, 400)}

                  <br />
                  {about_info?.About_0?.description?.slice(401, 600)}

                  <ul className="list-disc grid grid-cols-6 absolute top-0 right-0 w-40 text-white text-xl">
                    {[...Array(6)].map((_, colIdx) => (
                      <div key={colIdx}>
                        {[...Array(4)].map((_, liIdx) => (
                          <li key={liIdx}></li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-5">
              <Line />
            </div>
{/*  */}
        
            <> <div  className="flex lg:flex-col flex-row justify-center">
                <div className=" flex flex-col xs:flex-col sm:flex-col  lg:flex-row xl:flex-row 2xl:flex-row lg:w-10/12 
                xs:items-center items-center sm:items-center lg:items-start  xl:items-start 2xl:items-start 
                    justify-between md:gap-10">
                  <img
                    className="w-[262px] h-[360px]"
                    src={require("../media/images/about/owner.png")}
                    alt="icon"
                  />
                  <div className="flex gap-3 w-/12">
                    <img
                      className="w-12 mt-2 h-14"
                      src={require("../media/images/book.png")}
                      alt="icon"
                    />
                    <div className=" text-[30px]">
                      <div className="break-before-always w-40">
                      Chairman’s Message
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-5/12 flex justify-center mt-2">
                    <div className="w-10/12">
                      <p className=" text-center md:text-start lg:text-start xl:text-start 2xl:text-start"  dir={lang ==="en" ? "ltr" : "rtl"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            <div className="my-5">
              <Line />
            </div>
              </> 
  
              <> <div  className="flex lg:flex-col flex-row justify-center">
                <div className=" flex flex-col xs:flex-col sm:flex-col  lg:flex-row xl:flex-row 2xl:flex-row lg:w-10/12 
                xs:items-center items-center sm:items-center lg:items-start  xl:items-start 2xl:items-start 
                    justify-between md:gap-10">
                  <img
                    className="w-[262px] h-[360px]"
                    src={about_info?.About_1?.image}
                    alt="icon"
                  />
                  <div className="flex gap-3 w-/12">
                    <img
                      className="w-12 mt-2 h-14"
                      src={require("../media/images/book.png")}
                      alt="icon"
                    />
                    <div className=" text-[30px]">
                      <div className="break-before-always w-40">
                      {about_info?.About_1?.role}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-5/12 flex justify-center mt-2">
                    <div className="w-10/12">
                      <p className=" text-center md:text-start lg:text-start xl:text-start 2xl:text-start"  dir={lang ==="en" ? "ltr" : "rtl"}>{about_info?.About_1?.description}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            <div className="my-5">
              <Line />
            </div>
              </> 

{/*  */}









          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center mt-10">
          <div className="lg:w-10/12 md:w-11/12 xs:w-full  flex justify-center">
            <AlertContainer
            holder="Arabian Bureau of Services"
              className="bg-transparent min-h-52 w-full"
              img={require("../media/images/about/section2alert.png")}
              title1={"Company"}
              title2={"Profile"}
              doc={
                about_info?.About_3?.description
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
        <div className="my-5 w-10/12">
          <Line />
        </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center rounded-t-[87px] py-5 bg-thirdColor">
          <div className="w-11/12">
            <div className="flex flex-col">
              <div className="flex gap-5 mb-10">
                <img
                  className="w-10 h-12"
                  src={require("../media/images/about/lock.png")}
                  alt="Lock icon"
                />
                <div className="text-Blueblack text-[32px] font-bold">
                  Obligations of Confidentiality
                </div>
              </div>

              {aboutList.map((item, index) => (
                <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col-reverse gap-10" key={index} >
                <div key={index} className="lg:w-1/2 md:w-2/3">
                  <div className="text-[17px] font-bold">
                    {item.title}
                  </div>
                  <ul className="list-disc list-inside">
                    {item.list.map((li, liIdx) => (
                      <li className=" font-[500] text-[17px]" key={liIdx}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div className=" flex justify-center  w-1/2">
                    <img className="w-full rounded-2xl" src={about_info?.About_3?.image} alt="icon" />
                </div>
             </div> ))}


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

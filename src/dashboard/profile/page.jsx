import React, { useEffect } from "react";
import ImgAndTitle from "../componants/edits/ImgAndTitle/index";
import Article from "../componants/edits/Articl/index";
import SaveButton from "../componants/edits/Btn";
import ProfileGetApi from "./api/get";
import { useDispatch, useSelector } from "react-redux";
import { GetCompanyProfile, GetWorkExperience, UpdateCompanyProfile } from "../../tools/redux/Slices/ProfilePage";
import Work_experience from "./work_experience";
import UpdateModul from "./moduls/update/index"
import ProfilePostApi from "./api/post";
import ToastSuccess from "../../tools/toast/ToastSuccess";
import ToastError from "../../tools/toast/ToastError";
import ImgAndTitleProfile from "./components/ImgAndTitle";
import ArticlProfile from "./components/articls";
import LoadingPage from "../../Componant/loading";
export default function ProfileDash(props) {
  const {lang} = useSelector((state)=>state.Toggle)
  const {company_info,loading} = useSelector((state)=>state.profilePage)
  const { UpdateModel } = useSelector((state) => state.Toggle);
  const [refresh, setRefresh] = React.useState(false);
  const [element, setElement] = React.useState({
    id:""
  });
  const dispatch = useDispatch()
  useEffect(() => {
   try{
    ProfileGetApi(lang).then((res) => {
      dispatch(GetCompanyProfile(res.data));
    });    
  
  }
   catch(error) {
     
   }
  },[lang,refresh])

function DataTochange(image, dataName) {
  try {
    setElement({ ...element.company_info, [dataName]: image });
  } catch (error) {
    console.error(error);
  }
}
function UpdateProflie(){

  try {
    ProfilePostApi(element).then((res)=>{
        if(res.status === 200 ){
          ToastSuccess("تم التعديل بنجاح")
        }else{
          ToastError("لم يتم التعديل بنجاح")}
    })


  }catch(err){

  }
} 
  console.log("UpdateModel",UpdateModel)
  console.log("company_info",company_info)
  return (

    <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] md:p-8 p-4" dir={lang =="en"?"ltr":"rtl"}>
    {loading && <LoadingPage/>}
      <div className="flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8">
        <div className="md:w-7/12">
         
         <div>
         <ImgAndTitleProfile 
         dataName="main_image" 
           img={element?.main_image  ? URL.createObjectURL(element?.main_image) 
           : company_info?.main_image} id={company_info?.id} 
           DataTochange={DataTochange}
           setElement={setElement}
           element={element}
           className="h-96"
           />
         </div>
         <div className="text-center w-full my-5">
      <SaveButton onClick={UpdateProflie}/>
      </div>
        </div>
        <div className="md:w-5/12 w-full">
        <ArticlProfile
         dataName='company_profile'
      text={company_info?.company_profile}
      name={company_info?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />
      
        </div>
      </div>

      {/* 2 */}
      <div className="my-14">
      <ArticlProfile
         dataName='business_interest'
      text={company_info?.business_interest}
      name={company_info?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />
      </div>

      {/* 3 */}
      <div className="flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8">
        <div className="md:w-3/12 w-9/12">
       <div> <ImgAndTitleProfile 
         dataName="organization_image" 
           img={element?.organization_image  ? URL.createObjectURL(element?.organization_image) 
           : company_info?.organization_image} id={company_info?.id} 
           DataTochange={DataTochange}
           setElement={setElement}
           element={element}
           className="h-40"
           />        </div>
              <div className="text-center w-full mt-5">
              <SaveButton onClick={UpdateProflie}/>
              </div>
           </div>
        <div className="md:w-9/12  w-full">
       <ArticlProfile
         dataName='organization_desc'
      text={company_info?.organization_desc}
      name={company_info?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />

        </div>
      </div>
       <Work_experience setRefresh={setRefresh}  refresh={refresh} company_info={company_info}/>
   
      <UpdateModul element={element} setElement={setElement}/>
    </div>

  );
}

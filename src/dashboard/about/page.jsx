import React, { useEffect } from "react";
import ImgAndTitle from "../componants/edits/ImgAndTitle/index";
import Article from "../componants/edits/Articl/index";
import SaveButton from "../componants/edits/Btn";
import { useDispatch, useSelector } from "react-redux";
import AboutGetApi from "./api/get";
import { GetCompanyAbout } from "../../tools/redux/Slices/AboutPage";
import UpdateModul from "./moduls/update";
import ImgAndTitleAbout from "./components/ImgAndTitle";
import ArticlAbout from "./components/articls";
import AboutPutApi from "./api/update";
import ToastSuccess from "../../tools/toast/ToastSuccess";
import ToastError from "../../tools/toast/ToastError";
import LoadingPage from "../../Componant/loading";
function AboutDash(props) {


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
  },[lang,refresh])

  function DataTochange(image, id) {
    try {
      setElement({ ...element, image: image, id: id });
    } catch (error) {
      console.error(error);
    }
  }
  function UpdateAbout(){

    try {
      AboutPutApi(element).then((res)=>{
          if(res.status === 200 ){
            ToastSuccess("تم التعديل بنجاح")
            setRefresh(!refresh);  
          }else{
            ToastError("لم يتم التعديل بنجاح")}
      })
  
  
    }catch(err){
  
    }
  }
  return (
    <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] md:p-8 p-4" dir={lang ==="en"?"ltr":"rtl"}>
    {loading && <LoadingPage/>}
    {/* section 1 */}

      <div className=" flex md:flex-row flex-col-reverse  justify-between gap-12">
        <div className=" md:w-1/3">
        <ArticlAbout
      text={about_info?.About_0?.description}
      name={about_info?.About_0?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />

        </div>
        <div className=" md:w-2/3">
          <div><ImgAndTitleAbout 
           img={(element.image && element?.id == about_info?.About_0?.id  ) ? URL.createObjectURL(element.image) 
           : about_info?.About_0?.image} 
           id={about_info?.About_0?.id}
           DataTochange={DataTochange}
           setElement={setElement}
           element={element}
           className="h-96"
           />
           <div className="text-center w-full my-5">
      <SaveButton onClick={UpdateAbout}/>
      </div>
           </div>
        </div>
        
      </div>
     
             

      {/* section 2 */}

      <div className=" flex sm:flex-row flex-col items-center sm:items-start justify-between my-10">
        <div className=" sm:w-1/5 w-4/5">
       <div> <ImgAndTitleAbout 
           img={(element.image && element?.id == about_info?.About_1?.id  ) ? URL.createObjectURL(element.image) 
           : about_info?.About_1?.image} id={about_info?.About_1?.id} 
           id={about_info?.About_1?.id}
           DataTochange={DataTochange}
           setElement={setElement}
           element={element}
           className=" bg-cover h-48"
         />
<div className="text-center w-full my-5">
      <SaveButton onClick={UpdateAbout}/>
      </div>
          </div>
        </div>
        <div className="sm:w-3/5 w-full">
        <ArticlAbout
      text={about_info?.About_1?.description}
      name={about_info?.About_1?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />
        </div>
      </div>


      {/* section 3  */}

      <div>
      <ArticlAbout
      text={about_info?.About_2?.description}
      name={about_info?.About_2?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />

      </div>

    {/* section 4 */}
    <div className=" flex md:flex-row flex-col-reverse items-center md:items-start justify-between">

     <div  className=" md:w-7/12 w-full">
     {/* {[...Array(8)].map((_, index) => (<ul>
        <li> <Article title={<div className=" text-[12px]">Impartiality {index + 1}</div>} rows={1}/></li>
     </ul>))} */}
     </div>
     <div className=" md:w-5/12 w-8/12">
    <div> <ImgAndTitleAbout 
           img={(element.image && element?.id == about_info?.About_4?.id  ) ? URL.createObjectURL(element.image) 
           : about_info?.About_4?.image} id={about_info?.About_4?.id} 
           id={about_info?.About_4?.id}
           DataTochange={DataTochange}
           setElement={setElement}
           element={element}
    
         />
          <div className="text-center w-full my-5">
      <SaveButton onClick={UpdateAbout}/>
      </div>
     </div></div>
    </div>

{/* section 5 */}
<div className="text-center w-full my-5">
      <SaveButton/>
      </div>
      <UpdateModul element={element} setElement={setElement} />
    </div>
  );
}

export default AboutDash;

import React from 'react';
import ImgAndTitleProfile from '../components/ImgAndTitle';
import ArticlProfile from '../components/articls';
import UpdateModal from './moduls/update';
import workExperiencePostApi from './api/post';
import ToastSuccess from '../../../tools/toast/ToastSuccess';
import ToastError from '../../../tools/toast/ToastError';
import SaveButton from '../../componants/edits/Btn';
import { useSelector } from 'react-redux';

function Work_experience({company_info,setRefresh,refresh}) {
  const { UpdateModel } = useSelector((state) => state.Toggle);
    
    const [element, setElement] = React.useState({
        id:""
    });

    function DataTochange(image, id) {
        try {
          setElement({ ...element, image: image, id: id });
        } catch (error) {
          console.error(error);
        }
      }
      function UpdateWorkExperience(){

        try {
            workExperiencePostApi(element).then((res)=>{
              if(res.status === 200 ){
                ToastSuccess("تم التعديل بنجاح")
                setRefresh(!refresh);
              }else{
                ToastError("لم يتم التعديل بنجاح")}
          })
      
      
        }catch(err){
      
        }
      }
      console.log("khalid element",element)
    return (
       <div> <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4 my-20">
        {company_info?.work_experience?.map((item, index) => (
          <div key={index}>
           <div>
           {/* element?.organization_image  ? URL.createObjectURL(element?.organization_image) 
           : item?.image} id={item.id */}
        <div>   <ImgAndTitleProfile
           img={ item.id === element?.id ? URL.createObjectURL(element?.image) :  item?.image} 
           DataTochange={DataTochange}
           id={item.id}
           setElement={setElement}
           element={element}
           className="h-40"
           />              </div>
              <div className="text-center w-full my-5">
      <SaveButton onClick={UpdateWorkExperience}/>
      </div>
            </div>
            <ArticlProfile
            
         dataName='organization_desc'
      text={company_info?.work_experience?.description}
      name={item.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />
          </div>
        ))}
      </div>
     { UpdateModel.value ==="" &&<UpdateModal element={element} setElement={setElement}/>}
      </div>
    );
}

export default Work_experience;
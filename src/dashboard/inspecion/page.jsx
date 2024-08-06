import React, { useEffect } from 'react';
import ImgAndTitle from '../componants/edits/ImgAndTitle';
import SaveButton from '../componants/edits/Btn';
import Article from "../componants/edits/Articl/index";
import { useDispatch, useSelector } from 'react-redux';
import { GetCompanyInspecion, UpdateCompanyInspecion } from '../../tools/redux/Slices/InspecionPage';
import InspectionGetApi from './api/get';
import ImgAndTitleInspecion from './components/ImgAndTitle';
import ArticlInspecion from './components/articls';
import UpdateModul from './moduls/update';
import ToastSuccess from '../../tools/toast/ToastSuccess';
import ToastError from '../../tools/toast/ToastError';
import InspectionUpdateApi from './api/update';
import LoadingPage from '../../Componant/loading';

function InspecionDash(props) {
    const {lang} = useSelector((state)=>state.Toggle)
    const [refresh, setRefresh] = React.useState(false);
    const {inspecion_info,loading } = useSelector((state)=>state.inspecionPage)
    const [element, setElement] = React.useState({
        id:""
      });
    const dispatch = useDispatch()
    useEffect(() => {
     try{
        InspectionGetApi(lang).then((res) => dispatch(GetCompanyInspecion(res.data)))   
    
    }
     catch(error) {
       
     }
    },[lang])
    function UpdateInspecion(){

        try {
            InspectionUpdateApi(element).then((res)=>{
              if(res.status === 200 ){
                ToastSuccess("تم التعديل بنجاح")
                setRefresh(!refresh);  
              }else{
                ToastError("لم يتم التعديل بنجاح")}
          })
      
      
        }catch(err){
      
        }
      }
    function DataTochange(image, id) {
        try {
          setElement({ ...element, image: image, id: id });
        } catch (error) {
          console.error(error);
        }
      }
      console.log("inspecion_info",inspecion_info)
    return (
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 p-4">
           
           {loading && <LoadingPage/>}

            <div className='my-14'>
                <div>
                    <div> <ImgAndTitleInspecion
                img={(element.image && element?.id == inspecion_info?.Inspecion_0?.id  )? URL.createObjectURL(element.image) : inspecion_info?.Inspecion_0?.image}
                id={inspecion_info?.Inspecion_0?.id}
                DataTochange={DataTochange}
                setElement={setElement}
                element={element}
                className="h-96 bg-cover rounded-2xl"
                />
              
                </div>       <div className="text-center w-full">
                <SaveButton onClick={UpdateInspecion} />
            </div></div>
                     <ArticlInspecion
      text={inspecion_info?.Inspecion_0?.description}
      name={inspecion_info?.Inspecion_0?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
        rows={8}
          />
            </div>


            <div className="flex flex-col sm:flex-row justify-between gap-8">
                   <div className='w-2/3'>  <ArticlInspecion
      text={inspecion_info?.Inspecion_1?.description}
      name={inspecion_info?.Inspecion_1?.id}
      DataTochange={DataTochange}
      setElement={setElement}
      element={element}
       rows={8}
          /></div>
               <div className='w-1/3'> 
               <div><ImgAndTitleInspecion
                img={(element.image && element?.id == inspecion_info?.Inspecion_1?.id  )? URL.createObjectURL(element.image) : inspecion_info?.Inspecion_1?.image}
                id={inspecion_info?.Inspecion_1?.id}
                DataTochange={DataTochange}
                setElement={setElement}
                element={element}
                className="h-96 bg-cover rounded-2xl"
                />
                  <div className="text-center w-full">
                <SaveButton onClick={UpdateInspecion} />
            </div>
                </div>
              </div>
               
            </div>

            <div className='w-full h-max my-10'>
                <div>
                    <div><ImgAndTitleInspecion
                img={(element.image && element?.id == inspecion_info?.Inspecion_2?.id  )? URL.createObjectURL(element.image) : inspecion_info?.Inspecion_2?.image}
                id={inspecion_info?.Inspecion_2?.id}
                DataTochange={DataTochange}
                setElement={setElement}
                element={element}
                className="h-96 bg-cover rounded-2xl"
                />
                </div>
                  <div className="text-center w-full">
                <SaveButton onClick={UpdateInspecion} />
            </div>
            </div>
                </div>

       
            <UpdateModul element={element} setElement={setElement} />
            </div>
    );
}

export default InspecionDash;
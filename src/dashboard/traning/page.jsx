import React, { useEffect } from 'react';
import ImgAndTitle from "../componants/edits/ImgAndTitle/index";
import Article from "../componants/edits/Articl/index";
import SaveButton from "../componants/edits/Btn";
import { useDispatch, useSelector } from 'react-redux';
import TraningGetApi from './api/get';
import { GetCompanyTraning } from '../../tools/redux/Slices/TraningPage';
import TraningPutApi from './api/update';
import ToastSuccess from '../../tools/toast/ToastSuccess';
import ToastError from '../../tools/toast/ToastError';
import ImgAndTitleInspecion from './components/ImgAndTitle';
import UpdateModul from './moduls/update';
import ArticlTraning from './components/articls';
import LoadingPage from '../../Componant/loading';
function TrainingDash(props) {

  const {traning_info,loading} = useSelector((state)=>state.traningPage)
  const {lang} = useSelector((state)=>state.Toggle)
  const [refresh, setRefresh] = React.useState(false);
  const [element, setElement] = React.useState({
    id:""
  });
  const dispatch = useDispatch()
  useEffect(() => {
   try{
    TraningGetApi(lang).then((res) => dispatch(GetCompanyTraning(res.data)))   
  
  }
   catch(error) {
     
   }
  },[lang])

  function DataTochange(image, id) {
    try {
      setElement({ ...element, image: image, id: id });
    } catch (error) {
      console.error(error);
    }
  }
  function UpdateTraning(){

    try {
      TraningPutApi(element).then((res)=>{
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
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 px-4">
          {loading && <LoadingPage/>}
          <div className="flex flex-col  sm:flex-row items-center  sm:items-start justify-between gap-8">
          <div className=" sm:w-7/12">
          
         <div> <ImgAndTitleInspecion
              img={(element.image && element?.id == traning_info?.Traning_0?.id  ) ? URL.createObjectURL(element.image) : traning_info?.Traning_0?.image}
              id={traning_info?.Traning_0?.id}
              DataTochange={DataTochange}
              setElement={setElement}
              element={element}
              className="h-64"
            />
          </div>
          <div className="text-center w-full my-5">
        <SaveButton onClick={UpdateTraning}/>
        </div>
          </div>
          <div className=" sm:w-5/12 w-full">
            <ArticlTraning
              title="Main title"
            name={traning_info?.Traning_0?.id}
              text={traning_info?.Traning_0?.description}
              editTitle={false}
              DataTochange={DataTochange}
              setElement={setElement}
              element={element}
            />
          </div>
        </div>
  
        {/* 2 */}
        <div className="my-14">
          <ArticlTraning
              rows={5}
            name={traning_info?.Traning_1?.id}
            title="Company profile"
            text={traning_info?.Traning_1?.description}
            DataTochange={DataTochange}
            setElement={setElement}
            element={element}
            />
        </div>
  
        {/* 3 */}
        <div className="flex flex-col-reverse  sm:flex-row items-center  sm:items-start justify-between gap-8">
          
          <div className=" sm:w-4/12 w-full flex flex-col gap-4">
            {/* <Article
              rows={5}
              title="Main title"
              text="ABoS is continually maintaining a highly qualified inspection and consultancy team, employing the latest technical expertise and paraphernalia, stressing utmost importance in safety, environment, quality, and timely completion task, and complying with all local & international regulations. ABoS is providing inspection services according to proven methods for inspection based on guidelines and Standard Operating Procedure. The Inspection and consultancy team is well organized by our Technical Manager & Training Manager and doing the task as per his authorization."
              editTitle={false}
            />
             {[...Array(7)].map((_, index) => (<ul>
        <li> <Article title={<div className=" text-[12px]">Impartiality {index + 1}</div>} rows={1}/></li>
     </ul>))} */}
          </div>
          <div className="w-8/12">
          <div className=''>
          <div><ImgAndTitleInspecion
              img={(element.image && element?.id == traning_info?.Traning_2?.id  ) ? URL.createObjectURL(element.image) : traning_info?.Traning_2?.image}
              id={traning_info?.Traning_2?.id}
              DataTochange={DataTochange}
              setElement={setElement}
              element={element}
              className="h-64"
            />          </div>    <div className="text-center w-full my-5">
            <SaveButton onClick={UpdateTraning}/>
            </div>
          </div></div>
        </div>
        
        {/* 4 */}
        <div className=" justify-center flex my-5">
            <div className='sm:w-8/12 '>
           <div> <ImgAndTitleInspecion
              img={(element.image && element?.id == traning_info?.Traning_2?.id  ) ? URL.createObjectURL(element.image) : traning_info?.Traning_2?.image}
              id={traning_info?.Traning_2?.id}
              DataTochange={DataTochange}
              setElement={setElement}
              element={element}
              className="h-64"
            />          </div>  
              <div className="text-center w-full my-5">
            <SaveButton onClick={UpdateTraning}/>
            </div>
          </div></div>
          <UpdateModul element={element} setElement={setElement} />
 
      </div>
    );
}

export default TrainingDash;
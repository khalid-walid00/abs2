import React, { useEffect } from 'react';
import SaveButton from '../componants/edits/Btn';
import Article from '../componants/edits/Articl/index';
import { useDispatch, useSelector } from 'react-redux';
import GallaryGetApi from './api/get';
import { GetCompanyGallary, UpdateCompanyGallary } from '../../tools/redux/Slices/GallaryPage';
import ImgAndTitle from '../componants/edits/ImgAndTitle';
import approvallPostApi from './api/post';
import ToastSuccess from '../../tools/toast/ToastSuccess';
import ImgAndTitleGallary from './components/ImgAndTitle';
import ArticlGallary from './components/articls';
import GalleryPutApi from './api/update';
import ToastError from '../../tools/toast/ToastError';  
import UpdateModul from './components/moduls/update';
import LoadingPage from '../../Componant/loading';
function GalleryDash(props) {
  const { lang } = useSelector((state) => state.Toggle);
  const { gallary_info,loading } = useSelector((state) => state.gallaryPage);
  const [element, setElement] = React.useState({
    id: "",
  });
  const [refresh, setRefresh] = React.useState(false);
  const dispatch = useDispatch();
    
  useEffect(() => {
    try {
      GallaryGetApi(lang).then((res) => dispatch(GetCompanyGallary(res.data)));
    } catch (error) {
      console.error(error);
    }
  }, [refresh, dispatch, lang]);

  function DataTochange(image, id) {
    try {
      setElement({ ...element, image: image, id: id });
    } catch (error) {
      console.error(error);
    }
  }

  function UpdateGallery(){

    try {
      GalleryPutApi(element).then((res)=>{
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
    <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 p-4">
          {loading && <LoadingPage/>}
          <div className="flex flex-col sm:flex-row justify-between gap-8">
        <div className='w-5/12'>
          <div className='w-full'>
          <ImgAndTitleGallary 
           img={(element.image && element?.id == gallary_info?.Gallery_0?.id  ) ? URL.createObjectURL(element.image) 
           : gallary_info?.Gallery_0?.image} id={gallary_info?.Gallery_0?.id} 
           id={gallary_info?.Gallery_0?.id}
           DataTochange={DataTochange}
           setElement={setElement}
           element={element}
           className="h-[484px]"
           />
          </div>
          <div className="text-center w-full">
            <SaveButton  onClick={UpdateGallery} />
          </div>
          <ArticlGallary 
            text={gallary_info?.Gallery_0?.title}
            name={gallary_info?.Gallery_0?.id}
            DataTochange={DataTochange}
            setElement={setElement}
            element={element}
          />
     
        </div>
        <div className='w-5/12 max-h-min'>
          <div className='w-full'>
            <ImgAndTitleGallary
              DataTochange={DataTochange}
              id={gallary_info?.Gallery_1?.id}
              setElement={setElement}
              className="h-[484px]"
              img={element?.id == gallary_info?.Gallery_1?.id  ? (element.image&& URL.createObjectURL(element?.image))  : gallary_info?.Gallery_1?.image}
            />
          </div>
          <div className="text-center w-full">
            <SaveButton />
          </div>
          <ArticlGallary 
            text={gallary_info?.Gallery_1?.title}
            name={gallary_info?.Gallery_1?.id}
            DataTochange={DataTochange}
            setElement={setElement}
            element={element}
          />
         
        </div>
      </div>

      <div className='my-14'>
        <div>
          <ImgAndTitleGallary
            setElement={setElement}
              DataTochange={DataTochange}
              className="h-[484px]"
          id={gallary_info?.Gallery_2?.id}

            img={element?.id == gallary_info?.Gallery_2?.id   ? (element.image&& URL.createObjectURL(element?.image)) : gallary_info?.Gallery_2?.image}
          />
        </div> 
         <div className="text-center w-full">
          <SaveButton />
        </div>
        <ArticlGallary 
          text={gallary_info?.Gallery_2?.title}
          name={gallary_info?.Gallery_2?.id}
          DataTochange={DataTochange}
          setElement={setElement}
          element={element}
        />
      
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-8">
        <div className='w-5/12'>
          <div>
            <ImgAndTitleGallary
              setElement={setElement}
              DataTochange={DataTochange}
          id={gallary_info?.Gallery_3?.id}
          className="h-[484px]"
          img={ element?.id == gallary_info?.Gallery_3?.id    ? (element.image&& URL.createObjectURL(element?.image)) : gallary_info?.Gallery_3?.image}
              />
          </div>
          <div className="text-center w-full">
          <SaveButton />
        </div>
          <ArticlGallary 
            text={gallary_info?.Gallery_3?.title}
            name={gallary_info?.Gallery_3?.id}
            DataTochange={DataTochange}
            setElement={setElement}
            element={element}
          />
     
        </div>
        <div className='w-5/12'>
          <div>
            <ImgAndTitleGallary
              DataTochange={DataTochange}
              setElement={setElement}
          id={gallary_info?.Gallery_4?.id}
          className="h-[484px]"
          img={element.id == gallary_info?.Gallery_4?.id  ? (element.image&& URL.createObjectURL(element?.image))  : gallary_info?.Gallery_4?.image}
            />
          </div>
          <div className="text-center w-full">
            <SaveButton />
          </div>
          <ArticlGallary 
            text={gallary_info?.Gallery_4?.title}
            name={gallary_info?.Gallery_4?.id}
            DataTochange={DataTochange}
            setElement={setElement}
            element={element}
          />
       
        </div>
      </div>

      <UpdateModul element={element} setElement={setElement} />
    </div>
  );
}

export default GalleryDash;

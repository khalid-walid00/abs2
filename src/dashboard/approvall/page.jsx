import React, { useEffect } from 'react';
import ImgAndTitle from '../componants/edits/ImgAndTitle';
import Article from "../componants/edits/Articl/index";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveButton from '../componants/edits/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { GetCompanyApprovall, refreshCompanyApprovall, UpdateCompanyApprovall } from '../../tools/redux/Slices/Approvall';
import ApprovallGetApi from './api/get';
import ApprovallDeleteApi from './api/delete';
import approvallPostApi from './api/post';
import ToastSuccess from '../../tools/toast/ToastSuccess';
import ToastError from '../../tools/toast/ToastError';
import LoadingPage from '../../Componant/loading';
function ApprovalDash(props) {
    const {approvall_info,refresh,loading} = useSelector((state)=>state.approvallPageSlice)
    const dispatch = useDispatch()
    const ref = React.useRef()
    useEffect(() => {
     try{
        ApprovallGetApi().then((res) => dispatch(GetCompanyApprovall(res.data)))   
    
    }
     catch(error) {
       
     }
    },[refresh,dispatch])

   function DataToDelete(id) {
      try{
        ApprovallDeleteApi(id).then((res) => 
          {
            if(res.data.status === true){
              ToastSuccess("تم الحذف بنجاح")
              dispatch(refreshCompanyApprovall())
            }else{
              ToastError("لم يتم الحذف بنجاح")
            }
          })
            
    }catch(error){
        console.log(error)
    }
   }
   function AddData(data) {
    approvallPostApi(data).then((res) => 
        {
          if(res.data.status === true){
            ToastSuccess("تم الاضافة بنجاح")
            dispatch(refreshCompanyApprovall())
          }else{
            ToastError("لم يتم الاضافة بنجاح")
          }
        })
   }
    return (
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 p-4">
          {loading && <LoadingPage/>}
          {/* 1 */}
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 justify-items-center lg:px-28 md:px-14 sm:px-12 px-1 mt-10">
                {approvall_info?.map((item, index) => (
                    <ImgAndTitle deleteIcon={true}  dataName="main_image"  DataToDelete={() => DataToDelete(item.id)} 
                    img={ typeof item?.image == "object" ? URL.createObjectURL( item?.image) : item?.image}/>
                ))} <div className='flex justify-center items-center'>
                    <AddCircleIcon onClick={() => ref.current.click()} sx={{ color: "#0088b5", cursor: "pointer", fontSize: "50px" }} />
                    <input type="file" className='hidden' ref={ref} onChange={(e) => {
                      AddData(e.target.files[0])

                    }} />
                </div>
            </div>

            {/* 2 */}
            {/* <div className='my-5'>

                <div>
                     <ImgAndTitle img={require("../../media/images/about/head.png")} /></div>
                <div> 
                    <Article
                    text="Industry experts in Testing, Certification, Lifting Equipment & Training Services"
                    editTitle={false}/>
                </div>
            </div>
            */}

           {/* 3 */}

           {/* <div className="text-center w-full my-5">
      <SaveButton/>
      </div> */}


        </div>);
}

export default ApprovalDash;
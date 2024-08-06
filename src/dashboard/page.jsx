import Analysis from "./componants/analysis";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CardDataAnalysis from "./componants/analysis/componant/CardDataAnalysis";
import { useDispatch, useSelector } from "react-redux";
import { GetCompanyTraning } from "../tools/redux/Slices/TraningPage";
import TraningGetApi from "./traning/api/get";
import { useEffect } from "react";
import LoadingPage from "../Componant/loading";
function Dashboard(props) {

    const dataCardAnalysis=[
        {
            title:"Total User",
            count:"40,689",
            icon:require('../media/images/dashboard/home/users.png'),
            date:"Today",
            present:"8.5%"
        },
        {
            title:"Total Orders",
            count:"40,689",
            icon:require('../media/images/dashboard/home/order.png'),
            date:"Today",
            present:"8.5%"
        },
        {
            title:"Total Sales",
            count:"40,689",
            icon:require('../media/images/dashboard/home/sales.png'),
            date:"Today",
            present:"8.5%"
          },
          {
            title:"Total Pending",
            count:"40,689",
            icon:require('../media/images/dashboard/home/pending.png'),
            date:"Today",
            present:"8.5%"
          }
    ]
    const {traning_info,loading} = useSelector((state)=>state.traningPage)
    const {lang} = useSelector((state)=>state.Toggle)
    const dispatch = useDispatch()
    useEffect(() => {
     try{
      TraningGetApi(lang).then((res) => dispatch(GetCompanyTraning(res.data)))   
    
    }
     catch(error) {
       
     }
    },[lang])
    return (
   <div className="bg-white h-screen">
          {loading && <LoadingPage/>}

    <div className="flex justify-center">
      <div className=" lg:w-10/12 w-full">
    <div className=" grid md:grid-cols-4  gap-2 lg:gap-8">
   
   {dataCardAnalysis.map((item)=> <CardDataAnalysis title={item.title} count={item.count} icon={item.icon} 
   date={item.date} present={item.present}/>)} 

    
  
    </div>
    </div>
    </div>
    <div className="flex justify-center h-full mt-20">
      <div className=" lg:w-10/12 w-full h-3/6">
   <Analysis/>
   </div>
   </div>
   </div>
  );
}

export default Dashboard;

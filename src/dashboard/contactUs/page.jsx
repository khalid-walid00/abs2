import React, { useEffect } from 'react';
import SaveButton from '../componants/edits/Btn';
import ArticlContactUs from './componants/articls';
import { useDispatch, useSelector } from 'react-redux';
import ContactUsGetApi from './api/get';
import { GetContactUs } from '../../tools/redux/Slices/ContactUs';
import ContactUsUpdateApi from './api/post';
import ToastSuccess from '../../tools/toast/ToastSuccess';
import ToastError from '../../tools/toast/ToastError';
import LoadingPage from '../../Componant/loading';

function ContactUsDash(props) {
    const { lang } = useSelector((state) => state.Toggle);
    const { contactUs_info,loading } = useSelector((state) => state.contactUsPage);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            ContactUsGetApi(lang).then((res) => dispatch(GetContactUs(res.data)));
        } catch (error) {
            console.error(error);
        }
    }, [lang, dispatch]);

    const [dataToUpdate, setDataToUpdate] = React.useState({});

    function UpdateContactUs(id) {
        setDataToUpdate((prevData) => {
            const newData = { ...prevData, id };
            ContactUsUpdateApi(newData).then((res) => {
                if (res.data.status === true) {
                    ToastSuccess("تم الاضافة بنجاح");
                } else {
                    ToastError("لم يتم الاضافة بنجاح");
                }
            });
            return newData;
        });
    }

    return (
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 px-4">
          {loading && <LoadingPage/>}

            {contactUs_info?.map((item, index) => (
                <div key={item.id} className="lg:w-5/12 sm:w-11/12 mt-10">
                    <ul>
                        <li>
                            <ArticlContactUs
                                dataToUpdate={dataToUpdate}
                                setDataToUpdate={setDataToUpdate}
                                text={item.adderss}
                                title={<div className="text-[12px]">adderss {index + 1}</div>}
                                rows={1}
                            />
                        </li>
                        <li>
                            <ArticlContactUs
                                dataToUpdate={dataToUpdate}
                                setDataToUpdate={setDataToUpdate}
                                text={item.tel}
                                title={<div className="text-[12px]">tel {index + 1}</div>}
                                rows={1}
                            />
                        </li>
                        <li>
                            <ArticlContactUs
                                dataToUpdate={dataToUpdate}
                                setDataToUpdate={setDataToUpdate}
                                text={item.tel}
                                title={<div className="text-[12px]">tel {index + 1}</div>}
                                rows={1}
                            />
                        </li>
                        <li>
                            <ArticlContactUs
                                dataToUpdate={dataToUpdate}
                                setDataToUpdate={setDataToUpdate}
                                text={item.type}
                                title={<div className="text-[12px]">lat,lng {index + 1}</div>}
                                rows={1}
                            />
                        </li>
                    </ul>
                    <div className="text-center w-full">
                        <SaveButton onClick={() => UpdateContactUs(item.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactUsDash;

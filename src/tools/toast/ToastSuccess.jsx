import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../src/index.css';

function ToastSuccess(message) {
    return toast.success(message, {
        className: 'custom-toast-success',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export default ToastSuccess;

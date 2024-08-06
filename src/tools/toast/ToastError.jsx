import { toast } from 'react-toastify';

function ToastError(message) {
    return (
     
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
    );
}

export default ToastError;
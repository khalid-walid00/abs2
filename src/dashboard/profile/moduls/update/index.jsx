import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleModelUpdate } from '../../../../tools/redux/Slices/Toggle';
import ProfiloPutApi from '../../api/post';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '95%',
    sm: 400,
  },
  bgcolor: '#e5e7eb',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  zIndex: 1200, // Adjusted zIndex for better performance
};

export default function UpdateModal({ element, setElement, dataName }) {
  const [toggleLang, setToggleLang] = useState(true);
  const { UpdateModel } = useSelector((state) => state.Toggle);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (toggleLang) {

    setElement({ ...element, [UpdateModel?.name + '_en' ]: value});
  } else {

    setElement({ ...element,[UpdateModel?.name + '_ar' ]: value});
  }
  };

  const handleUpdate = async () => {
    try {
      console.log("element", element)
      const res = await ProfiloPutApi(element);
      setToggleLang(false);
   console.log(res)
      if (res.status === 200 && !toggleLang) {
        dispatch(ToggleModelUpdate(!UpdateModel.value));
        setToggleLang(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log("dataName", dataName)

  return (
    <Modal
      open={UpdateModel.value}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClose={() => {
        dispatch(ToggleModelUpdate(!UpdateModel.value));
        setToggleLang(true);
      }}
    >
      <Box sx={style}>
        {toggleLang ? (
          <>
            <Typography id="modal-title" variant="h6" component="h2">
              English
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <textarea
                onChange={handleInputChange}
                defaultValue={element?.company_info?.[dataName + '_en']}
                rows={8}
                className="w-full outline-none bg-gray-900 rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px]"
              ></textarea>
            </Typography>
            <Button
              onClick={handleUpdate}
              className="bg-blueGreen text-white rounded-lg w-full mt-3"
              variant="contained"
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Typography id="modal-title" variant="h6" component="h2">
              عربي
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <textarea
                onChange={handleInputChange}
                defaultValue={element?.company_info?.[dataName + '_ar']}
                rows={8}
                className="w-full outline-none bg-gray-900 rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px]"
              ></textarea>
            </Typography>
            <Button
              onClick={handleUpdate}
              disabled={toggleLang}
              className="bg-blueGreen text-white rounded-lg w-full mt-3"
              variant="contained"
            >
              Update
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
}

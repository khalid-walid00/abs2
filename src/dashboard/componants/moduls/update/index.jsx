import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { ToggleModelUpdate } from '../../../../tools/redux/Slices/Toggle';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: "95%", 
    sm: 400, 
  }, 
   bgcolor: '#e5e7eb',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  zIndex: 999999999999

};

export default function UpdateModul() {
  const { UpdateModel } = useSelector((state) => state.Toggle);
  const dataSlice = useSelector((state) => state[UpdateModel.sliceName]);
  const data = dataSlice ? dataSlice?.[UpdateModel.dataName]?.[UpdateModel.name] : null;
  const dispatch = useDispatch();

  console.log(data);

  function handelChange() {
    dispatch(ToggleModelUpdate(!UpdateModel.value));
  }


  return (
    <div>
      <Modal
        open={UpdateModel.value}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => dispatch(ToggleModelUpdate(!UpdateModel.value))}

      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            English
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <textarea onChange={handelChange} defaultValue={data}  rows={8} className='w-full  outline-none bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] '></textarea>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            عربي
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <textarea  rows={8}className='w-full  outline-none bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] '></textarea>
          </Typography>
          <Button  className='bg-blueGreen text-white rounded-lg w-full mt-3' variant="contained">Update</Button>
        </Box>
      </Modal>
    </div>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleModelUpdate } from '../../../../tools/redux/Slices/Toggle';
import InspectionUpdateApi from '../../api/update';

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

export default function UpdateModul({ element, setElement }) {
  const [toggleLang, setToggleLang] = React.useState(true);
  const { UpdateModel } = useSelector((state) => state.Toggle);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const value = e.target.value;
    if (toggleLang) {
      setElement({ ...element, description_en: value });
    } else {
      setElement({ ...element, description_ar: value });
    }
  }

  function UpdateUpute() {
    try {
      InspectionUpdateApi(element).then((res) => {
        setToggleLang(false);
        if (res.status === 200 && !toggleLang) {
          dispatch(ToggleModelUpdate(!UpdateModel.value));
          setToggleLang(true);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <Modal
        open={UpdateModel.value}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => {
          dispatch(ToggleModelUpdate(!UpdateModel.value));
          setToggleLang(true);
        }}
      >
        <Box sx={style}>
          {toggleLang ? (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                English
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <textarea 
                  onChange={handleInputChange} 
                  rows={8} 
                  className='w-full outline-none bg-gray-900 rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px]'
                  value={element.description_en || ''}
                ></textarea>
              </Typography>
              <Button onClick={UpdateUpute} className='bg-blueGreen text-white rounded-lg w-full mt-3' variant="contained">
                Next
              </Button>
            </>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                عربي
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <textarea  
                  onChange={handleInputChange} 
                  rows={8}
                  className='w-full outline-none bg-gray-900 rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px]'
                  value={element.description_ar || ''}
                ></textarea>
              </Typography>
              <Button onClick={UpdateUpute} disabled={toggleLang} className='bg-blueGreen text-white rounded-lg w-full mt-3' variant="contained">
                Update
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

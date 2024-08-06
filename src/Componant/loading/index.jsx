import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

export default function LoadingPage() {

  return (
  <Box sx={{ borderRadius: '10px' , display: 'flex',
  position: 'fixed', left:0,width: '100%', top:0,justifyContent: 'center', alignItems: 'center', 
  height: '100%' , zIndex: 999999999,backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <CircularProgress />
    </Box>
  );
}

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    contactUs_info: [],
    refresh:false,
    loading:true
  };
  
const contactUsPageSlice = createSlice({
  name: 'contactUsPage',
  initialState,
  reducers: {

    GetContactUs(state, action) {

      state.contactUs_info = action.payload;

      state.loading = false;

    },
    UpdateContactUs(state, action) {
     state.contactUs_info = {...state.contactUs_info, ...action.payload};

      state.loading = false;
      
    },
    refreshContactUs(state) {

      state.refresh = !state.refresh;

    }
  }
});

export const { GetContactUs,UpdateContactUs,refreshContactUs} = contactUsPageSlice.actions;
export const contactUsPageSliceReducer = contactUsPageSlice.reducer;

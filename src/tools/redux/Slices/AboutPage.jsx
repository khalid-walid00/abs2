
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
about_info: {},
loading:true
  };
  
const aboutPageSlice = createSlice({
  name: 'aboutPage',
  initialState,
  reducers: {

    GetCompanyAbout(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `About_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.about_info = transformedData;
      state.loading = false;
    },
    UpdateCompanyAbout(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `About_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.about_info = transformedData;
      state.loading = false;
    },
  }
});

export const { GetCompanyAbout,UpdateCompanyAbout} = aboutPageSlice.actions;
export const aboutPageSliceReducer = aboutPageSlice.reducer;

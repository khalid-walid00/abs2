
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    inspecion_info: {},
    loading:true
  };
  
const inspecionPageSlice = createSlice({
  name: 'inspecionPage',
  initialState,
  reducers: {

    GetCompanyInspecion(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Inspecion_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.inspecion_info = transformedData;
      state.loading = false;
    },
    UpdateCompanyInspecion(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Inspecion_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.inspecion_info = transformedData;
      state.loading = false;
    },
  }
});

export const { GetCompanyInspecion,UpdateCompanyInspecion} = inspecionPageSlice.actions;
export const inspecionPageSliceReducer = inspecionPageSlice.reducer;

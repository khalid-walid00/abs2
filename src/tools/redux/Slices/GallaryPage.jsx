import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  gallary_info: {},
  loading:true
};

const gallaryPageSlice = createSlice({
  name: 'gallaryPage',
  initialState,
  reducers: {
    GetCompanyGallary(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Gallery_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.gallary_info = transformedData;
      state.loading = false;
    },
    UpdateCompanyGallary(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Gallery_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.gallary_info = transformedData;
      state.loading = false;

    },
  }
});

export const { GetCompanyGallary, UpdateCompanyGallary } = gallaryPageSlice.actions;
export const gallaryPageSliceReducer = gallaryPageSlice.reducer;

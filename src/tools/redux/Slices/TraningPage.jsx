import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    traning_info: {},
    loading:true
};

const traningPageSlice = createSlice({
  name: 'traningPage',
  initialState,
  reducers: {
    GetCompanyTraning(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Traning_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.traning_info = transformedData;
      state.loading = false;
    },
    UpdateCompanyTraning(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Traning_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.traning_info = transformedData;
      state.loading = false;
    },
  }
});

export const { GetCompanyTraning, UpdateCompanyTraning } = traningPageSlice.actions;
export const traningPageSliceReducer = traningPageSlice.reducer;

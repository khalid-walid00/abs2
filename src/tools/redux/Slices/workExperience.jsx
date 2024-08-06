
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
experience_info: {}
  };
  
const experiencePageSlice = createSlice({
  name: 'ExperiencePage',
  initialState,
  reducers: {

    GetCompanyExperience(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Experience_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.experience_info = transformedData;
    },
    UpdateCompanyExperience(state, action) {
      const transformedData = action.payload.reduce((acc, item, index) => {
        const uniqueKey = `Experience_${index}`;
        acc[uniqueKey] = item;
        return acc;
      }, {});
      state.experience_info = transformedData;
    },
  }
});

export const { GetCompanyExperience,UpdateCompanyExperience} = experiencePageSlice.actions;
export const experiencePageSliceReducer = experiencePageSlice.reducer;

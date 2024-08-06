
import { configureStore, createSlice } from '@reduxjs/toolkit';
// const 
// company_info = {
//     id: "",
//     main_image: "",
//     organization_image: "",
//     created_at: "",
//     updated_at: "",
//     company_profile: "",
//     business_interest: "",
//     organization_desc: ""
// };
const initialState = {
    
company_info: {},
loading:true
  };
  
const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {

    GetCompanyProfile(state, action) {

      state.company_info = action.payload.company_info;
      state.loading = false;
    //   state.work_experience = action.payload.work_experience;

    },
    UpdateCompanyProfile(state, action) {
     state.company_info = {...state.company_info, ...action.payload};
     state.loading = false;
      
    },
     UpdateWorkExperience(state, action) {
      state.work_experience = {...state.work_experience, ...action.payload.work_experience};
      state.loading = false;
     }
  }
});

export const { GetCompanyProfile,UpdateCompanyProfile,GetWorkExperience,UpdateWorkExperience} = profilePageSlice.actions;
export const profilePageSliceReducer = profilePageSlice.reducer;


import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    approvall_info: [{

        id: "",
        image: "",
    }],
    refresh:false,
    loading:true
  };
  
const approvallPageSlice = createSlice({
  name: 'approvallPage',
  initialState,
  reducers: {

    GetCompanyApprovall(state, action) {

      state.approvall_info = action.payload;

      state.loading = false;

    },
    UpdateCompanyApprovall(state, action) {
     state.approvall_info = {...state.approvall_info, ...action.payload};

      state.loading = false;
      
    },
    refreshCompanyApprovall(state) {

      state.refresh = !state.refresh;
    }
  }
});

export const { GetCompanyApprovall,UpdateCompanyApprovall,refreshCompanyApprovall} = approvallPageSlice.actions;
export const approvallPageSliceReducer = approvallPageSlice.reducer;

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialLang = localStorage.getItem("i18nextLng") || "en";

const UpdateModel = {
  value: false,
  name: "",
  sliceName: "",
  dataName: ""
};

const initialState = {
  sideBar: false,
  UpdateModel: UpdateModel,
  lang: initialLang,
  loading:true
};

const toggleSlice = createSlice({
  name: 'Toggle',
  initialState,
  reducers: {
    SideBar(state, action) {
      state.sideBar = action.payload;
    },
    ToggleModelUpdate(state, action) {
      state.sideBar = false;

      state.UpdateModel = action.payload; // Use payload directly
    },
    ToggleLanguage(state, action) {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload); // Optionally save language to localStorage
    },

    setLoading(state, action) {
      state.loading = action.payload;
  }

  }
});

export const { SideBar, ToggleModelUpdate, ToggleLanguage,setLoading } = toggleSlice.actions;
export const toggleSliceReducer = toggleSlice.reducer;

// Example store setup (if needed elsewhere)
export const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer
  }
});

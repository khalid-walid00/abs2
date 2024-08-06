import { configureStore } from "@reduxjs/toolkit";
import { toggleSliceReducer } from "../Slices/Toggle";
import { profilePageSliceReducer } from "../Slices/ProfilePage";
import { aboutPageSliceReducer } from "../Slices/AboutPage";
import { inspecionPageSliceReducer } from "../Slices/InspecionPage";
import { approvallPageSliceReducer } from "../Slices/Approvall";
import { gallaryPageSliceReducer } from "../Slices/GallaryPage";
import { contactUsPageSliceReducer } from "../Slices/ContactUs";
import { traningPageSliceReducer } from "../Slices/TraningPage";
import { experiencePageSliceReducer } from "../Slices/workExperience";

export const store = configureStore({
  reducer: {
    Toggle: toggleSliceReducer,
    profilePage:profilePageSliceReducer,
    aboutPage:aboutPageSliceReducer,
    inspecionPage:inspecionPageSliceReducer,
    approvallPageSlice:approvallPageSliceReducer,
    gallaryPage:gallaryPageSliceReducer,
    contactUsPage:contactUsPageSliceReducer,
    traningPage:traningPageSliceReducer,
    ExperiencePage:experiencePageSliceReducer
  },
});

import { configureStore } from '@reduxjs/toolkit';
import CheckingClickedReducer from './NavCloseOpen'; 
import sidebarReducer from "./SideBarClicked"
import QuerReducer from  "./QuerySlice"

export const store = configureStore({
    reducer: {
        clickedCheck: CheckingClickedReducer,
        sidebar: sidebarReducer,
        query:QuerReducer
    }
});

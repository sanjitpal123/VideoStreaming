import { configureStore } from '@reduxjs/toolkit';
import CheckingClickedReducer from './NavCloseOpen'; 
import sidebarReducer from "./SideBarClicked"

export const store = configureStore({
    reducer: {
        clickedCheck: CheckingClickedReducer,
        sidebar: sidebarReducer
    }
});

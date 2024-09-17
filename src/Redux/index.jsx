
import { configureStore } from '@reduxjs/toolkit';
import CheckingClickedReducer from "./NavCloseOpen"; 

export const store = configureStore({
    reducer: {
        clickedCheck: CheckingClickedReducer 
    }
});

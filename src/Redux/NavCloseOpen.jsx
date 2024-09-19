import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clicked: false
};


const CheckingClicked = createSlice({
    name: 'NavClickedCheck',
    initialState,
    reducers: {
        Checking: (state) => {
            
            state.clicked = !state.clicked; 
            console.log("sta",state.clicked) 
        }
    }
});


export const { Checking } = CheckingClicked.actions;

export default CheckingClicked.reducer;

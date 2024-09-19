import { createSlice } from '@reduxjs/toolkit';

const initialState = { clicked: 'Home' };

const sidebarSlice = createSlice({
    name: 'sidebarClicked',
    initialState,
    reducers: {
        setSideBarClickedValue: (state, action) => {
            state.clicked = action.payload;
            console.log('clicked', state.clicked);
        }
    }
});

export const { setSideBarClickedValue } = sidebarSlice.actions;
export default sidebarSlice.reducer;

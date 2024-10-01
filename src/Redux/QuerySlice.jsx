import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Query:''
}
const QuerySlice=createSlice({
    name:'Query',
    initialState,
    reducers:{
        Queryfn:(state,action)=>{
            state.Query=action.payload;
            console.log(state.Query)
        }
    }
})
export const {Queryfn}=QuerySlice.actions;
export default QuerySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
    name:"brands",
    initialState:[],
    reducers:{
        setBrand:(state, action)=>{
            state = action.payload;
            return state
        }
    }

})
export const {setBrand} = brandSlice.actions;
export default brandSlice.reducer
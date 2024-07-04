import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        setProducts:(state, action)=>{
            state = action.payload;
            return state;
        }
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
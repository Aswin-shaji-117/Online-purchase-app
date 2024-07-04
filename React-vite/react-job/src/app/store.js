import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import brandReducer from "../features/brandSlice";

export const store = configureStore({
    reducer:{
        products:productReducer,
        brands:brandReducer
    }
})

import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./ProductosSlice.jsx";    




export default configureStore({
    reducer: {
        productos: useReducer,    
    }
});
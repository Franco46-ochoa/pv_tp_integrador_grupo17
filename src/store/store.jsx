import { configureStore } from "@reduxjs/toolkit";
import  ProductosReducer  from "./ProductosSlice.jsx";    
import UsersReducer from "./UsersSlice.jsx";



export default configureStore({
    reducer: {
        productos: ProductosReducer,
        users: UsersReducer    
    }
});
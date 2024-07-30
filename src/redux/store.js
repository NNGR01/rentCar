import { configureStore } from "@reduxjs/toolkit";
import viewReducer from './viewSlice';
import formReducer from './formSlice';

export const store = configureStore({
    reducer : {
        view: viewReducer,
        form: formReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modalSlice";
import dataSlice from "./features/dataSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice,
        data: dataSlice
    },
})
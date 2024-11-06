import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./feutures/user/userSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;

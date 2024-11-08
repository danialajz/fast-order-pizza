import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./feutures/user/UseSlice";

const store = configureStore({
  reducer: {
    user: useSlice,
  },
});

export default store;

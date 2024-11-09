import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./feutures/user/UseSlice";
import cartRedcuer from "./feutures/cart/CastSlice";

const store = configureStore({
  reducer: {
    user: useSlice,
    cart: cartRedcuer,
  },
});

export default store;

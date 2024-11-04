import React from "react";
import Header from "./Header";
import CartOverview from "../feutures/cart/CartOverview";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

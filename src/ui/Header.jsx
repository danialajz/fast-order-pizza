import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../feutures/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Order Pizzas.</Link>
      <SearchOrder />
      <p>Danial</p>
    </header>
  );
}

export default Header;

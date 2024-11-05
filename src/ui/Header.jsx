import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../feutures/order/SearchOrder";
import UserName from "../feutures/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/" className="tracking-widest">
        Fast Order Pizzas.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;

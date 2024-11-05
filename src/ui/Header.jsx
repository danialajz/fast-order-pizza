import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../feutures/order/SearchOrder";
import UserName from "../feutures/user/UserName";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Order Pizzas.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;

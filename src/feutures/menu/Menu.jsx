import React from "react";
import { getMenu } from "../../services/apiResturant";
import { useLoaderData } from "react-router";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <h1>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </h1>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;

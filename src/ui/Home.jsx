import React from "react";

function Home() {
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-4 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}
import CreateUser from "../feutures/user/CreateUser";

export default Home;

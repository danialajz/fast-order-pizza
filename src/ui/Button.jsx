import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const className =
    "inline-block text-sm rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4";
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 sm:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm px-4 py-2.5 sm:px-6 md:py-3.5 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-500 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

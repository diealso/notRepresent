import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex z-10">
      <nav className="flex flex-1 flex-row align-middle justify-center gap-4 py-2 backdrop-blur-sm bg-opacity-20 bg-slate-100">
        <NavLink href="/">
          <p>notRepresent</p>
        </NavLink>
        <NavLink href="/products">
          <p>Products</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

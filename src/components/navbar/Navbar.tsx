import React from "react";
import NavLink from "./NavLink";
import Logo from "../logo/Logo";
import { Search, ShoppingBag, UserRound, UserRoundCog } from "lucide-react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <header className="absolute top-0 flex z-10 w-full space justify-center items-center">
      <nav className="flex flex-1 flex-row align-center justify-start gap-4 py-2 pl-4 text-sm items-center">
        <NavLink href="/">
          <p>notRepresent</p>
        </NavLink>
        <NavLink href="/products">
          <p>Products</p>
        </NavLink>
      </nav>
      <Logo width={300} height={50} className="flex-1" />
      <nav className="flex flex-1 flex-row align-right justify-end items-center gap-4 py-2 pr-4 text-white">
        <NavLink href="/products">
          <Search />
        </NavLink>
        {userId ? (
          <UserButton />
        ) : (
          <NavLink href="/sign-in">
            <UserRound />
          </NavLink>
        )}

        <NavLink href="/products">
          <ShoppingBag />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

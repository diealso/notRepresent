"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

const NavLink = ({
  href,
  children,
  ...rest
}: {
  href: string;
  children: ReactElement;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={isActive ? "text-red-400" : "text-black"}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;

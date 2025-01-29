"use client";
import React from "react";
import { NavbarGeneral } from "./DesktopNav";

const navItems = [
  {
    name: "Home",
    link: "/user/home",
  },
  {
    name: "citas",
    link: "/user/citas",
  },
];

const NavbarUser = () => {
 
  return <NavbarGeneral navItems={navItems} />;
};

export default NavbarUser;

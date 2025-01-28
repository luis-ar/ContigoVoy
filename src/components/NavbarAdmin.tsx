"use client";
import React from "react";
import { NavbarGeneral } from "./DesktopNav";

const navItems = [
  {
    name: "Home",
    link: "/admin/home",
  },
  {
    name: "Create",
    link: "/admin/create",
  },
  {
    name: "Create Services",
    link: "/admin/createServices",
  },
];

const NavbarAdmin = () => {
  return <NavbarGeneral navItems={navItems} />;
};

export default NavbarAdmin;
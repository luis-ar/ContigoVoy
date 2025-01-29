"use client";
import React from "react";
import { NavbarGeneral } from "./DesktopNav";

const navItems = [
  {
    name: "Home",
    link: "/admin/home",
  },
  {
    name: "Create Users",
    link: "/admin/create",
  },
  {
    name: "Create Services",
    link: "/admin/createServices",
  },
  {
    name: "Create Specialties",
    link: "/admin/createSpecialties",
  },
];

const NavbarAdmin = () => {
  return <NavbarGeneral navItems={navItems} />;
};

export default NavbarAdmin;
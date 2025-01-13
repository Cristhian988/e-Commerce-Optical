// import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import NavIcons from "./NavIcons";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const navLinks = [
  {
    name: "Lentes de Sol",
    href: "/sunglasses",
  },
  {
    name: "Lentes Oftálmicos",
    href: "/oftaglasses",
  },
  {
    name: "Lentes de Contacto",
    href: "/contactlens",
  },
];

export default function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [activeLink, setActiveLink] = useState("");
  return (
    <div className="fixed w-full z-50 bg-white shadow-lg">
      <div className="container py-4">
        <div className="h-full flex justify-between items-center md:hidden">
          {/* MOBILE */}
          <Menu />
          <Link to="/" className="text-2xl tracking-wide font-bold">
            Optical Store
          </Link>
          <NavIcons getTotalCartItems={getTotalCartItems} />
        </div>
        {/* DESKTOP */}
        <div className="hidden md:flex justify-between items-center gap-8 h-full">
          {/* Logo */}
          <div className="flex items-center justify-between gap-12">
            <Link to="/" className="text-3xl tracking-wide font-semibold">
              Optical Store
            </Link>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center gap-10 font-medium text-lg">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className={`${
                  activeLink === link.name &&
                  "underline underline-offset-8 decoration-2 decoration-primary"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Icons */}
          <div className="flex items-center justify-between gap-8">
            <NavIcons getTotalCartItems={getTotalCartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

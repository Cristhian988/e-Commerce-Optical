// import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavIcons({ getTotalCartItems }) {
  return (
    <div className="flex items-center gap-4 lg:gap-6 relative">
      <Link to="/login">
        <FaRegCircleUser style={{ fontSize: 24 }} />
      </Link>

      <Link to="/cart" className="relative">
        <MdOutlineShoppingCart style={{ fontSize: 24 }} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-center">
          <span className="text-white">{getTotalCartItems()}</span>
        </div>
      </Link>
    </div>
  );
}

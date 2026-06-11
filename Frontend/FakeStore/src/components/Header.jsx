import React from "react";
import { Link } from "react-router-dom";
import { FaStoreAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-blue-400 flex justify-between items-center px-4 py-2">
        <FaStoreAlt className="text-white text-2xl" />
        <div className="flex justify-content items-center">
          <Link to="/" className="text-white mx-2 hover:underline">Home</Link>
          <Link to="/about" className="text-white mx-2 hover:underline">About</Link>
          <Link to="/contact" className="text-white mx-2 hover:underline">Contact</Link>
          <Link to="/products" className="text-white mx-2 hover:underline">Products</Link>
        </div>
      </div>
    </>
  );
};

export default Header;

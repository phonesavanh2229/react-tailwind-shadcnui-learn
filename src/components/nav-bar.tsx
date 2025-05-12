import React, { useState } from "react";
import { Link } from "react-router-dom"; // Optional: for routing
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* <Button variant="outline">Button</Button> */}

        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Mobiles</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="block hover:text-blue-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

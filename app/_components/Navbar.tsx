import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const session = false; // later replace with real auth

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600">
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
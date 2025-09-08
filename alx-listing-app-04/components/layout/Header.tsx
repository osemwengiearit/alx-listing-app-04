import React from "react";

// define header component

const Header= () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <span>StayFinder</span>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search for a property..."
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button className="text-blue-600 font-semibold hover:underline">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="w-full md:w-auto mt-4 md:mt-0 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
        {accommodationTypes.map((type) => (
          <span key={type} className="hover:text-blue-600 cursor-pointer">
            {type}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;

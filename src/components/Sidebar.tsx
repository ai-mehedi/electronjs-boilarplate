import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-4">My App</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block p-2 hover:bg-gray-700 rounded">About</Link>
          </li>
          <li>
            <Link to="/contact" className="block p-2 hover:bg-gray-700 rounded">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>

    
  );
}

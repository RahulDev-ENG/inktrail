import React from "react";
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent shadow-md z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white text-3xl font-bold">
          &lt;
          <span className="text-yellow-400">INK</span>
          trail
          <span className="text-yellow-400">/&gt;</span>
        </div>
        <div>
          <a
            href="https://github.com/RahulDev-ENG" onClick={() => alert("You will be redirected to GitHub")}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            <img
              src="/github.jpeg"
              alt="GitHub"
              className="w-5 h-5 mr-2 inline-block"
            />
            GitHub  
          </a>
        </div>
      </div>
    </nav>
  );
}

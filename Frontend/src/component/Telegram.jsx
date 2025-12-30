import React from "react";

function Telegram() {
  return (
    <div className="relative z-10 pt-20 max-w-7xl mx-auto px-6 py-10 text-white items-center justify-center flex flex-col">
      <h1 className="text-red-700 text-center md:text-3xl text-lg px-5 py-5 mt-5 ">
        Join our telegram channel for additional resources
      </h1>

      <button className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
        <span className="relative z-20">
          <a
            href="https://t.me/inktrail"
            target="_blank"
            rel="noopener noreferrer"
          >
            Touch-Me
          </a>
        </span>
        <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
      </button>
    </div>
  );
}

export default Telegram;

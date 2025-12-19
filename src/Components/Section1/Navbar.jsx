import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-18 py-8 w-full">
      <h4 className="bg-black text-white uppercase px-6 py-2 rounded-full text-xs md:text-base">
        Target Audiance
      </h4>
      <button className="bg-gray-50 px-6 py-2 uppercase rounded-full tracking-widest text-[10px] md:text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;

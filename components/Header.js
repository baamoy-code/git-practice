import React from "react";
import { MdLogin, MdFlight } from "react-icons/md";

const Header = () => {
  return (
    <div className=" flex items-center justify-between md:h-full">
      <div className="flex gap-6 items-center">
        <MdFlight className="text-2xl text-orange-600" />
        <h1 className="text-xs">Aphos CMS</h1>
      </div>
      <div className="flex items-center gap-4 justify-self-end">
        <MdLogin className="text-lg" />
        <div className="w-[40px] h-[40px] rounded-full bg-slate-800"></div>
      </div>
    </div>
  );
};

export default Header;

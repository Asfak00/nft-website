import React, { useState } from "react";

// Icons
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const MobileNav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="md:hidden flex items-center justify-between w-full h-[70px] shadow-sm py-3 px-8 mx-auto max-w-[1400px] sticky bg-white z-50 top-0 left-0">
        <h2 className=" text-primary uppercase font-bold text-[1.5rem]">
          NFters
        </h2>
        <AiOutlineMenu
          className="text-[1.5rem]"
          onClick={() => setActive(!active)}
        />
      </div>
      {/* sidebar */}
      <div
        className={`${
          active && "translate-x-[0%]"
        } fixed top-[13%] transition-all ease-in-out duration-300 left-0 h-[100vh] w-[100%] bg-white z-50 flex  gap-12 py-6 px-6 flex-col translate-x-[-300%]`}>
        {/* search bar */}
        <div className=" relative w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="py-2 pl-3 w-full pr-10 border outline-none rounded-full border-[#EFEFEF] focus:border-primary"
          />
          <CiSearch className=" text-[1.5rem] text-[#858585] absolute top-[20%] right-3" />
        </div>
        <ul className="footerUl flex gap-6 flex-col">
          <li>Marketplace</li>
          <li>Resource</li>
          <li>About</li>
        </ul>
        <div className="flex flex-col gap-5">
          {/* buttons */}
          <button className="py-2 px-6 border border-primary bg-primary text-white rounded-full ">
            Upload
          </button>
          <button className="py-2 px-6 border border-primary text-primary  rounded-full ">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

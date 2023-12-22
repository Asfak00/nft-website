import React from "react";

// icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex-col md:flex-row flex justify-between gap-8 md:gap-16 w-full max-w-[1400px] mx-auto px-6 py-12">
      <div className="flex gap-3 md:gap-4 flex-col w-full md:w-[30%]">
        <h2 className="font-[800] text-[24px] uppercase">NFters</h2>
        <p>
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className="flex items-center gap-5">
          <FaFacebookF className="w-[25px] h-[25px] cursor-pointer bg-[#3B5998] text-white p-1 rounded-full" />
          <FaTwitter className="w-[25px] h-[25px] cursor-pointer bg-[#55ACEE] text-white p-1 rounded-full" />
          <FaLinkedinIn className="w-[25px] h-[25px] cursor-pointer bg-[#007AB9] text-white p-1 rounded-full" />
        </div>
      </div>
      <div className="flex-col md:flex-row flex gap-6 justify-between w-full md:w-[70%]">
        <div>
          <h3 className="font-[600] text-[18px]">Market Place</h3>
          <ul className="footerUl text-[14px] flex gap-1 mt-4 md:mt-6 flex-col">
            <li>All NFTs</li>
            <li>New</li>
            <li>Art</li>
            <li>Sports</li>
            <li>Utility</li>
            <li>Music</li>
            <li>Domain</li>
            <li>Name</li>
          </ul>
        </div>
        <div>
          <h3 className="font-[600] text-[18px]">My Account</h3>
          <ul className="footerUl  text-[14px] flex gap-1 mt-4 md:mt-6 flex-col">
            <li>Profile</li>
            <li>Favorite</li>
            <li>My</li>
            <li>Collections</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="w-full md:w-[50%]">
          <h3 className="font-[600] text-[18px]">Stay in the loop</h3>
          <p className="text-[14px] mt-4 md:mt-6">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className=" relative w-full h-[60px]">
            <input
              type="search"
              name=""
              id=""
              placeholder="Enter your email address.."
              className="border border-[#E5E5E5] w-full focus:border-primary outline-none h-full mt-6 px-3 py-2 rounded-full"
            />
            <button className=" absolute top-[55%] right-2 py-2 px-6 border border-primary bg-primary text-white rounded-full ">
              Subscibe Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

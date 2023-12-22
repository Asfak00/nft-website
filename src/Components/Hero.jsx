import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between w-full max-w-[1400px] mx-auto py-8 px-8 ">
      <div className="w-full md:w-[50%] flex flex-col gap-8">
        <div>
          <h2 className="text-[45px] md:text-[55px] font-[700] leading-[50px] md:leading-[60px]">
            Discover, and collect Digital Art NFTs{" "}
          </h2>
          <p className="text-[0.9rem] mt-4 w-full md:w-[80%]">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
        </div>

        <button className="w-[50%] md:w-[25%] py-2 px-6 border border-primary bg-primary text-white rounded-full ">
          Explore Now
        </button>

        <div className="flex items-center gap-8">
          <div className="text-center">
            <h3 className=" font-bold text-[30px] md:text-[40px] leading-[25px]">
              98k+
            </h3>
            <p className="text-[0.9rem] mt-2">Artwork</p>
          </div>

          <div className="text-center">
            <h3 className=" font-bold text-[30px] md:text-[40px] leading-[25px]">
              12k+
            </h3>
            <p className="text-[0.9rem] mt-2">Auction</p>
          </div>

          <div className="text-center">
            <h3 className=" font-bold text-[30px] md:text-[40px] leading-[25px]">
              15k+
            </h3>
            <p className="text-[0.9rem] mt-2">Artist</p>
          </div>
        </div>
      </div>

      <div className=" relative w-full md:block hidden md:mt-0 mt-[6rem] md:w-[430px]">
        <img
          src="/hero3.png"
          alt="image"
          className=" absolute right-[0%] top-[17%] md:top-[13%] w-[200px] md:w-[300px]"
        />
        <img
          src="/hero2.png"
          alt="image"
          className=" absolute right-[5%] md:top-[7%] w-[250px] md:w-[350px]"
        />
        <img
          src="/hero1.png"
          alt="image"
          className=" absolute right-[10%] top-0 w-[300px] md:w-[400px]"
        />

        <img
          src="/Rectangle.png"
          alt="image"
          className=" absolute left-[10%] md:left-[3%] w-[75%] bottom-[200%]  md:bottom-[-25%]"
        />

        <div className=" absolute md:left-[3%] bottom-[-20%] md:bottom-[-22%] flex items-center justify-between w-[350px] px-4 text-white">
          <div>
            <p className="text-[0.9rem]">Current Bid</p>
            <div className="flex items-center gap-2">
              <img src="/Vector-white.png" alt="image" className=" w-[12px]" />
              <p className="text-[1.1rem]">0.25 ETH</p>
            </div>
          </div>

          <div>
            <p className="text-[0.9rem]">Ends in</p>
            <p className="text-[1.1rem]">12h 43m 42s</p>
          </div>
        </div>

        <div className=" absolute top-[5%] left-[10%] md:left-[3%] text-white">
          <h3 className="text-[500] text-[25px]">Abstr Gradient NFT</h3>
          <div className="flex items-center gap-3">
            <img src="/avatar1.png" alt="avatar" className="w-[30px] " />
            <p className="text-[0.9rem]">Arkhan17</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

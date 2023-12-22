import React from "react";

const Ads = () => {
  return (
    <div className="bg-[#D9E0EC33] w-full ">
      <div className="w-full max-w-[1400px] px-6 mx-auto py-8 md:py-16 my-12 md:my-[8rem] flex justify-between flex-col md:flex-row mt-[0rem]">
        <h2 className="text-[23px] md:text-[28px] font-[900] uppercase w-full md:w-[30%]">
          The amazing NFT art of the world here
        </h2>
        <div className="md:mt-0 mt-6 md:items-start items-center  justify-center flex-col md:flex-row flex md:justify-between w-full gap-6 md:gap-0 md:w-[60%]">
          <div className="flex items-start">
            <img src="/fast.png" alt="image" className="w-[60px]" />
            <div className="flex  flex-col gap-2 mt-1">
              <h5 className=" font-bold text-[18px] md:text-[20px]">
                Fast Transaction
              </h5>
              <p className="text-[0.8rem] md:text-[0.9rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="/growth.png" alt="image" className="w-[60px]" />
            <div className="flex  flex-col gap-2 mt-1">
              <h5 className=" font-bold text-[18px] md:text-[20px]">
                Growth Transaction
              </h5>
              <p className="text-[0.8rem] md:text-[0.9rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;

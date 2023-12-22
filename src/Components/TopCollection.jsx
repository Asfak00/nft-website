import React from "react";

const TopCollection = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:flex-row flex-col flex justify-between">
      {/* left side */}
      <div className=" flex-col md:flex-row flex gap-10">
        <div className=" w-full md:w-[400px]">
          <img src="/collection1.png" alt="image" className="w-[400px]" />
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex gap-2">
              <img
                src="/avatar1.png"
                alt="avatar"
                className="w-[40px] md:w-[50px]"
              />
              <div>
                <h4 className="text-[1rem] md:text-[1.1rem] font-bold">
                  The Futr Abstr
                </h4>
                <p className="text-[0.8rem] md:text-[0.9rem]">
                  10 in the stock
                </p>
              </div>
            </div>

            <div>
              <p className="md:text-[0.9rem] text-[0.8rem] ">Highest Bid</p>
              <div className="flex items-center gap-2">
                <img src="Vector.png" alt="vector" className="w-[10px]" />
                <h3 className=" font-bold text-[1rem] md:text-[1.1rem]">
                  0.25 ETH
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8 flex-col">
          <div className="flex gap-5 items-center">
            <img
              src="/collection2.png"
              alt="image"
              className="w-[150px] h-[150px]"
            />
            <div>
              <h3 className=" font-bold text-[1rem] md:text-[1.1rem]">
                The Futr Abstr
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <img src="/avatar1.png" alt="avatar" className="w-[30px]" />
                <button className="text-[12px] py-1 px-2 border border-[#00AC4F]  text-[#00AC4F] rounded flex items-center gap-1">
                  <img
                    src="/collectionVector.png"
                    alt="vector"
                    className="w-[10px]"
                  />
                  0.25 ETH
                </button>
                <p className="text-[#757575] text-[0.8rem] md:text-[0.9rem]">
                  1 of 8
                </p>
              </div>
              <button className="py-1 md:py-2 px-4 border border-primary text-white bg-primary  rounded-full mt-4 text-[0.8rem] md:text-[0.9rem]">
                Place a bid
              </button>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <img
              src="/collection3.png"
              alt="image"
              className="w-[150px] h-[150px]"
            />
            <div>
              <h3 className=" font-bold text-[1rem] md:text-[1.1rem]">
                The Futr Abstr
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <img src="/avatar1.png" alt="avatar" className="w-[30px]" />
                <button className="text-[12px] py-1 px-2 border border-[#00AC4F]  text-[#00AC4F] rounded flex items-center gap-1">
                  <img
                    src="/collectionVector.png"
                    alt="vector"
                    className="w-[10px]"
                  />
                  0.25 ETH
                </button>
                <p className="text-[#757575] text-[0.8rem] md:text-[0.9rem]">
                  1 of 8
                </p>
              </div>
              <button className="py-1 md:py-2 px-4 border border-primary text-primary   rounded-full mt-4 text-[0.8rem] md:text-[0.9rem]">
                Place a bid
              </button>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <img
              src="/collection4.png"
              alt="image"
              className="w-[150px] h-[150px]"
            />
            <div>
              <h3 className=" font-bold text-[1rem] md:text-[1.1rem]">
                The Futr Abstr
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <img src="/avatar1.png" alt="avatar" className="w-[30px]" />
                <button className="text-[12px] py-1 px-2 border border-[#00AC4F]  text-[#00AC4F] rounded flex items-center gap-1">
                  <img
                    src="/collectionVector.png"
                    alt="vector"
                    className="w-[10px]"
                  />
                  0.25 ETH
                </button>
                <p className="text-[#757575] text-[0.8rem] md:text-[0.9rem]">
                  1 of 8
                </p>
              </div>
              <button className="py-1 md:py-2 px-6 border border-primary text-primary  rounded-full mt-4 text-[0.8rem] md:text-[0.9rem]">
                Place a bid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col gap-8 md:mt-0 mt-10 md:border-l border-[#e5e5e5] pl-0 md:pl-12">
        <div>
          <h2 className="font-[800] text-[20px] md:text-[23px]">
            Top Collections over{" "}
          </h2>
          <p className="text-[15px] md:text-[18px] font-bold text-[#3D00B7]">
            Last 7 days
          </p>
        </div>

        <div className="flex items-center gap-5 border-b border-[#e5e5e5] pb-3">
          <h2 className="font-bold text-[20px] md:text-[24px]">1</h2>
          <div className=" relative ">
            <img src="/tCollection1.png" alt="image" className="w-[40px]" />
            <img
              src="/verify.png"
              alt="verify"
              className=" absolute top-[-2%] right-[-8%] w-[23px] text-white"
            />
          </div>

          <div>
            <h4 className="font-bold text-[16px]">CryptoFunks</h4>
            <div className="flex items-center gap-2">
              <img src="/rotateVector.png" alt="vector" className="w-[10px]" />
              <p className="text-[14px] text-[#636363]">19,769.39</p>
            </div>
          </div>

          <h4 className="font-bold text-[#14C8B0] text-[0.9rem] md:text-[1rem]">
            +26.52%
          </h4>
        </div>

        <div className="flex items-center gap-5 border-b border-[#e5e5e5] pb-3">
          <h2 className="font-bold text-[20px] md:text-[24px]">2</h2>
          <div className=" relative ">
            <img src="/tCollection2.png" alt="image" className="w-[40px]" />
          </div>

          <div>
            <h4 className="font-bold text-[16px]">Cryptix</h4>
            <div className="flex items-center gap-2">
              <img src="/rotateVector.png" alt="vector" className="w-[10px]" />
              <p className="text-[14px] text-[#636363]">2,769.39</p>
            </div>
          </div>

          <h4 className="font-bold text-[#FF002E] text-[0.9rem] md:text-[1rem]">
            +10.52%
          </h4>
        </div>

        <div className="flex items-center gap-5 border-b border-[#e5e5e5] pb-3">
          <h2 className="font-bold text-[20px] md:text-[24px]">3</h2>
          <div className=" relative ">
            <img src="/tCollection3.png" alt="image" className="w-[40px]" />
          </div>

          <div>
            <h4 className="font-bold text-[16px]">Frensware</h4>
            <div className="flex items-center gap-2">
              <img src="/rotateVector.png" alt="vector" className="w-[10px]" />
              <p className="text-[14px] text-[#636363]">9,232.39</p>
            </div>
          </div>

          <h4 className="font-bold text-[#14C8B0] text-[0.9rem] md:text-[1rem]">
            +2.52%
          </h4>
        </div>

        <div className="flex items-center gap-5 border-b border-[#e5e5e5] pb-3">
          <h2 className="font-bold text-[20px] md:text-[24px]">4</h2>
          <div className=" relative ">
            <img src="/tCollection4.png" alt="image" className="w-[40px]" />
            <img
              src="/verify.png"
              alt="verify"
              className=" absolute top-[-2%] right-[-8%] w-[23px] text-white"
            />
          </div>

          <div>
            <h4 className="font-bold text-[16px]">PunkArt</h4>
            <div className="flex items-center gap-2">
              <img src="/rotateVector.png" alt="vector" className="w-[10px]" />
              <p className="text-[14px] text-[#636363]">3,769.39</p>
            </div>
          </div>

          <h4 className="font-bold text-[#14C8B0] text-[0.9rem] md:text-[1rem]">
            +1.52%
          </h4>
        </div>

        <div className="flex items-center gap-5 border-b border-[#e5e5e5] pb-3">
          <h2 className="font-bold text-[20px] md:text-[24px]">5</h2>
          <div className=" relative ">
            <img src="/tCollection5.png" alt="image" className="w-[40px]" />
          </div>

          <div>
            <h4 className="font-bold text-[16px]">Art Crypto</h4>
            <div className="flex items-center gap-2">
              <img src="/rotateVector.png" alt="vector" className="w-[10px]" />
              <p className="text-[14px] text-[#636363]">10,769.39</p>
            </div>
          </div>

          <h4 className="font-bold text-[#FF002E] text-[0.9rem] md:text-[1rem]">
            +2.52%
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;

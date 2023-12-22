import React from "react";

const Member = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 flex justify-between gap-16 items-center md:flex-row flex-col">
      {/* left side */}
      <div className="w-full md:w-[60%] flex gap-8 md:gap-12">
        <div className="flex flex-col items-end gap-8 md:gap-12">
          <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] relative">
            <img src="/collection1.png" alt="image" className="w-full h-full" />
            <img
              src="/avatar1.png"
              alt="image"
              className=" absolute border-[3px] border-white rounded-full bottom-[-5%] right-[-5%] w-[40px] h-[40px]"
            />
          </div>

          <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] relative flex items-end justify-end">
            <img src="/collection3.png" alt="image" className="w-full h-full" />
            <img
              src="/avatar1.png"
              alt="image"
              className=" absolute border-[3px] border-white rounded-full bottom-[-5%] right-[-5%] w-[40px] h-[40px]"
            />
          </div>
        </div>

        <div className="w-[170px] md:w-[250px] h-[170px] md:h-[250px] relative mt-32">
          <img src="/collection2.png" alt="image" className="w-full h-full" />
          <img
            src="/avatar2.png"
            alt="image"
            className=" absolute bottom-[-5%] right-[-5%] w-[40px] h-[40px]"
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex gap-4 md:gap-6 flex-col">
        <h3 className="font-[800] text-[23px] md:text-[32px]">
          Create and sell your NFTs
        </h3>
        <p className="text-[0.8rem] md:text-[0.9rem] w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <button className="w-[40%] md:w-[25%] py-2 px-6 border border-primary bg-primary text-white rounded-full ">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Member;

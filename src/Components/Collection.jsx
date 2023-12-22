import React, { useState } from "react";

const Collection = () => {
  // image click to change image
  const [image1, setImage1] = useState("collection1.png");
  const [image2, setImage2] = useState("collection2.png");
  const [image3, setImage3] = useState("collection3.png");

  return (
    <div className="bg-[#D9E0EC33] w-full ">
      <div className="w-full max-w-[1400px] px-6 mx-auto py-16 my-12 md:my-[8rem] ">
        <h3 className="font-[800] text-[23px] md:text-[28px] mb-12">
          Collection Featured NFTs
        </h3>
        <div className="flex flex-wrap gap-16 md:gap-8">
          <div className="">
            <div className="flex gap-5">
              <img
                src={image1}
                alt="image"
                className=" w-[250px] md:w-[300px]"
              />
              <div className="flex gap-5 flex-col">
                <img
                  src="collection2.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage1("collection2.png")}
                />
                <img
                  src="collection3.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage1("collection3.png")}
                />
                <img
                  src="collection4.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage1("collection4.png")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[16px] md:text-[20px]">
                Amazing Collection
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="avatar1.png"
                    alt="avatar"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[0.9rem] md:text-[1rem]">by Arkhan</p>
                </div>
                <button className="py-1 px-4 border border-primary text-primary   rounded-full mt-4 text-[0.9rem]">
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-5">
              <img
                src={image2}
                alt="image"
                className="w-[250px] md:w-[300px]"
              />
              <div className="flex gap-5 flex-col">
                <img
                  src="collection2.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage2("collection2.png")}
                />
                <img
                  src="collection3.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage2("collection3.png")}
                />
                <img
                  src="collection4.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage2("collection4.png")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[16px] md:text-[20px]">
                Amazing Collection
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="avatar1.png"
                    alt="avatar"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[0.9rem] md:text-[1rem]">by Arkhan</p>
                </div>
                <button className="py-1 px-4 border border-primary text-primary   rounded-full mt-4 text-[0.9rem]">
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-5">
              <img
                src={image3}
                alt="image"
                className="w-[250px] md:w-[300px]"
              />
              <div className="flex gap-5 flex-col">
                <img
                  src="collection2.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage3("collection2.png")}
                />
                <img
                  src="collection3.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage3("collection3.png")}
                />
                <img
                  src="collection4.png"
                  alt="image"
                  className="w-[100px]"
                  onClick={() => setImage3("collection4.png")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[16px] md:text-[20px]">
                Amazing Collection
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="avatar1.png"
                    alt="avatar"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-[0.9rem] md:text-[1rem]">by Arkhan</p>
                </div>
                <button className="py-1 px-4 border border-primary text-primary   rounded-full mt-4 text-[0.9rem]">
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

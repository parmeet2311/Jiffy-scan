import React from "react";
import Image from "next/image";

const HackCard = ({ data }) => {
  if (!data) return;
  return (
    <div
      style={{ transition: "0.3s" }}
      className="font-inter flex flex-col md:flex-row justify-between border md:border-none items-center p-4 rounded-lg hover:bg-[#edf2f7ac] cursor-pointer"
    >
      <div className="flex items-center gap-x-5  md:items-center w-full md:w-auto mb-4 md:mb-0">
        <div className="rounded-md overflow-hidden">
          <Image
            alt="Logo"
            src={data.imgSrc}
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="sm:text-lg text-[#252424] font-semibold">
            {data?.title}{" "}
            <span className="text-sm font-light text-[#64758B]">by</span>{" "}
            <span className="text-[#94A3B8] tracking-wider">{data.by}</span>
          </h3>
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {data.money && (
              <>
                <p className="text-[16px] text-[#252424] gap-x-[3px] flex items-center font-semibold">
                  <div>
                    <Image
                      src={"/assets/card/Dollar.png"}
                      alt=""
                      width={13}
                      height={0}
                    />
                  </div>
                  {data?.money}{" "}
                  <span className="text-[#94A3B8] font-light">USDC</span>
                </p>
                <div className="w-px h-4 bg-gray-300 mx-2"></div>
              </>
            )}

            
            {data.rank && (
              <p className=" text-[#94A3B8] flex items-center gap-x-[3px] font-light">
                <div>
                  <Image
                    src={"/assets/card/trophy.png"}
                    alt=""
                    width={13}
                    height={0}
                  />
                </div>{" "}
                {data.rank} Place
              </p>
            )}

            {data.skills.includes("design") && (
              <span className="bg-[#EDE9FE] text-[#7C3AED] text-xs font-medium px-2 py-1 rounded-md">
                Design
              </span>
            )}
            {data.skills.includes("frontend") && (
              <span className="bg-[#EBF3FF] text-[#3EA7FF] text-xs font-medium px-2 py-1 rounded-md">
                Frontend
              </span>
            )}
            {data.skills.includes("backend") && (
              <span className="bg-[#FFF2EB] text-[#FF8370] text-xs font-medium px-2 py-1 rounded-md">
                Backend
              </span>
            )}

            {data.skills.includes("blockchain") && (
              <span className="bg-[#FFEBF9] text-[#FF3EC9] text-xs font-medium px-2 py-1 rounded-md">
                Blockchain
              </span>
            )}

            {data.skills.includes("content") && (
              <span className="bg-[#EFF6F8] text-[#5EA8C4] text-xs font-medium px-2 py-1 rounded-md">
                Content
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center gap-2 md:hidden">
        {data.money && (
          <>
            <p className="text-sm font-semibold">
              {data?.money}{" "}
              <span className="text-[#94A3B8] font-light">USDC</span>
            </p>
            <div className="w-px h-4 bg-gray-300 mx-2"></div>
          </>
        )}
        
        <p className="text-[#94A3B8] text-sm font-light">1st Place</p>
        <div className="w-full h-1"></div> {/* Line break */}
        {data.skills.includes("design") && (
          <span className="bg-[#EDE9FE] text-[#7C3AED] text-xs font-medium px-2 py-1 rounded-md">
            Design
          </span>
        )}
        {data.skills.includes("frontend") && (
          <span className="bg-[#EBF3FF] text-[#3EA7FF] text-xs font-medium px-2 py-1 rounded-md">
            Frontend
          </span>
        )}
        {data.skills.includes("backend") && (
          <span className="bg-[#FFF2EB] text-[#FF8370] text-xs font-medium px-2 py-1 rounded-md">
            Backend
          </span>
        )}
        {data.skills.includes("blockchain") && (
          <span className="bg-[#FFEBF9] text-[#FF3EC9] text-xs font-medium px-2 py-1 rounded-md">
            Blockchain
          </span>
        )}
        {data.skills.includes("content") && (
          <span className="bg-[#EFF6F8] text-[#5EA8C4] text-xs font-medium px-2 py-1 rounded-md">
            Content
          </span>
        )}
      </div>
      <div className="flex mt-[1rem] md:mt-0 justify-between md:flex-col items-start md:items-end gap-y-2 w-full md:w-auto">
        <p className="text-[#64758B] text-sm">{data.date}</p>
        <div className="flex items-center gap-x-2">
          <p className="text-[#252424] text-sm font-semibold whitespace-nowrap">
            {data.participants}{" "}
            <span className="text-[#64758B] font-normal">Participants</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackCard;

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const DonationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="mt-[56px] mx-auto bg-[#D9D9D9] w-[240px] px-[71px] py-[8px] rounded-[60px] text-center text-SUITE font-semibold text-[28px] leading-34.94 cursor-pointer"
      >
        기부하기
      </div>
      {isOpen &&
        createPortal(
          <div className="absolute z-10 flex flex-col top-0 left-0 w-full h-full">
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full h-full bg-[#000000B2]"
            />
            <div className="w-full bg-[#000000B2]">
              <div className="bg-[#fff] w-full flex flex-col justify-center items-center rounded-t-lg pt-[23px] pb-[38px] px-[40px]">
                <Image src="/assets/double-hearts.svg" alt="" width={66} height={66} className="mb-[21px]" />
                <div className="text-20 font-semibold leading-24.96 text-center whitespace-pre-wrap mb-[30px]">{`'하키 선수의 꿈을 키우는 12살 태우'에게\n 기부하시겠습니까?`}</div>
                <div className="text-base font-normal leading-19.97 text-center opacity-50 mb-[92px]">
                  기부는 하루 한 번만 가능해요.
                </div>
                <div className="w-full flex justify-between gap-[10px]">
                  <div className="w-full py-[20px] rounded-[10px] bg-[#D9D9D9] text-center cursor-pointer">
                    <span>아니요</span>
                  </div>
                  <div className="w-full py-[20px] rounded-[10px] bg-[#FF6A6A] text-center cursor-pointer">
                    <span>네</span>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          (document.getElementById('view') as HTMLElement) || document.body
        )}
    </>
  );
};

export default DonationButton;

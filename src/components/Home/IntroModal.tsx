'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const IntroModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className="absolute z-10 flex flex-col top-0 left-0 w-full h-full">
            <div onClick={onClose} className="w-full h-full bg-[#000000B2]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="bg-[#fff] rounded-[10px] mx-[30px] flex flex-col items-center justify-center overflow-hidden">
                <div
                  onClick={onClose}
                  className="ml-auto w-[24px] h-[24px] flex items-center justify-center mt-[25px] mr-[25px] cursor-pointer"
                >
                  <Image src="/assets/icons/vuesax/x.svg" alt="" width={15} height={15} />
                </div>
                <div className="text-[20px] font-regular leading-[24.96px] text-center">하루 한 번 간단하게</div>
                <div className="text-[26px] font-semibold leading-[32.45px] text-center">터치로 마음을 나눠요</div>

                <Image src="/assets/intro-image.png" alt="" width={198} height={428.74} className="w-full" />

                <div className="text-[16px] font-regular leading-[24.96px] text-center mb-[20px] whitespace-pre-wrap">
                  {`하루 한 번, `}
                  <span className="font-semibold">버튼을 터치하는 것만으로 기부가 가능</span>
                  {`해요.\n여러분은 기부 버튼만 눌러주세요.\n 기부 금액은 '기부클릭'가 낼게요.\n 쉬운 기부의 시작, 기부클릭`}
                </div>

                <div
                  onClick={onClose}
                  className="w-full pt-[19px] pb-[26px] text-[20px] font-regular leading-[24.96px] text-center text-white bg-[#000] cursor-pointer"
                >
                  기부클릭 시작하기
                </div>
              </div>
            </div>
          </div>,
          (document.getElementById('view') as HTMLElement) ?? document.body
        )}
    </>
  );
};

export default IntroModal;

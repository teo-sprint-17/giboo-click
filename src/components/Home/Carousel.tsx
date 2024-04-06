'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  const items = [
    {
      id: 1,
      title: '하키선수의 꿈을 키우는\n12살 태우',
      donationFoundation: '사단법인 기릭',
      remainDay: 3,
      onClick: () => {
        console.log('clicked1');
      },
    },
    {
      id: 2,
      title: '하키선수의 꿈을 키우는\n12살 태우2',
      donationFoundation: '사단법인 기릭',
      remainDay: 4,
      onClick: () => {
        console.log('clicked2');
      },
    },
    {
      id: 3,
      title: '하키선수의 꿈을 키우는\n12살 태우3',
      donationFoundation: '사단법인 기릭',
      remainDay: 4,
      onClick: () => {
        console.log('clicked3');
      },
    },
  ];

  return (
    <Swiper
      spaceBetween={-200}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {items.map(({ id, title, donationFoundation, remainDay, onClick }) => (
        <SwiperSlide key={id} onClick={onClick}>
          <div className="w-[292px] h-[400px] overflow-hidden	rounded-[10px]">
            <div className="absolute w-full h-[50%] bg-gradient-to-t from-transparent via-white-100 to-white" />
            <div className="absolute w-full py-[10px] px-[20px]">
              <div className="font-['SUITE-Variable'] font-extrabold text-[24px] leading-29.95 text-left whitespace-pre-wrap">
                {title}
              </div>
              <div className="flex justify-between font-['SUITE-Variable'] font-semibold text-[16px]">
                <div className="">{donationFoundation}</div>
                {remainDay >= 0 && <div className="">{`D-${remainDay}`}</div>}
              </div>
            </div>

            <div className="absolute w-full bottom-[10px] px-[20px]">
              <div className="h-full bg-white bg-opacity-75 rounded-[10px] px-[10px] py-[14px] flex flex-col gap-[5px]">
                <div className="w-full h-[10px] relative rounded-[20px] bg-[#00000033]">
                  <div className={`w-[${62}%] h-full absolute rounded-[20px] top-0 left-0 bg-[#FF3838]`} />
                </div>
                <div className="w-full flex justify-between">
                  <div className="font-['SUITE-Variable']">총 620명이 참여중입니다.</div>
                  <div className="font-['SUITE-Variable']">62%</div>
                </div>
              </div>
            </div>

            <Image
              src="/assets/card-image1.jpeg"
              className="w-full h-full object-cover"
              alt=""
              width={300}
              height={0}
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

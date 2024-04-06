import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';
import { calculateDaysLeft } from '@/utils/date';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
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
      {DONATION_FOUNDATIONS.map((foundation) => (
        <SwiperSlide key={foundation.id} onClick={() => console.log('hi')}>
          <div className="flex flex-col justify-between w-[292px] h-[400px] py-[10px] px-[20px] rounded-[10px] bg-[url('/images/donationFoundation/독거노인/독거노인1.jpeg')]">
            {/* <div className="flex flex-col justify-between w-[292px] h-[400px] py-[10px] px-[20px] rounded-[10px] bg-[url('/images/donationFoundation/독거노인/독거노인1.jpeg')]"> */}
            <div>
              <p className='font-["SUITE Variable"] font-extrabold text-[24px] leading-29.95 text-left whitespace-pre-wrap'>
                {foundation.title}
              </p>
              <div className='flex justify-between font-["SUITE Variable"] font-semibold text-[16px]'>
                <p>{foundation.name}</p>
                <p>{calculateDaysLeft(foundation.donationPeriod.end)}</p>
              </div>
            </div>
            {/* // */}
            <div className=" w-full bottom-[10px]">
              <div className="h-full bg-white bg-opacity-75 rounded-[10px] px-[10px] py-[14px] flex flex-col gap-[5px]">
                <div className="w-full h-[10px] relative rounded-[20px] bg-[#00000033]">
                  <div className={`w-[${62}%] h-full  rounded-[20px] top-0 left-0 bg-[#FF3838]`} />
                </div>
                <div className="w-full flex justify-between">
                  <div className="font-['SUITE-Variable']">총 620명이 참여중입니다.</div>
                  <div className="font-['SUITE-Variable']">62%</div>
                </div>
              </div>
            </div>
            {/* // */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

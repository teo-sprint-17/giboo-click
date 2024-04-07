'use client';

import type { Swiper as ISwiper } from 'swiper';
import './carousel.css';

import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DonationFoundationCard from '../common/DonationFoundationCard/DonationFoundationCard';

type CarouselType = {
  onSlideChange: (e: ISwiper) => void;
};

const Carousel = ({ onSlideChange }: CarouselType) => {
  return (
    <Swiper
      spaceBetween={-210}
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
      onSlideChange={onSlideChange}
      className="mySwiper"
    >
      {DONATION_FOUNDATIONS.map((foundation) => (
        <SwiperSlide key={foundation.id} onClick={() => console.log('hi')}>
          <DonationFoundationCard foundation={foundation} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

'use client';

import Carousel from '@/components/Home/Carousel';
import DonationButton from '@/components/Home/DonationButton';

import useDonationSwiper from '@/hooks/useDonationSwiper';

const DonationFoundations = () => {
  const { onSlideChange, activeSwiperId } = useDonationSwiper();
  return (
    <>
      <Carousel onSlideChange={onSlideChange} />
      <DonationButton activeSwiperId={activeSwiperId} />
    </>
  );
};

export default DonationFoundations;

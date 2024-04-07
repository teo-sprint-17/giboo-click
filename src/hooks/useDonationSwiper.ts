import type Swiper from 'swiper';

import { useState } from 'react';

const useDonationSwiper = () => {
  const [activeSwiperId, setActiveSwiperId] = useState(1);

  const onSlideChange = (e: Swiper) => setActiveSwiperId(e.activeIndex + 1);

  return { onSlideChange, activeSwiperId };
};

export default useDonationSwiper;

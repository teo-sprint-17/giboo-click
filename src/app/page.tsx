'use client';

import Carousel from '@/components/Home/Carousel';

export default function App() {
  return (
    <Carousel
      items={[
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
      ]}
    />
  );
}

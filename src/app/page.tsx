'use client';

import DonationFoundations from '@/components/Home/DonationFoundations';
import IntroModal from '@/components/Home/IntroModal';
import Category from '@/components/common/Category/Category';
import { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <div className=' animate-fade-in-delay'>
        <div className="whitespace-pre-wrap mb-[50px]">
          기부는 <span className="font-semibold">기부클릭</span>
          이 할게요.
          <br />
          여러분은 <span className="font-semibold">따듯한 마음</span>만 전해주세요.
        </div>
        <div className="overflow-y-scroll no-scrollbar">
          <div className="flex gap-[16px]" onClick={() => alert('준비중입니다!')}>
            <Category isSelected={true} name={'#아동|청소년'} />
            <Category isSelected={false} name={'#지구촌'} />
            <Category isSelected={false} name={'#실버세대'} />
            <Category isSelected={false} name={'#이주민'} />
            <Category isSelected={false} name={'#이주민'} />
            <Category isSelected={false} name={'#이주민'} />
          </div>
        </div>
        <DonationFoundations />
      </div>
        {isModalOpen && <IntroModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

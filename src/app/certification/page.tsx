'use client';

import CertificationCardItem from '@/components/Certification/CerificationCard';
import CertificationProgress from '@/components/common/Certification/CertificationProgress';
import Header from '@/components/common/Header/Header';
import LayerLayout from '@/components/common/LayerLayout';
import { CertificationCard } from '@/types/common';
import Image from 'next/image';

const certifications: CertificationCard[] = [
  {
    id: 2,
    donationCount: 21,
    donatorName: '뮤나',
    createdAt: '2024-03-26',
  },
  {
    id: 1,
    donationCount: 15,
    donatorName: '뮤나',
    createdAt: '2024-02-25',
  },
];

const Certification = () => {
  const currentMonth = new Date().getMonth() + 1;

  return (
    <LayerLayout>
      <Header
        title="인증서"
        rightButton={
          <button type="button" onClick={() => alert('준비중입니다!')}>
            <Image src="/assets/icons/vuesax/linear/element-3.svg" alt="갤러리 형식" width={24} height={24} />
          </button>
        }
        className="mt-[75px]"
      />

      <main className="mt-5 mb-[71px]">
        <div>
          <div className="inline-block px-[15px] py-1 mb-[10px] font-extrabold text-white bg-[#FF6A6A] rounded-[10px]">
            {currentMonth}월
          </div>

          <CertificationProgress count={2} />

          <ul className="flex flex-col gap-5">
            {certifications.map((certification) => {
              return (
                <li key={certification.id}>
                  <CertificationCardItem {...certification} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </LayerLayout>
  );
};

export default Certification;

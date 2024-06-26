'use client';

import AnonymousCheck from '@/components/DonationComplete/AnonymousCheck';
import CheeringField from '@/components/DonationComplete/CheeringField';
import Button from '@/components/common/Button';
import LayerLayout from '@/components/common/LayerLayout';
import { DonationComment } from '@/types/common';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSession from '@/hooks/useSession';
import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';

// TODO: 이전 페이지에서 기부처 정보, 유저 정보 받아오기 -> 멘트, 사진 적용. 라우팅시 데이터 전달
const DonationComplete = () => {
  const [cheeringvalue, setcheeringValue] = useState<DonationComment['content']>('');
  const [isAnonymous, setIsAnonymout] = useState<boolean>(false);
  const router = useRouter();
  const { session } = useSession();

  const onSubmit = () => {
    // TODO: cheeringvalue, isAnonymous 데이터 처리...
    router.push('/feed');
  };

  return (
    <LayerLayout>
      <section className="pt-[90px]">
        <header className="text-center">
          <h2 className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden clip-rect(0, 0, 0, 0) text-[1px] whitespace-nowrap border-0">
            기부 완료
          </h2>
          <Image
            src="/assets/icons/vuesax/linear/lovely.svg"
            className="pb-[21px] mx-auto"
            width={66}
            height={66}
            alt=""
          />
          <strong className="font-extrabold leading-[35px] text-xl break-keep">
            {DONATION_FOUNDATIONS?.find((foundation) => session?.foundationDonation.includes(foundation.id))?.name}에 따듯한 마음 감사합니다.
          </strong>
          <p className="pt-2.5 text-sm">기부는 기부클릭이 할게요.</p>
        </header>

        <div className="mt-[23px] mx-[50px]">
          <div className="p-[9px] bg-white rounded-[10px]">
            <Image
              src="/assets/images/donationComplete/money-dynamic-color.png"
              alt=""
              width={1008}
              height={1008}
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>

        <form>
          <CheeringField value={cheeringvalue} onChange={(e) => setcheeringValue(e.target.value)} />
          <AnonymousCheck value={isAnonymous} onChange={(e) => setIsAnonymout(e.target.checked)} />
        </form>

        <p className="mt-[50px] text-sm text-[#A19999]">* 기부 현황은 &#8216;마이&#8217; 에서 확인할 수 있어요.</p>

        <div className="mt-6 flex gap-[10px] pb-[38px]">
          <Button text="기부달력 보러가기" positive onClick={() => router.push('/calendar')} />
          <Button text="완료" onClick={onSubmit} />
        </div>
      </section>
    </LayerLayout>
  );
};

export default DonationComplete;

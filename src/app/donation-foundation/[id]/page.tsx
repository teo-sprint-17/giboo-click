'use client';

import Image from 'next/image';
import { useRouter, notFound } from 'next/navigation';
import { useState } from 'react';

import DonationFoundationCard from '@/components/common/DonationFoundationCard/DonationFoundationCard';
import Header from '@/components/common/Header/Header';
import DonationDescription from '@/components/DonationFoundationDetail/DonationDescription';

import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';
import LayerLayout from '@/components/common/LayerLayout';

import useSession from '@/hooks/useSession';
import useDonation from '@/hooks/useDonation';

const FoundationDetail = ({ params }: { params: { id: string } }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const session = useSession();
  const { onDonate, isDonationComplete } = useDonation();

  const foundation = DONATION_FOUNDATIONS.find((foundation) => foundation.id === Number(params.id));

  if (!foundation) {
    return notFound();
  }

  const { description, bodyImage, name } = foundation;

  const onConfirmDonationAndNavigate = () => {
    onDonate(name);
    router.push('/donation-complete');
  };

  return (
    <LayerLayout>
      <div className="flex flex-col gap-[20px] py-[82px]">
        <Header />
        <DonationFoundationCard foundation={foundation} cardClasses="w-full rounded-none" />
        <DonationDescription paragraphs={description.split('\n\n').slice(0, 2)} />
        <Image
          src={bodyImage}
          alt={name}
          width={400}
          height={300}
          priority
          quality={100}
          style={{ width: '100%', height: 'auto' }}
        />
        <DonationDescription paragraphs={description.split('\n\n').slice(2)} />
        {isModalVisible ? (
          <div className=" fixed bottom-0 flex flex-col top-0 left-0 w-full h-full">
            <div className="w-full h-full" />
            <div className="w-full">
              <div className="bg-[#fff] w-full flex flex-col justify-center items-center rounded-t-lg pt-[23px] pb-[38px] px-[40px]">
                <Image
                  src="/assets/icons/vuesax/linear/lovely.svg"
                  alt=""
                  width={66}
                  height={66}
                  className="mb-[21px]"
                />
                <div className="text-20 font-semibold leading-24.96 text-center whitespace-pre-wrap mb-[30px]">{`${foundation.name}에 기부하시겠습니까?`}</div>
                <div className="text-base font-normal leading-19.97 text-center opacity-50 mb-7">
                  기부는 하루 한 번만 가능해요.
                </div>
                <div className="max-w-[432px] min-w-[320px] h-[70px] flex gap-[10px]">
                  <button
                    onClick={() => setIsModalVisible(false)}
                    className="w-[170px] h-[40px] rounded-[10px] bg-[#00000033]"
                  >
                    아니요
                  </button>
                  <button
                    onClick={onConfirmDonationAndNavigate}
                    className="w-[170px] h-[40px] rounded-[10px] bg-[#FF6A6A]"
                  >
                    네
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="fixed bottom-0 left-0 right-0 h-[95px] flex justify-center items-center bg-white">
            <button
              onClick={session ? () => setIsModalVisible(true) : () => router.push('/login')}
              disabled={isDonationComplete(name)}
              className={`h-[50px] px-[71px] rounded-[20px] text-center text-SUITE text-white font-semibold text-[20px] leading-34.94 cursor-pointer`}
              style={{
                maxWidth: 'fit-content',
                backgroundColor: `${isDonationComplete(name) ? '#d7d5d5' : '#FF6A6A'}`,
                cursor: `${isDonationComplete(name) && 'not-allowed'}`,
              }}
            >
              {isDonationComplete(name) ? '기부완료' : '기부하기'}
            </button>
          </div>
        )}
      </div>
    </LayerLayout>
  );
};

export default FoundationDetail;

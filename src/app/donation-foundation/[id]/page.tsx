import { notFound } from 'next/navigation';

import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';
import Image from 'next/image';
import { calculateDaysLeft } from '@/utils/date';

const FoundationDetail = ({ params }: { params: { id: string } }) => {
  const foundation = DONATION_FOUNDATIONS.find((foundation) => foundation.id === Number(params.id));

  if (!foundation) {
    return notFound();
  }
  const size = 'smd';

  const { name, mainImage, donationCount, donationGoal, donationPeriod, description } = foundation;
  const donationGoalPercentile = (donationCount / donationGoal) * 100;
  return (
    <div className="flex flex-col items-center">
      <h1>{name}</h1>
      <Image
        src={mainImage}
        alt={name}
        width={400}
        height={300}
        priority
        sizes="(max-width: 432px) 100vw, 432px"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className={`w-full bottom-[10px]`}>
        <div className="h-full bg-white bg-opacity-75 flex flex-col gap-[5px]">
          <div className={`w-full  relative bg-[#00000033] ${size === 'sm' ? 'h-[8px]' : 'h-[10px]'}`}>
            <div
              style={{
                width: `${
                  donationGoalPercentile * 100 === 0 ? 0 : donationGoalPercentile < 1 ? 1 : donationGoalPercentile
                }%`,
              }}
              className={`h-full top-0 left-0 bg-red-500 ${size === 'sm' ? 'h-[8px]' : 'h-[10px]'}`}
            />
          </div>
          <div className="w-full flex justify-between">
            <p className={` ${size === 'sm' ? ' text-[11px]' : 'text-[14px]'}`}>총 {donationCount}명이 참여중입니다.</p>
            <p className={` ${size === 'sm' ? ' text-[10px]' : 'text-[12px]'}`}>{donationGoalPercentile}%</p>
          </div>
        </div>
      </div>
      <div className={`flex justify-between w-full font-semibold ${size === 'sm' ? 'text-[13px]' : 'text-[16px]'}`}>
        <p>{name}</p>
        <p>{calculateDaysLeft(donationPeriod.end)}</p>
      </div>
      <p className="whitespace-pre-line">{description}</p>
    </div>
  );
};

export default FoundationDetail;

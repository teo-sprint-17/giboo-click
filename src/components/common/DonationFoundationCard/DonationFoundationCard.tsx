import type { DonationFoundation } from '@/types/common';

import Link from 'next/link';

import { calculateDaysLeft } from '@/utils/date';

type DonationFoundationType = {
  foundation: DonationFoundation;
  size?: 'sm';
  cardClasses?: string;
};

const DonationFoundationCard = ({ foundation, size, cardClasses }: DonationFoundationType) => {
  const { id, title, name, mainImage, donationPeriod, donationCount, donationGoal } = foundation;
  const donationGoalPercentile = (donationCount / donationGoal) * 100;

  return (
    <Link href={`/donation-foundation/${id}`}>
      <div
        className={`flex flex-col justify-between relative min-w-[292px] h-[400px] rounded-[10px] ${
          size === 'sm' ? ' min-w-[240px] h-[320px]' : ' w-[292px] h-[400px]'
        } ${cardClasses}`}
        style={{
          backgroundImage: `url('${mainImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col justify-between h-full py-[10px] px-[20px] bg-gradient-to-t from-transparent via-transparent to-white">
          <div>
            <p
              className={`font-extrabold leading-29.95 text-left whitespace-pre-wrap ${
                size === 'sm' ? 'text-[16px]' : 'text-[24px]'
              }`}
            >
              {title}
            </p>
            <div className={`flex justify-between  font-semibold ${size === 'sm' ? 'text-[13px]' : 'text-[16px]'}`}>
              <p>{name}</p>
              <p>{calculateDaysLeft(donationPeriod.end)}</p>
            </div>
          </div>
          <div className={`w-full bottom-[10px]`}>
            <div className="h-full bg-white bg-opacity-75 rounded-[10px] px-[10px] py-[14px] flex flex-col gap-[5px]">
              <div
                className={`w-full  relative rounded-[20px] bg-[#00000033] ${size === 'sm' ? 'h-[8px]' : 'h-[10px]'}`}
              >
                <div
                  style={{
                    width: `${
                      donationGoalPercentile * 100 === 0 ? 0 : donationGoalPercentile < 1 ? 1 : donationGoalPercentile
                    }%`,
                  }}
                  className={`h-full rounded-[20px] top-0 left-0 bg-red-500 ${size === 'sm' ? 'h-[8px]' : 'h-[10px]'}`}
                />
              </div>
              <div className="w-full flex justify-between">
                <p className={` ${size === 'sm' ? ' text-[11px]' : 'text-[14px]'}`}>
                  총 {donationCount}명이 참여중입니다.
                </p>
                <p className={` ${size === 'sm' ? ' text-[10px]' : 'text-[12px]'}`}>{donationGoalPercentile}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationFoundationCard;

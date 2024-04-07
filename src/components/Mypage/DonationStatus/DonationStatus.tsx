'use client';

import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';
import MypageSection from '../MypageSection';
import DonationStatusCard from './DonationStatusCard';
import useSession from '@/hooks/useSession';

const DonationStatus = () => {
  const { session } = useSession();

  const myDonationFoundations = DONATION_FOUNDATIONS.filter((foundation) =>
    session?.foundationDonation.includes(foundation.id)
  );
  return (
    <MypageSection title="나의 기부">
      <div className="flex gap-[10px] overflow-y-scroll mr-[-30px] pr-[30px] no-scrollbar">
        {myDonationFoundations.length > 0 ? (
          myDonationFoundations.map((foundation) => (
            <DonationStatusCard
              key={foundation.id}
              title={foundation.title}
              status={
                foundation.donationCount >= foundation.donationGoal ||
                new Date() >= new Date(foundation.donationPeriod.end)
                  ? '모금 완료'
                  : '진행중'
              }
              imageUrl={foundation.mainImage}
              progress={Math.min((foundation.donationCount / foundation.donationGoal) * 100, 100)}
            />
          ))
        ) : (
          <p>기부 내역이 없습니다.</p>
        )}
      </div>
    </MypageSection>
  );
};

export default DonationStatus;

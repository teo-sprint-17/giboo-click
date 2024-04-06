import type { DonationFoundation as TDonationFoundation } from '@/types/common';

import DonationFoundation from '../common/DonationFoundation/DonationFoundation';

type Feed = {
  group: string;
  donationFoundations: TDonationFoundation[];
};

const FeedGroupCard = ({ feed }: { feed: Feed }) => {
  const { group, donationFoundations } = feed;
  return (
    <div key={group}>
      <div className="my-3 font-medium">{group}</div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex  space-x-4">
          {donationFoundations.map((foundation) => (
            <DonationFoundation key={foundation.id} foundation={foundation} size={'sm'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedGroupCard;

import FeedGroupCard from '@/components/Feed/FeedGroupCard';

import { DONATION_FOUNDATIONS } from '@/constants/donationFoundations';

const Feed = () => {
  return (
    <div className="">
      <div className="font-bold text-[22px]">
        김지원님의 <br /> 도움이 필요한 곳들이에요
      </div>
      <div className="">
        {FEED_MOCK.map((feed) => (
          <FeedGroupCard feed={feed} key={feed.group} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

const FEED_MOCK = [
  {
    group: '마감 임박 기부처',
    donationFoundations: DONATION_FOUNDATIONS.sort((a, b) => {
      return new Date(a.donationPeriod.end).getTime() - new Date(b.donationPeriod.end).getTime();
    }).slice(0, 3),
  },
  {
    group: '방금 올라온 기부처',
    donationFoundations: DONATION_FOUNDATIONS.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }).slice(2, 4),
  },
  {
    group: '모든 기부처',
    donationFoundations: DONATION_FOUNDATIONS,
  },
];

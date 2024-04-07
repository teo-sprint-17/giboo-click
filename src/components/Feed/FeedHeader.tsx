'use client';

import useSession from '@/hooks/useSession';

const FeedHeader = () => {
  const { session } = useSession();

  return (
    <div className="font-bold text-[22px]">
      {session?.username ?? '사용자'}님의 <br /> 도움이 필요한 곳들이에요
    </div>
  );
};

export default FeedHeader;

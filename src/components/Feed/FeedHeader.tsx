'use client';

const FeedHeader = () => {
  const user = JSON.parse(localStorage.getItem('giboo_click')!)?.username ?? '사용자'
  return (
    <div className="font-bold text-[22px]">
      {user}님의 <br /> 도움이 필요한 곳들이에요
    </div>
  );
};

export default FeedHeader;

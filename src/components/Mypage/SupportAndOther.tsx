'use client';

import MypageSection from './MypageSection';

const SupportAndOther = () => {
  return (
    <MypageSection title="지원 / 기타">
      <div className="cursor-pointer" onClick={() => alert('준비중입니다!')}>
        자주 묻는 질문
      </div>
      <div className="cursor-pointer" onClick={() => alert('준비중입니다!')}>
        평점 남기기
      </div>
      <div className="cursor-pointer" onClick={() => alert('준비중입니다!')}>
        의견 보내기
      </div>
      <div className="cursor-pointer" onClick={() => alert('준비중입니다!')}>
        팀원 소개
      </div>
    </MypageSection>
  );
};

export default SupportAndOther;

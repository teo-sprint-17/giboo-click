'use client';

import { useRouter } from 'next/navigation';
import MypageSection from './MypageSection';

const MyDonation = () => {
  const router = useRouter();

  return (
    <MypageSection title="나의 기부">
      <div className="cursor-pointer" onClick={() => router.push('/certification')}>
        인증서 목록
      </div>
      <div className="cursor-pointer" onClick={() => alert('준비중입니다!')}>기부 보관함</div>
    </MypageSection>
  );
};

export default MyDonation;

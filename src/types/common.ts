type DonationFoundation = {
  // 기부처
  id: number;
  name: string;
  category: string;
  title: string; // 기부처 멘트
  images: string[]; // 기부처 이미지
  donationPeriod: string; // 모금 기간
  donationCount: number; // 현재 기부 횟수
  description: string; // 기부처 상세설명
  url: {
    homepage?: string; // 기부처 홈페이지
    twitter?: string;
    facebook?: string;
    instagram?: string;
    kakao?: string;
  };
  comments: DonationComment[]; // 기부처 후기(기부 한마디)
};

type DonationComment = {
  id: number;
  name: string;
  content: string;
  createdAt: string;
};

type CertificationCard = {
  id: number;
  donationCount: number;
  donatorName: string;
  createdAt: string;
};

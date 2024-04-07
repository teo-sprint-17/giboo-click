import { CertificationCard } from '@/types/common';
import { convertDateToDotDate, getMonth } from '@/utils/date';
import DescriptionItem from './DescriptionItem';
// import Image from 'next/image';

type MonthlyContents = {
  [month in '2' | '3']: {
    title: string;
    imgUrl: string;
  };
};

const monthlyContents: MonthlyContents = {
  '2': {
    title: '겨울잠을 깨우는 따뜻한 기부',
    imgUrl: '/assets/tea.png',
  },
  '3': {
    title: '봄이 오는 소리',
    imgUrl: '/assets/bear_tree.png',
  },
};

type Props = CertificationCard & {};

const CertificationCardItem = ({ donationCount, donatorName, createdAt }: Props) => {
  const month = getMonth(createdAt);

  return (
    <div className="py-5 px-[40px] mt-[37px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-[10px]">
      <h3 className="text-xl font-extrabold text-center"></h3>
      <p className="text-xs text-[#A19999] text-center">{month}월 기부증서</p>
      <div
        className="relative h-[220px] bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${monthlyContents[month as keyof typeof monthlyContents].imgUrl})` }}
      ></div>

      <dl className="flex flex-col gap-5 mt-[15px]">
        <DescriptionItem title="기부자" description={<span className="font-semibold">{donatorName}</span>} />
        <DescriptionItem
          title="총 기부 횟수"
          description={
            <>
              <span className="font-semibold">{donationCount}</span> 회
            </>
          }
        />
        <DescriptionItem title="발급 날짜" description={convertDateToDotDate(createdAt)} />
      </dl>

      {/* <button
        type="button"
        className="flex items-center justify-center w-[50px] h-[50px] mt-[39px] mx-auto text-center rounded-[50%] bg-[#F6F4F2]"
      >
        <Image src="/assets/icons/vuesax/linear/send-2.svg" alt="공유" width={28} height={28} />
      </button> */}
    </div>
  );
};

export default CertificationCardItem;

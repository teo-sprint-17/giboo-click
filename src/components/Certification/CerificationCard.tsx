import { CertificationCard } from '@/types/common';
import DescriptionItem from './DescriptionItem';
// import Image from 'next/image';

// type MonthlyContents = {
//   [month in '2']: {
//     title: string;
//     imgUrl: string;
//   };
// };

// const monthlyContents: MonthlyContents = {
//   '2': {
//     title: '겨울잠을 깨우는 따뜻한 기부',
//     imgUrl: '/assets/tea.png',
//   },
// };

type Props = CertificationCard & {};

const CertificationCardItem = ({ donationCount, donatorName, createdAt }: Props) => {
  const month = getMonth(createdAt);

  return (
    <div className="py-5 px-[40px] mt-[37px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-[10px]">
      <h3 className="text-xl font-extrabold text-center"></h3>
      <p className="text-xs text-[#A19999] text-center">{month}월 기부증서</p>
      <div
        className="relative h-[220px] bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(/assets/tea.png)` }}
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

/**
 * @return 'yy.mm.dd'
 */
export const convertDateToDotDate = (createdAt: string) => {
  return createdAt.slice(2).replace(/\-/g, '.');
};

export const getMonth = (createdAt: string) => {
  const monthString = createdAt.slice(5, 7);

  return monthString[0] === '0' ? monthString[1] : monthString;
};

export default CertificationCardItem;

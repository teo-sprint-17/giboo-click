import Image from 'next/image';

type Props = {
  count: number;
};

const CertificationProgress = ({ count }: Props) => {
  const currentMonthDonationPercentail = (100 / 15) * count + '%';

  return (
    <div>
      <p className="text-xl font-extrabold">기부의 꽃을 피워주세요.</p>

      <div className="relative w-full h-25 px-5 py-[22px] mt-[17px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-[10px]">
        <p>기부 15회 완료하기</p>
        <div className="relative h-[25px] mt-[10px] rounded-[10px] bg-[#EDEBE9] overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full bg-[#FF6A6A]`}
            style={{ width: `${currentMonthDonationPercentail}` }}
          ></div>
        </div>
        <Image
          src="/assets/dandelion.png"
          alt=""
          width={580}
          height={580}
          className="absolute right-6 bottom-[calc(100%_-_13px)] w-[145px] h-[145px]"
        />
      </div>
    </div>
  );
};

export default CertificationProgress;

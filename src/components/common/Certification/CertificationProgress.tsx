import Image from 'next/image';

type Props = {
  count: number;
};

const CertificationProgress = ({ count }: Props) => {
  const currentMonthDonationPercentile = (100 / 15) * count + '%';

  return (
    <div>
      <p className="text-xl text-left font-extrabold">기부 꽃을 피워주세요.</p>

      <div className="relative w-full h-25 px-5 py-[22px] mt-[17px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-[10px]">
        <p className="text-left font-semibold">기부 15회 완료하기</p>
        <div className="relative h-[25px] mt-[10px] rounded-[10px] bg-[#EDEBE9] overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full bg-[#FF6A6A]`}
            style={{ width: `${currentMonthDonationPercentile}` }}
          ></div>
          <p className="absolute top-1/2 left-1/2 font-semibold -translate-x-1/2 -translate-y-1/2">{count}/15</p>
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

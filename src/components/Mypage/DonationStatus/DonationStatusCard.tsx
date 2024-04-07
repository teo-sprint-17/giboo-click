import Image from 'next/image';

type Props = {
  title: string;
  status: '진행중' | '모금 완료';
  imageUrl?: string;
  progress: number;
};

const DonationStatusCard = ({ title, status, imageUrl, progress }: Props) => {
  return (
    <div className="min-w-[156px] min-h-[156px] max-w-[156px] max-h-[156px] relative rounded-[10px] overflow-hidden">
      <div className="absolute text-[#fff] z-10 text-[14px] leading-[22px] py-[10px] px-[15px] text-center">
        {title}
      </div>
      <div className="absolute w-full h-full bg-[#000] bg-opacity-50" />
      {imageUrl && <Image src={imageUrl} alt="" className="w-full h-full object-cover" width={156} height={0} />}

      <div className="absolute bottom-0 w-full">
        {status === '진행중' && (
          <div className="mx-[15px] pb-[13px] bg-[">
            <span className="font-semibold text-[14px] text-[#fff] py-[3px] px-[10px] bg-[#FF3838] rounded-[10px]">
              {status}
            </span>
          </div>
        )}
        <div className="h-[6px] mx-[15px] mb-[10px] bg-[#fff] bg-opacity-50 rounded-[20px]">
          <div className="h-full bg-[#FF3838] rounded-[20px]" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      {status === '모금 완료' && (
        <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-50">
          <div className="bg-[#FF3838] rounded-[20px] py-[7px] px-[12px]">
            <span className="text-[#fff] font-extrabold text-[14px]">모금 완료</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationStatusCard;

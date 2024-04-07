import Image from 'next/image';
import Link from 'next/link';

type Props = {
  month: number;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
};

const CalendarHeader = ({ month, goToPreviousMonth, goToNextMonth }: Props) => {
  return (
    <div className="w-full flex justify-between mb-[63px]">
      <div className="flex">
        <Image
          src="/assets/icons/vuesax/linear/arrow-left.svg"
          width={24}
          height={24}
          alt=""
          className="cursor-pointer"
          onClick={goToPreviousMonth}
        />
        <div className="w-[189px] text-center">{`${month}월 기부 달력`}</div>
        <Image
          src="/assets/icons/vuesax/linear/arrow-right.svg"
          width={24}
          height={24}
          alt=""
          className="cursor-pointer"
          onClick={goToNextMonth}
        />
      </div>
      <Link href="/certification">
        <Image
          src="/assets/icons/vuesax/bold/medal-star.svg"
          width={24}
          height={24}
          alt=""
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default CalendarHeader;

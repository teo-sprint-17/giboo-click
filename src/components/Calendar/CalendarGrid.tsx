import { getFirstDay, getLastDate } from '@/utils/date';
import Image from 'next/image';

type Props = {
  calendarDate: Date;
  eventDates?: number[];
};

const CalendarGrid = ({ calendarDate, eventDates }: Props) => {
  const currentYear = calendarDate.getFullYear();
  const currentMonth = calendarDate.getMonth() + 1;

  const firstDay = getFirstDay(currentYear, currentMonth);
  const lastDate = getLastDate(currentYear, currentMonth);

  return (
    <div className="w-full flex flex-col gap-[30px] mb-[110px]">
      <div className="grid grid-cols-7 items-center justify-items-center">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="grid grid-cols-7 gap-y-8 items-center justify-items-center ">
        {Array.from({ length: firstDay }).map((_, index) => (
          <div className="w-[38px] h-[38px] pt-full relative" key={index}></div>
        ))}
        {Array.from({ length: lastDate }).map((_, index) => {
          const day = index + 1;
          const isEventDate = eventDates?.includes(day);

          return (
            <div
              className="w-[38px] h-[38px] pt-full relative cursor-pointer bg-[#fff] flex items-center justify-center rounded-full font-normal text-[16px]"
              key={index}
            >
              {!isEventDate ? (
                <div>{day}</div>
              ) : (
                <Image src="/assets/icons/vuesax/bold/heart.svg" width={24} height={24} alt="" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;

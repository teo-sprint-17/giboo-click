'use client';

import CalendarGrid from '@/components/Calendar/CalendarGrid';
import CalendarHeader from '@/components/Calendar/CalendarHeader';
import CertificationProgress from '@/components/common/Certification/CertificationProgress';
import { useCalendar } from '@/hooks/useCalendar';

const Calendar = () => {
  const { calendarDate, goToPreviousMonth, goToNextMonth } = useCalendar();

  return (
    <div className="text-[20px] font-extrabold leading-[24.96px] text-center">
      <CalendarHeader
        month={calendarDate.getMonth() + 1}
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
      />
      <CalendarGrid calendarDate={calendarDate} eventDates={[1, 2, 6, 7]} />
      <CertificationProgress count={4} />
    </div>
  );
};

export default Calendar;

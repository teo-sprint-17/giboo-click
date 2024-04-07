'use client';

import CalendarGrid from '@/components/Calendar/CalendarGrid';
import CalendarHeader from '@/components/Calendar/CalendarHeader';
import CertificationProgress from '@/components/common/Certification/CertificationProgress';
import { useCalendar } from '@/hooks/useCalendar';
import useSession from '@/hooks/useSession';

const Calendar = () => {
  const { calendarDate, goToPreviousMonth, goToNextMonth } = useCalendar();
  const { session } = useSession();

  return (
    <div className="text-[20px] font-extrabold leading-[24.96px] text-center">
      <CalendarHeader
        month={calendarDate.getMonth() + 1}
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
      />
      <CalendarGrid calendarDate={calendarDate} eventDates={[1, 2, 6, 7]} />
      <CertificationProgress count={session?.totalDonationCount ?? 0} />
    </div>
  );
};

export default Calendar;

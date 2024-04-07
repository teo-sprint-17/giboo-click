import { useState } from 'react';

export const useCalendar = (initialDate?: Date) => {
  const [calendarDate, setCalendarDate] = useState(() => initialDate ?? new Date());

  const goToPreviousMonth = () => {
    calendarDate.setDate(1); // calendarDate가 31일일 때, 2개월 넘어가는 현상 방지
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    setCalendarDate(new Date(calendarDate));
  };

  const goToNextMonth = () => {
    calendarDate.setDate(1); // calendarDate가 31일일 때, 2개월 넘어가는 현상 방지
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    setCalendarDate(new Date(calendarDate));
  };

  return {
    calendarDate,
    goToPreviousMonth,
    goToNextMonth,
  };
};

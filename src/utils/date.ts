export const calculateDaysLeft = (date: string) => {
  const endDate = new Date(date);
  const today = new Date();

  endDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const differenceInTime = endDate.getTime() - today.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  if (differenceInDays === 0) {
    return '금일 마감';
  } else if (differenceInDays < 0) {
    return '마감';
  } else {
    return `D-${Math.ceil(differenceInDays)}`;
  }
};

export const getFirstDay = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay();
}; // 0: 일요일, 1: 월요일, ..., 6: 토요일

export const getLastDate = (year: number, month: number) => {
  return new Date(year, month, 0).getDate(); // 0일은 지난 달의 마지막 날을 의미합니다.
};

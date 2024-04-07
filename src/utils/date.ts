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

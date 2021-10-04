// eslint-disable-next-line import/prefer-default-export
export const getYearDiff = (date: string | number | Date) => {
  const yearDifMs = Date.now() - new Date(date).getTime();
  const yearDate = new Date(yearDifMs);
  return Math.abs(yearDate.getUTCFullYear() - 1970);
};

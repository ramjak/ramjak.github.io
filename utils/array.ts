// eslint-disable-next-line import/prefer-default-export
export const groupArr = <T>(arr: T[], size: number) => {
  const copy = arr.slice();
  const length = Math.ceil(arr.length / size);
  return Array.from({ length }, () => copy.splice(0, size));
};

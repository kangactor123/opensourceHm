export function makeTotalPage(listLength: number, totalLength: number = 5) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(listLength / totalLength); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}

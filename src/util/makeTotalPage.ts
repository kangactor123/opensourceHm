/*
페이징 하는데 필요한 함수.
리턴 : 페이지 번호를 담고 있는 Array
*/

export function makeTotalPage(listLength: number, totalLength: number = 5) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(listLength / totalLength); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}

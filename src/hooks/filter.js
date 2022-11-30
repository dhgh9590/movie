//movieList 영화 목록
//number 카테고리 번호

export default function dataFilter(movieList, categoryNumber) {
  const copy = movieList && [...movieList];
  const newData =
    copy &&
    copy.filter(item => {
      for (let i = 0; i < item.category.length; i++) {
        if (item.category[i] == categoryNumber) {
          return item;
        }
      }
    });

  const data = handlePlus(newData);
  return data;
}

export function handlePlus(newData) {
  //평점 더하고 평균 값 구하기
  const movieLength = newData && newData.length;
  const add = [];
  for (let i = 0; i < movieLength; i++) {
    add.push(
      parseFloat(newData[i].grade.reduce((a, b) => parseInt(a) + parseInt(b))) /
        newData[i].grade.length,
    );
    if (newData) {
      newData[i].grade = [add[i]];
    }
  }
  return newData;
}

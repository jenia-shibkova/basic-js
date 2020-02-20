module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((element) => {
    element.forEach((el) => {
      if (el === '^^') {
        count++;
      }
    });
  });
  return count;
};

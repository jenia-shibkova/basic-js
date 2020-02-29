module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }
  if (arr.length === 0) return arr;

  const result = [];
  const first = arr[0];
  const length = arr.length;
  const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < length; i += 1) {
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        result.pop();
        break;
      case '--double-next':
        if (i + 1 !== length) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if ((i - 1) >= 0) {
          result.push(arr[i - 1]);
        }
        break;     
      default:
        if (!controlSequences.includes(arr[i])) {
          result.push(arr[i]);
        }
        break;
    } 
  }  

  return result;
};

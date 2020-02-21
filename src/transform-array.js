module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }

  const result = [];

  arr.forEach((el, index) => {
    switch (el) {
      case '--discard-next':
        result.splice(index + 1, 1);
        break;
      case '--discard-prev':
        result.pop();
        break;
      case '--double-next':
        result.push(arr[index + 1]);
        break;
      case '--double-prev':
        result.push(arr[index - 1]);
        break;     
      default:
        result.push(el);
        break;
    }       
  });
  
  return result;
};

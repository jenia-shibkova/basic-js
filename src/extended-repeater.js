module.exports = function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  if (separator === undefined) separator = '+';
  
  if (addition === undefined) {
    return new Array(repeatTimes).fill(`${str}`).join(`${separator}`);
  }
  
  const additionArr = new Array(additionRepeatTimes).fill(`${addition}`).join(`${additionSeparator}`);
  return new Array(repeatTimes).fill(`${str}${additionArr}`).join(`${separator}`);
};
  
const SEASONS = {
  AUTUMN: [8 , 9, 10],
  WINTER: [11, 0, 1],
  SPRING: [2, 3, 4],
  SUMMER: [5, 6, 7]
};

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.apply(date) !== '[object Date]') {
    throw new Error;
  }
  
  const month = date.getMonth();
  let season;

  if (SEASONS.AUTUMN.includes(month)) {
    season = 'autumn';
  }
  if (SEASONS.WINTER.includes(month)) {
    season = 'winter';
  }
  if (SEASONS.SPRING.includes(month)) {
    season = 'spring';
  }
  if (SEASONS.SUMMER.includes(month)) {
    season = 'summer';
  }

  return season;
};


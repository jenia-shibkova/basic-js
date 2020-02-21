const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY ||
    isNaN(parseFloat(sampleActivity))) {
    return false;
  } 

  const k = ln2 / HALF_LIFE_PERIOD;
  return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k));
};

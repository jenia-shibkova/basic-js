module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secInHour = 3600;
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = turns / (turnsSpeed / secInHour);

  return { turns, seconds };
}
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const abbreviation = members.map((name) => {
    if (typeof name === 'string') {
      return name.trim().toUpperCase().substr(0, 1);
    }
  });

  return abbreviation.sort().join('');
};
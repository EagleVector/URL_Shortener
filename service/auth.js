const sessionIdToUserMap = new Map();
// Everytime the server reloads, the user gets logged out because the map gets empty
function setUser(id, user) {
  sessionIdToUserMap.set(id, user);
}

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser
} 
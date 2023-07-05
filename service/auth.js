const jwt = require("jsonwebtoken");
const secret = "Cherry@123"

// const sessionIdToUserMap = new Map();
// Everytime the server reloads, the user gets logged out because the map gets empty
// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }

function setUser(user) {
  return jwt.sign({
    _id: user._id,
    email: user.email
  }, secret);
}

function getUser(token) {
  if (!token) {
    return null;
  }
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser
};
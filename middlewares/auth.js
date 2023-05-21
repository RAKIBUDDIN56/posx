const jwt = require("jsonwebtoken");
const ratelimit = require("express-rate-limit")

const limiter = ratelimit({
  max: 5,
  windowMs: 10000,
  handler: function (req, res) {
    return res.status(429).json({
      message: 'You sent too many requests. Please wait a while then try again',
      data: []
    })
  }
})
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null)
    return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user, callback) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateAccessToken(username) {
  return jwt.sign({ data: username }, process.env.TOKEN_SECRET, {
    //expiresIn: process.env.TOKEN_EXPIRES,
  });
}


module.exports = {
  authenticateToken,
  generateAccessToken, limiter

};

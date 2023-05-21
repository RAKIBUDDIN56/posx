function errorHandler(err, req, res, next) {
  if (typeof err === "string") {
    // custom application error
    return res.status(400).json({
      success: false,
      message: err,
      data: [],
    });
  }

  if (typeof err === "ValidationError") {
    // mongoose validation error
    return res.status(400).json({
      success: false,
      message: err,
      data: [],
    });
  }

  if (typeof err === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ success: false, 
    message: "Token not valid", 
    data: [], });
  }
  if (typeof err === "TokenExpiredError") {
    // jwt authentication error
    return res.status(403).json({ success: false, 
    message: "Token not valid", 
    data: [], });
  }
  // default to 500 server error
  return res.status(500).json({ success: false,
  message: err.message, 
  data: [], });
}

module.exports = {
  errorHandler,
};

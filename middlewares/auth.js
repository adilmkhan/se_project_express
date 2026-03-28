const jwt = require("jsonwebtoken");

const UnauthorizedError = require("../errors/UnauthorizedError");

const JWT_SECRET = require("../utils/config");

const handleAuthError = (next) =>
  next(new UnauthorizedError("Authorization Error"));
const extractBearerToken = (header) => header.replace("Bearer ", "");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return handleAuthError(next);
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return handleAuthError(next);
  }

  req.user = payload;

  return next();
};

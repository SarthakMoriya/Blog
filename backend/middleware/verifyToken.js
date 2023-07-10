const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    res.status(500).json({ message: "Not Authorized... no token found!" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) return res.status(403).json({ msg: "Wrong or Expired Token" });
      else {
        //req.user we r creating and data is on success which will be available to req body in the function where we are using this middleware
        req.user = data;
        next();
      }
    });
  }
};

module.exports = verifyToken;

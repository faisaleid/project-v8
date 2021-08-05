const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const auth = req.headers.authorization.split(" ")[1];
    console.log(auth);
    const verify = jwt.verify(auth, `${process.env.JWT_SECRET_KEY}`);
    req.userData = verify;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ errorMessage: "user is not authorized" });
  }
};

const { User } = require("../model/user");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    var token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
    user.token = token;
    const doc = await user.save();
    res.status(200, "New User Created").json(token);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    //   const decode = jwt.decode(token, process.env.SECRET_KEY);
    //   console.log(decode);
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded.email) {
        next();
      } else {
        res.sendStatus(401);
      }
    });
  } catch (error) {
    res.sendStatus(401);
  }
};

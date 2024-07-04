const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    const privateKey = fs.readFileSync(
      path.resolve(__dirname, "../private.key")
    );
    const token = jwt.sign({ email: user.email }, privateKey, {
      algorithm: "RS256",
    });
    const hash = await bcrypt.hash(req.body.password, 10);
    user.token = token;
    user.password = hash;
    const doc = await user.save();
    res.status(200, "New User Created").json(token);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    const isAuth = await bcrypt.compare(req.body.password, user.password);
    if (isAuth) {
      const privateKey = fs.readFileSync(
        path.resolve(__dirname, "../private.key")
      );
      const token = jwt.sign({ email: user.email }, privateKey, {
        algorithm: "RS256",
      });
      user.token = token;
      res.cookie("uid", token, { maxAge: 60000 });
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.auth = (req, res, next) => {
  try {
    const token = req.cookies.uid;
    const publicKey = fs.readFileSync(path.resolve(__dirname, "../public.key"));
    jwt.verify(token, publicKey, function (err, decoded) {
      if (decoded.email) {
        next();
      } else {
        res.status(401).json(err);
      }
    });
  } catch (error) {
    res.sendStatus(401);
  }
};

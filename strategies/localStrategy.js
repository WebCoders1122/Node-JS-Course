const passport = require("passport");
const { Strategy } = require("passport-local");
const { User } = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

passport.serializeUser((user, done) => {
  done(null, user._id);
  console.log("serializeUser");
});

passport.deserializeUser(async (id, done) => {
  console.log(id);
  console.log("deserializeUser");
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      console.log("try");
      throw new Error("User not found");
    } else {
      console.log("else");
      done(null, user);
    }
  } catch (error) {
    console.log("catch");
    done(error);
  }
});

exports.strategy = passport.use(
  new Strategy({ usernameField: "email" }, async (username, password, done) => {
    try {
      console.log(username, password);
      const user = await User.findOne({ email: username });
      if (!user) throw new Error("User not found");
      const isAuth = await bcrypt.compare(password, user.password);
      // if (isAuth) {
      //   const privateKey = fs.readFileSync(
      //     path.resolve(__dirname, "../private.key")
      //   );
      //   const token = jwt.sign({ email: user.email }, privateKey, {
      //     algorithm: "RS256",
      //   });
      //   user.token = token;
      //   done(null, user);
      // }
      if (isAuth) {
        done(null, user);
      } else {
        if (user.password != password) throw new Error("Invalalid Credetials");
      }
    } catch (error) {
      done(error, null);
    }
  })
);

const { User } = require("../model/user");
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(200, "New User Created").json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

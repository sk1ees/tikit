const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const postRegister = async (req, res) => {
  let { name, email, password } = req.body;
  let findUser = await userModel.findOne({ email });
  if (findUser) return res.send("user already exists");
  bcrypt.genSalt(10, (err, salt) => {
    console.log(salt);
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        email,
        password: hash,
      });
      res.json(user);
    });
  });
};

module.exports = postRegister;

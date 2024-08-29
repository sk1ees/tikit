require("dotenv").config();
const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postLogin = async (req, res) => {
  let { email, password } = req.body;
  let findUser = await userModel.findOne({ email });
  if (!findUser) return res.send("something went wrong!");

  bcrypt.compare(password, findUser.password, (err, results) => {
    if (results) {
      let token = jwt.sign({ email, id: findUser._id }, process.env.SECRET);
      res.cookie("token", token);
      console.log(token);
      res.redirect("/profile");
    } else {
      res.send("something went wrong!");
    }
  });
};

module.exports = postLogin;

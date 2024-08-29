require("dotenv").config();
const jwt = require("jsonwebtoken");
let userModel = require("../models/userModel");
const isLoggedIn = async (req, res, next) => {
  let token = req.cookies.token;
  if (token && token != "") {
    let userData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userData;

    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = isLoggedIn;

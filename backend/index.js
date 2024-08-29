require("dotenv").config();
const express = require("express");
const login = require("./routes/auth/login");
const register = require("./routes/auth/register");
const postRegister = require("./routes/post-routes/post-register");
const logout = require("./routes/post-routes/logout");
const app = express();
const database = require("./config/database");
const userModel = require("./models/userModel");
const postLogin = require("./routes/post-routes/post-login");
const profile = require("./routes/initial-routes/profile");
const cookieParser = require("cookie-parser");
const isLoggedIn = require("./middleware/isLoggedIn");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi there backend!");
});

//auth-routes
app.get("/login", login);
app.get("/profile", isLoggedIn, profile);
app.get("/register", register);
app.post("/register", postRegister);
app.post("/login", postLogin);
app.post("/logout", logout);

app.listen(process.env.PORT, () => {
  console.log(`working at PORT: ${process.env.PORT}!`);
});

const logout = (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
};

module.exports = logout;

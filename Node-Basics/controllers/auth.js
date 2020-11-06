exports.getLoginPage = (req, res, next) => {
  //console.log(req.get("Cookie"));
  const loggedIn = req.session.isLoggedIn;
  //const loggedIn = req.get("Cookie");
  res.render("login", {
    title: "Login",
    path: "/login",
    isAuthenticated: loggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.setHeader("Set-Cookie", "isLoggedIn=true;Max-Age=15;HttpOnly");
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) throw new Error();
    console.log("Session destroyed");
    res.redirect("/");
  });
};

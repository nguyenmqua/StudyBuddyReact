const passport = require("passport");
require("../config/passport")(passport);
// Defining methods for the booksController
module.exports = {
  create: function(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.json(req.user);
        });
      }
    })(req, res, next);
  },
};

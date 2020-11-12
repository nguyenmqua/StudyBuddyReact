const db = require("../models");
const bcrypt = require("bcryptjs");
// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    console.log(req.body)
    db.User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new db.User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.redirect(307, "/api/login");
      }
    })
  },
};

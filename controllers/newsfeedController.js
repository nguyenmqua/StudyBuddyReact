const db = require("../models");

module.exports = {
  get: function (req, res) {
    db.Post.find({})
      .populate("userId")
      .sort({ date: -1 })
      .then((dbUser) => {
        console.log("this is dbUser: ", dbUser);
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

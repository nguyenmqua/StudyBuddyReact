const db = require("../models");

module.exports = {
<<<<<<< HEAD
    create: function(req,res){
        console.log(req.body)
        db.ProfilePic
        .create(req.body) 
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err))
    },
    put: function(req,res){
        console.log(req.body)
        db.User
        .create(req.body) 
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err))
    }
}
=======
  create: function (req, res) {
    // console.log(req.body)
    db.ProfilePic.create(req.body)
      .then((dbPost) => res.json(dbPost))
      .catch((err) => res.status(422).json(err));
  },
};
>>>>>>> 4b8848a6ccbd8c1485b422154a5a90d2346c0ca9

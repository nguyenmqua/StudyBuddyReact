const db = require("../models")

module.exports = {
    get: function(req,res){
        db.Post.find({})
            .populate("userId")
            .then(dbUser => {
            res.json(dbUser);
            })
            .catch(err => {
            res.json(err);
            });
        }
    }
const db = require("../models")

module.exports = {
    create: function(req,res){
        console.log(req.body)
        db.Users.password
        .create(req.body) 
        .then(res => db.User.findOneAndUpdate({_id: req.body.Userid}, { $push: { Comments: res._id } }, { new: true },))
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
    }
}
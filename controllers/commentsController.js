const db = require("../models")

module.exports = {
    create: function(req,res){
        console.log(req.body)
        db.Comments
        .create(req.body) 
        .then(res => db.Post.findOneAndUpdate({_id: req.body.postid}, { $push: { Comments: res._id } }, { new: true },))
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err))
    }
}
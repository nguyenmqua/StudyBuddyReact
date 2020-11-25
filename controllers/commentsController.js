const db = require("../models")

module.exports = {
    create: function(req,res){
        console.log(req.body)
        db.Comments
        .create(req.body) 
        .then(res => db.Post.findOneAndUpdate({_id: req.body.postid}, { $push: { Comments: res._id } }, { new: true },))
        .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err))
    },
    get: function (req,res) {
        db.Comments
        .find({postId: req.params.id})
        .populate("userId")
        .sort({createdAt: -1})
        .then(DBpost => res.json(DBpost))
        .catch(err => res.status(422).json(err));
    }
}
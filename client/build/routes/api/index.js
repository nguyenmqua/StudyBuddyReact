const router = require("express").Router();

const users = require("./users")
const post = require("./post")
const newsfeed = require("./newsfeed")
const comments = require("./comments")

router.use("/post", post)
router.use("/newsfeed", newsfeed)
router.use("/users", users)
router.use("/comments", comments)


module.exports = router;

const router = require("express").Router();

const users = require("./users")
const post = require("./post")
const newsfeed = require("./newsfeed")


router.use("/post", post)
router.use("/newsfeed", newsfeed)
router.use("/users", users)


module.exports = router;

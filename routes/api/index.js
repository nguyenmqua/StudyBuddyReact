const router = require("express").Router();

const users = require("./users")
const post = require("./post")
const newsfeed = require("./newsfeed")
const comments = require("./comments")
const profilePic = require("./profilePic")
const search = require("./search")
const sendMail = require("./sendMail")
const sendReset = requiret("./sendReset")

router.use("/post", post)
router.use("/newsfeed", newsfeed)
router.use("/users", users)
router.use("/comments", comments)
router.use("/profilePic", profilePic)
router.use("/search", search)
router.use("/sendMail", sendMail)
router.use("/sendReset", sendReset)

module.exports = router;

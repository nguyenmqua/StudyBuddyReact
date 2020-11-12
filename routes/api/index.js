const router = require("express").Router();
const signup = require("./signup");
const login = require("./login")
const post = require("./post")
const newsfeed = require("./newsfeed")

router.use("/signup", signup);
router.use("/login", login)
router.use("/post", post)
router.use("/newsfeed", newsfeed)
module.exports = router;

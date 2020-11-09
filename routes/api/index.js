const router = require("express").Router();
const signup = require("./signup");
const login = require("./login")
const members = require("./members")
// Book routes
router.use("/signup", signup);
router.use("/login", login)
router.use("/members/:id", members)
module.exports = router;

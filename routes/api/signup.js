const router = require("express").Router();
const signupController = require("../../controllers/registerController");
var passport = require("../../config/passport");

router.route("/")
  .post(signupController.create);

module.exports = router;

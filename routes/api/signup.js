const router = require("express").Router();
const signupController = require("../../controllers/registerController");

router.route("/")
  .post(signupController.create);

module.exports = router;

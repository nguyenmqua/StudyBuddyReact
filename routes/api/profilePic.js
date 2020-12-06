const router = require("express").Router();
const profilePicController = require("../../controllers/profilePicController");

router.route("/")
  .post(profilePicController.create)
  .put(profilePicController.put)

module.exports = router;
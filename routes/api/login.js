const router = require("express").Router();
const loginController = require("../../controllers/loginController");


router.route("/")
  .post(loginController.create)

router.route("/:id")
  .get(loginController.getById);
module.exports = router;


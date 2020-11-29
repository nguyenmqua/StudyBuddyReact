const router = require("express").Router("")
const nodemailerController = require("../controllers/nodemailerController");

router.route("/sendMail")
  .post(nodemailerController.sendMail);


router.route("/protected").get(nodemailerController.sendJWT);

module.exports = router;
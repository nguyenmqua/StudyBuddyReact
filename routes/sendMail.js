const router = require("express").Router("")
const nodemailerController = require("../controllers/nodemailerController");

router.route("/sendMail")
  .post(nodemailerController.sendMail);

module.exports = router;
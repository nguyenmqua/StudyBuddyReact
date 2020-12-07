const router = require("express").Router("")
const { get } = require("mongoose");
const welcomemailerController = require("../../controllers/welcomemailerController");

router.route("/")
  .post(welcomemailerController.sendMail);



module.exports = router;
const router = require("express").Router("")
const { get } = require("mongoose");
const welcomemailerController = require("../controllers/welcomemailerController");
// const withAuth = require('../config/middleware/middleware');

router.route("/sendMail")
  .post(welcomemailerController.sendMail);

//   router.route("/checkToken/:token")
//        .get(withAuth, nodemailerController.checkToken)


// router.route("/protected").get(nodemailerController.sendJWT);

module.exports = router;
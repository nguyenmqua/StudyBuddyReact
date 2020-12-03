const router = require("express").Router("")
const { get } = require("mongoose");
const welcomeController = require("../controllers/welcomeController");
const withAuth = require('../config/middleware/middleware');

router.route("/sendWelcome")
  .post(welcomeController.sendWelcome);

//   router.route("/checkToken/:token")
//        .get(withAuth, nodemailerController.checkToken)


// router.route("/protected").get(nodemailerController.sendJWT);

module.exports = router;
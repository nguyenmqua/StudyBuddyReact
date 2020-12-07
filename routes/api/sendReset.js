const router = require("express").Router("")
const nodemailerController = require("../controllers/nodemailerController");
const withAuth = require('../config/middleware/middleware');

router.route("/")
  .post(nodemailerController.sendReset);

router.route("/checkToken/:token")
  .get(withAuth, nodemailerController.checkToken)


// router.route("/protected").get(nodemailerController.sendJWT);

module.exports = router;
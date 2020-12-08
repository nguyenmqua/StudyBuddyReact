const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const sendResetRoutes= require("./sendReset")

const sendMailRoutes= require("./sendMail")


// API Routes
router.use("/api", apiRoutes);
router.use("/mail", sendResetRoutes);

router.use("/mail", sendMailRoutes);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.use("/", sendResetRoutes);

router.use("/", sendMailRoutes);


// If no API routes are hit, send the React app

module.exports = router;

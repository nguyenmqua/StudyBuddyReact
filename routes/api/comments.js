const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router.route("/")
  .post(commentsController.create);

router.route("/:id")
  .get(commentController.get)

module.exports = router;
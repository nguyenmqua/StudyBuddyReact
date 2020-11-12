const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
  .post(postController.create);

router.route("/:id")
  .delete(postController.remove);
  
module.exports = router;
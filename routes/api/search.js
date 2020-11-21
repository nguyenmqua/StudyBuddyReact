const router = require("express").Router();
const searchController = require("../../controllers/searchController");



router.route("/:id")
  .get(searchController.get)
module.exports = router;
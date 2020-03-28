const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").get(booksController.getSavedBooks).post(booksController.saveBook);
router.route("/:id").delete(booksController.removeBook);

module.exports = router;

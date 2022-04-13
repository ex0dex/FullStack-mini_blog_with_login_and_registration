const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post.cotroller");
const validateToken = require("../middleware/auth.middleware");

router
  .route("/")
  .post(validateToken, PostController.upload, PostController.create) //create
  .get(PostController.getAll); // get all

router.route("/:id")
      .get(PostController.getOne)
      .put(PostController.update)
      .delete(PostController.deletePost)

module.exports = router;

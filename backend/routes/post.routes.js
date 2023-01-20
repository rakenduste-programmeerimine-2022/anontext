const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller")


router.post("/new", postController.createNewPost);
router.get("/myposts", postController.getUserPosts);
router.get("/show/:postid", postController.getPost);
module.exports = router;
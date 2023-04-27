const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

router.post("/", async (req, res, next) => {
  try {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
    });
    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

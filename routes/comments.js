var route = require("express").Router(),
  { check, validationResult } = require("express-validator"),
  Comments = require("../models/Comment"),
  Stories = require("../models/Story");
route.post(
  "/:id",
  [
    check("author", "please fill the [author] value")
      .not()
      .isEmpty(),
    check("text", "please fill the [text] value")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      var story = await Stories.findById(req.params.id);
      var comment = new Comments();
      comment.author = req.body.author;
      comment.text = req.body.text;
      comment.post_id = req.params.id;
      await comment.save();
      story.Comments.push(comment);
      await story.save();
      res.status(200).json({ message: "comment created", comment: comment });
    } catch (error) {
      res.status(500).json({ error: "server error" });
    }
  }
);
module.exports = route;

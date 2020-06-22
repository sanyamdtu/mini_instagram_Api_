var route = require("express").Router(),
  multer = require("../utils/multer_upload"),
  cloudinary = require("cloudinary"),
  Stories = require("../models/Story"),
  pagination_results = require("../utils/pagination"),
  { check, validationResult } = require("express-validator");

// getting stories with pagination

route.get("/", async (req, res) => {
  try {
    var results = await pagination_results(req, res);
    if (results === "error") res.status(500).json({ error: "server error" });
  } catch {
    (err) => {
      res.status(500).json({ error: "server error" });
    };
  }
});

// posting stories using multer

route.post(
  "/",
  multer.array("images", 2),
  [
    check("caption", "please fill the [caption] value")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (req.files.length < 1) {
      res.status(400).json({
        error: "Please fill all the fields (images=files,caption=text)",
      });
    } else if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      try {
        const story = new Stories();
        var caption = req.body.caption;
        var pic1 = await cloudinary.v2.uploader.upload(req.files[0].path);
        if (req.files[1]) {
          var pic2 = await cloudinary.v2.uploader.upload(req.files[1].path);
          story.pic2 = pic2.secure_url;
        }
        story.caption = caption;
        story.pic1 = pic1.secure_url;
        await story.save();
        res.status(200).json({
          message: "Story is uploaded",
          story: story,
        });
      } catch (error) {
        res.status(500).json({ error: "server error" });
      }
    }
  }
);

module.exports = route;

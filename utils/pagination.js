var Stories = require("../models/Story"),
  pagination_results = async (req, res) => {
    try {
      var limit = 5,
        page = 1;
      let story = {
        data: [],
      };
      if (req.query.limit) limit = parseInt(req.query.limit);
      if (req.query.limit) page = parseInt(req.query.page);
      var sidx = (page - 1) * limit,
        eidx = page * limit;
      if (eidx < (await Stories.countDocuments().exec())) {
        story.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (sidx > 0) {
        story.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      await Stories.find({})
        .limit(limit)
        .skip(sidx)
        .populate("Comments")
        .exec((err, results) => {
          story.data = results;
          console.log(story);
          res.status(200).json(story);
        });
    } catch (error) {
      return "error";
    }
  };
module.exports = pagination_results;

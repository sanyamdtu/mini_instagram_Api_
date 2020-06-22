var Stories = require("../models/Story"),
  // Comments = require("../models/Comment");
  pagination_results = async (req, res) => {
    try {
      var limit = 5,
        page = 1;
      if (req.query.limit) limit = parseInt(req.query.limit);
      if (req.query.limit) page = parseInt(req.query.page);
      var sidx = (page - 1) * limit,
        eidx = page * limit,
        story = {};
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
      console.log(sidx);
      console.log(eidx);
      var stories = await Stories.find({})
        .limit(limit)
        .skip(sidx);
      story.data = stories;
      return story;
    } catch (error) {
      return "error";
    }
  };
module.exports = pagination_results;

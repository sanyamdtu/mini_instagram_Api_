var cloud = require("cloudinary");
var conf = () => {
  cloud.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  console.log("configured cloud");
};
module.exports = conf;

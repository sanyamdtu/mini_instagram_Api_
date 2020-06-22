var mul = require("multer");
module.exports = mul({
  storage: mul.diskStorage({}),
  fileFilter: (req, file, callbck) => {
    if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
      callbck(new Error("Not an Image"), false);
      return;
    }
    callbck(null, true);
  },
});

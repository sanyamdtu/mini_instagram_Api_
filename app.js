require("dotenv").config();
var express = require("express"),
  app = express(),
  connectdb = require("./models/mongodb"),
  cloud = require("./utils/cloud"),
  Stories = require("./models/Story");

//for body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting databse
connectdb();

//congfiguring cloudinary
cloud();

//welcome msg
app.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome to the api" });
});

//routes
app.use("/api/story", require("./routes/story"));
app.use("/api/comments", require("./routes/comments"));

//starting server
app.listen(process.env.PORT || 5000);

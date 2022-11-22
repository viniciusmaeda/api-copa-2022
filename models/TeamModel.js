const mongoose = require("mongoose");

const TeamModel = mongoose.model("Team", {
  name: String,
  iso: String,
});

module.exports = TeamModel;

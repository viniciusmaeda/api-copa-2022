const mongoose = require("mongoose");

const GroupModel = mongoose.model("Group", {
  name: String,
  iso: String,
});

module.exports = GroupModel;

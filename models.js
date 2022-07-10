const mongoose = require("mongoose");

const ThemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
    default: [],
  },
  url: {
    type: String,
    default: '',
  },
  img_url: {
    type: String,
    default: '',
  }
});

const Theme = mongoose.model("Theme", ThemeSchema);

module.exports = Theme;
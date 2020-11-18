const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  zodiac: { type: String },
  level: { type: String },
  // avatar: { type: File },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;

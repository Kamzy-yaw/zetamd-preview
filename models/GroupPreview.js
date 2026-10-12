import mongoose from "mongoose";
const { Schema } = mongoose;
const schema = new Schema({
  groupId: { type: String, required: true, unique: true, index: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true, match: /^[a-z0-9-]{1,80}$/ },
  imageUrl: { type: String, default: null, trim: true },
  title: { type: String, default: "ZetaMD", trim: true, maxlength: 120 },
  description: { type: String, default: "Welcome to the ZetaMD community.", trim: true, maxlength: 300 },
  useDefaultBanner: { type: Boolean, default: true },
  enabled: { type: Boolean, default: true, index: true }
}, { timestamps: true, collection: "group_previews" });
export default mongoose.models.GroupPreview || mongoose.model("GroupPreview", schema);

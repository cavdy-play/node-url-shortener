import mongoose from "mongoose";
const { Schema } = mongoose;

const UrlShortenSchema = new Schema({
  long_url: { type: String, required: true },
  clipped_url: { type: String, required: true },
  urlCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
  click_count: { type: Number, required: true, default: 0 }
});

export default mongoose.model("UrlShorten", UrlShortenSchema);

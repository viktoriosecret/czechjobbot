const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  telegramId: { type: Number, required: true, unique: true },
  fullName: String,
  phone: Number,
  interested: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  declined: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  photo: { type: String },
  gender: { type: String, enum: ["male", "female"] },
  age: { type: Number },
  city: { type: String },
  region: {
    type: String,
    enum: [
      "Praha",
      "Středočeský",
      "Jihočeský",
      "Plzeňský",
      "Karlovarský",
      "Ústecký",
      "Liberecký",
      "Královéhradecký",
      "Pardubický",
      "Vysočina",
      "Jihomoravský",
      "Olomoucký",
      "Zlínský",
      "Moravskoslezský",
    ],
  },
  professions: { type: String },
  expectedSalary: { type: Number },
  email: { type: String },
  checked: {
    type: String,
    enum: ["selected", "unselected"],
    default: "unselected",
  },
  language: { type: String, enum: ["ua", "cs"], default: "cs" },
  createdAt: { type: Date, default: Date.now },
});

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  salary: String,
  city: String,
  region: {
    type: String,
    enum: [
      "Praha",
      "Středočeský",
      "Jihočeský",
      "Plzeňský",
      "Karlovarský",
      "Ústecký",
      "Liberecký",
      "Královéhradecký",
      "Pardubický",
      "Vysočina",
      "Jihomoravský",
      "Olomoucký",
      "Zlínský",
      "Moravskoslezský",
    ],
  },
  responsibilities: [String],
  bonuses: [String],
  views: [{ type: Number, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
const Job = mongoose.model("Job", jobSchema);

module.exports = { User, Job };

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

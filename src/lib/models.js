import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    candidate_name: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// const candidateSchema = new mongoose.Schema(
//   {
//     candidate_name: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// export const Candidate =
//   mongoose.models?.Candidate || mongoose.model("Candidate", candidateSchema);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);

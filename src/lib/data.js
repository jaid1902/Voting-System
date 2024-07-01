import { connectToDb } from "./utils";

const { Post } = require("./models");

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const Votted = () => {
  alert("You already votted!");
};

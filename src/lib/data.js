import { connectToDb } from "./utils";

const { Post, User } = require("./models");

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

export const getPost = async (id) => {
  try {
    connectToDb();
    const post = await User.findById(id);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

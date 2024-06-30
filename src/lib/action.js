"use server";

import { revalidatePath } from "next/cache";
import { Candidate, Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "./auth";

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (prevState, formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) return { error: "Password doesn't match" };
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists!" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashpassword });
    await newUser.save();
    console.log("saved to db!");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addCandidate = async (formData) => {
  const { candidate_name, party, img, description, count } =
    Object.fromEntries(formData);
  console.log(candidate_name, party, img, description, count);
  try {
    connectToDb();
    const addCandidate = new Post({
      candidate_name,
      party,
      img,
      description,
      count,
    });
    await addCandidate.save();
    revalidatePath("/admin");
    console.log("Candidate Inserted");
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

export const addCount = async (prevState, formData) => {
  const { candidate_name } = Object.fromEntries(formData);
  const counter = await Post.findOne({ candidate_name });
  const party = counter.party;
  const img = counter.img;
  const desc = counter.description;
  const co = counter.count;
  await Post.deleteOne({ candidate_name });
  const addpost = new Post({
    candidate_name,
    party,
    img,
    description: desc,
    count: co + 1,
  });
  await addpost.save();
  console.log("Candidate Inserted");
  console.log(counter);
};

export const deletePost = async (candidate_name) => {
  console.log(candidate_name);
  try {
    connectToDb();
    await Post.deleteOne({ candidate_name });
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Delete post!");
  }
};

"use client";

import styles from "./AdminPosts.module.css";
import { deletePost } from "@/lib/action";

export default function AdminPosts({ posts }) {
  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id} className={styles.container}>
            <div>{post.candidate_name}</div>
            <button
              onClick={() => deletePost(post.candidate_name)}
              className={styles.btn}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

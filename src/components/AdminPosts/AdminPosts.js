"use client";

import styles from "./AdminPosts.module.css";
import { deletePost } from "@/lib/action";

export default function AdminPosts({ posts }) {
  return (
    <div>
      <div>
        {posts.map((post, index) => (
          <div key={post.id || index} className={styles.container}>
            <div>{post.candidate_name}</div>

            <form action={deletePost}>
              <input type="hidden" name="id" value={post._id} />
              <button className={styles.btn}>Delete</button>
            </form>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

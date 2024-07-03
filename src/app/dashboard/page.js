import { PostCard } from "@/components/PostCard/PostCard";
import styles from "./dashboard.module.css";
import Link from "next/link";
import { getPost, getPosts } from "@/lib/data";
import { auth } from "@/lib/auth";

// const getData = async () => {
//   const res = await fetch(process.env.URL + "api", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong! ");
//   }
//   return res.json();
// };

const Dashboard = async () => {
  const posts = await getPosts();
  const session = await auth();
  const candidate = await getPost(session?.user?.id);
  console.log(candidate);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          Jackie Chan Cartoon Characters Championship 2024
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            A competition to determine the most popular character from the
            Jackie Chan cartoon series.
          </p>
          <p>July 2024 (Exact dates to be announced)</p>
        </div>
        <div>
          {candidate?.count >= 1 ? (
            <div className={styles.msg}>You have Already Votted🎉 </div>
          ) : (
            <Link href="/dashboard/Voting" className={styles.vote}>
              Click to Vote
            </Link>
          )}
        </div>
      </div>
      <div className={styles.container}>
        {posts.map((post, index) => (
          <PostCard key={post.id || index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

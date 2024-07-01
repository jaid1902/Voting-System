import VotingForm from "@/components/VotingForm/votingform";
import styles from "./vote.module.css";
import { getPosts } from "@/lib/data";

// const getData = async () => {  
//   const res = await fetch(process.env.URL + "api", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong! ");
//   }
//   return res.json();
// };

export default async function Voting() {
  const posts = await getPosts();
  return (
    <div className={styles.box}>
      <VotingForm posts={posts} />
    </div>
  );
}

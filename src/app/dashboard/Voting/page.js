import VotingForm from "@/components/VotingForm/votingform";
import styles from "./vote.module.css";
import { getPost, getPosts } from "@/lib/data";
import Check from "@/components/Check/Check";
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

const session = await auth();
const candidate = await getPost(session?.user?.id);

export default async function Voting() {
  const posts = await getPosts();
  return (
    <div className={styles.box}>
      <VotingForm posts={posts} />
      <Check count={candidate?.count} />
    </div>
  );
}

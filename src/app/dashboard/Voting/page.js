import VotingForm from "@/components/VotingForm/votingform";
import styles from "./vote.module.css";
import { getPosts, getUser } from "@/lib/data";
import Check from "@/components/Check/Check";
import { auth } from "@/lib/auth";

export default async function Voting() {
  const posts = await getPosts();
  const session = await auth();
  const candidate = await getUser(session?.user?.id);
  return (
    <div className={styles.box}>
      <VotingForm posts={posts} />
      <Check count={candidate?.count} />
    </div>
  );
}

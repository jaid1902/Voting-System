import Link from "next/link";
import { Links } from "./Links/link";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";
export default async function Navbar() {
  const session = await auth();
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
        Online Voting System
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}

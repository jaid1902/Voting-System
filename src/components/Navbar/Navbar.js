import { Links } from "./Links/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Online Voting System</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

import { LoginForm } from "@/components/LoginForm/LoginForm";
import styles from "./login.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

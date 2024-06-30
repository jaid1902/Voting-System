import { RegisterForm } from "@/components/RegistermForm/RegisterForm";
import styles from "./register.module.css";
export default function Register() {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
}

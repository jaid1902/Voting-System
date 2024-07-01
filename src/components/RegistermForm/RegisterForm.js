"use client";
import React, { useEffect } from "react";
import styles from "./RegisterForm.module.css";
import Link from "next/link";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.register}>Register</div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          required
        />
      </div>
      <div>
        <label>Email : </label>
        <input type="email" placeholder="Enter email" name="email" required />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <div>
        <label>Re-Password : </label>
        <input
          type="password"
          placeholder="re-enter password"
          name="passwordRepeat"
          required
        />
      </div>
      <div>
        <button>Register</button>
      </div>
      <div className={styles.error}> {state?.error}</div>
      <Link href="/login" className={styles.link}>
        {"Already have an account?  "}
        <b>Login</b>
      </Link>
    </form>
  );
};

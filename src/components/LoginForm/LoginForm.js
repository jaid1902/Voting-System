"use client";
import React from "react";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.login}>Login</div>
      <div>
        <label>Username : </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
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
        <button>Login</button>
      </div>
      <div>{state?.error}</div>
      <Link href="/register" className={styles.link}>
        {"Don't have an account?  "}
        <b>Register</b>
      </Link>
    </form>
  );
};

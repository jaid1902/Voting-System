"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.css";

export default function NavLinks({ link }) {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={link.path}
        className={`${styles.container} ${
          pathName === link.path && styles.active
        }`}
      >
        {link.title}
      </Link>
    </div>
  );
}

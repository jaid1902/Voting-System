"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Check({ count }) {
  const router = useRouter();
  useEffect(() => {
    if (count >= 1) {
      router.push("/dashboard");
    }
  });
  return <div></div>;
}

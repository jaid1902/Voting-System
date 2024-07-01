"use client";

import React, { useEffect } from "react";

export default function Message({ session }) {
  console.log("session", session);
  useEffect(() => {
    if (session.user.count >= 1) {
      alert("Heyyy you!");
    }
  }, []);
  return <div></div>;
}

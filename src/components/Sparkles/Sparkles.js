"use client";

import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import styles from "./sparkles.module.css";
export default function Votted() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Set initial dimensions on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.confettiContainer}>
      <ReactConfetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        tweenDuration={1000}
        gravity={0.1}
      />
      <div className={styles.result}>Thank You For Voting</div>
    </div>
  );
}

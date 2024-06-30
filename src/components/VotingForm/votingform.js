"use client";
import Image from "next/image";
import styles from "./votingform.module.css";
import { useFormState } from "react-dom"; // Check correct import, likely should be 'react-hook-form'
import { addCount } from "@/lib/action";
import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function VotingForm({ posts }) {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
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
  }, []); // Empty dependency array means this effect runs only once on mount

  const [open, setOpen] = useState(true);
  const [state, formAction] = useFormState(addCount, undefined);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      {open && (
        <form
          className={styles.form}
          onSubmit={handleFormSubmit}
          action={formAction}
        >
          <div className={styles.title}>Vote For Your Candidate</div>
          {posts.map((post, index) => (
            <div key={post.id || index} className={styles.container}>
              <div className={styles.imgcontainer}>
                <Image
                  src={post.img}
                  height={60}
                  width={60}
                  alt={post.candidate_name}
                  className={styles.img}
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  type="radio"
                  name="candidate_name"
                  value={post.candidate_name}
                  id={post.candidate_name}
                  required
                />
                <label htmlFor={post.candidate_name}>
                  {post.candidate_name}
                </label>
              </div>
            </div>
          ))}

          <div>
            <button>Vote</button>
          </div>
        </form>
      )}
      {!open && (
        <div className={styles.confettiContainer}>
          <ReactConfetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            tweenDuration={1000}
          />
          <div className={styles.result}>Thank You For Voting</div>
        </div>
      )}
    </div>
  );
}

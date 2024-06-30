import Image from "next/image";
import styles from "./result.module.css";

async function getData() {
  try {
    const res = await fetch(process.env.URL + "api", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to Fetch Data!");
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error("Something went Wrong!");
  }
}

export default async function Result() {
  const posts = await getData();
  const count = posts.map((post) => post.count);
  const max = Math.max.apply(null, count);
  const array = posts.filter((post) => post.count === max);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Congratulations to the Winner!</div>
      {array.map((item, index) => (
        <div key={index} className={styles.box}>
          <div>
            <Image
              src={item.img}
              height={300}
              width={300}
              alt="Candidate_Symbol"
              className={styles.image}
            />
          </div>
          <div className={styles.textcontainer}>
            <p>
              <strong>{item.candidate_name}</strong> received
              <strong> {item.count} votes</strong> and has been chosen as the
              winner!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

import AdminForm from "@/components/AdminForm/AdminForm";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import styles from "./admin.module.css";
const getData = async () => {
  const res = await fetch(process.env.URL + "api", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Error fetching data");
  return res.json();
};

export default async function Admin() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <AdminPosts posts={posts} />
      </div>
      <div className={styles.form}>
        <AdminForm />
      </div>
    </div>
  );
}

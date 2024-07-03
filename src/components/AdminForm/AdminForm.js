"use client";
import { addCandidate } from "@/lib/action";
import styles from "./AdminForm.module.css";
import { useFormState } from "react-dom";

export default function AdminForm() {
  const [state, formAction] = useFormState(addCandidate, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.register}>Add Candidate</div>
      <div>
        <input
          type="text"
          placeholder="Enter candidate name"
          name="candidate_name"
          required
        />
      </div>
      <div>
        <input type="text" placeholder="Enter party" name="party" required />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter symbol (Image)"
          name="img"
          required
        />
      </div>
      <div>
        <textarea
          rows={5}
          columns={50}
          className={styles.area}
          name="description"
          placeholder="Enter Description"
          required
        />
      </div>
      <div>
        <input type="hidden" name="count" value={0} />
      </div>
      <div>
        <button>Add</button>
      </div>
      {state?.error}
    </form>
  );
}

import { Container } from "./Container";
import styles from "./Philosophy.module.css";

const tenets = [
  {
    label: "01",
    title: "Slow specification",
    body: "We resist the rush. Materials are chosen for how they behave in five years, not for how they photograph in one.",
  },
  {
    label: "02",
    title: "Honest budgets",
    body: "We tell you what things cost early, in writing, and we don't surprise you later.",
  },
  {
    label: "03",
    title: "Quiet rooms",
    body: "A room should recede behind the people in it. We design to leave space for the life that happens there.",
  },
];

export function Philosophy() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrow">How we work</p>
          <h2 className={styles.title}>
            Three things we keep coming back to.
          </h2>
        </div>
        <ol className={styles.list}>
          {tenets.map((t) => (
            <li key={t.label} className={styles.item}>
              <span className={styles.label}>{t.label}</span>
              <h3 className={styles.itemTitle}>{t.title}</h3>
              <p className={styles.body}>{t.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

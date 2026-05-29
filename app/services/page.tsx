import Link from "next/link";
import { Container } from "@/components/site/Container";
import { UniversalButton } from "@/components/UniversalButton";
import styles from "./page.module.css";

const services = [
  {
    title: "Full home design",
    description:
      "Floorplan to final styling. We handle every selection, every order, every install. Typical engagements run 9–14 months.",
    starts: "From $45,000",
  },
  {
    title: "Single room",
    description:
      "A focused engagement on one room — usually a living room, primary bedroom, or kitchen refresh. 3–5 months.",
    starts: "From $14,000",
  },
  {
    title: "Consultation only",
    description:
      "A half-day in your home with a written direction document afterward. For homeowners who want a plan they'll execute themselves.",
    starts: "$1,800 flat",
  },
];

export default function ServicesPage() {
  return (
    <article className={styles.page}>
      <Container width="narrow">
        <header className={styles.intro}>
          <p className="eyebrow">Services</p>
          <h1 className={styles.title}>
            Three ways we work, all of them <em>slow on purpose</em>.
          </h1>
          <p className={styles.lede}>
            Every engagement starts the same way: a short conversation, then a
            walk-through, then a written proposal. We never quote on the phone.
          </p>
        </header>
      </Container>

      <Container>
        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s.title} className={styles.item}>
              <h2 className={styles.itemTitle}>{s.title}</h2>
              <p className={styles.itemBody}>{s.description}</p>
              <p className={styles.starts}>{s.starts}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container width="narrow">
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to begin?</h2>
          <p className={styles.ctaBody}>
            Tell us about your project. We’ll write back within two business
            days.
          </p>
          <Link href="/consultation" className={styles.ctaLink}>
            <UniversalButton
              variant="primary"
              size="large"
              fullWidth={false}
              loading={false}
              rounded={false}
              elevation={0}
              animationPreset="none"
              color="default"
              leftIcon={null}
              rightIcon={null}
              type="button"
            >
              Request a consultation
            </UniversalButton>
          </Link>
        </div>
      </Container>
    </article>
  );
}

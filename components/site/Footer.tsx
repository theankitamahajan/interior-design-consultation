import Link from "next/link";
import { Container } from "./Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.brandBlock}>
            <p className={styles.brand}>Atelier Maren</p>
            <p className={styles.tagline}>
              Quiet rooms, made to last. Based in the Pacific Northwest, working
              everywhere.
            </p>
          </div>
          <div className={styles.linksGroup}>
            <p className="eyebrow">Visit</p>
            <Link href="/studio" className={styles.link}>
              Studio
            </Link>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
            <Link href="/consultation" className={styles.link}>
              Consultation
            </Link>
          </div>
          <div className={styles.linksGroup}>
            <p className="eyebrow">Contact</p>
            <a href="mailto:hello@ateliermaren.com" className={styles.link}>
              hello@ateliermaren.com
            </a>
            <p className={styles.muted}>By appointment only</p>
          </div>
        </div>
        <div className={styles.legal}>
          <span>© Atelier Maren</span>
          <span>Made with care</span>
        </div>
      </Container>
    </footer>
  );
}

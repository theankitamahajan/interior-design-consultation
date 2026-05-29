import Link from "next/link";
import { Container } from "./Container";
import styles from "./Header.module.css";

const links = [
  { href: "/studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Link href="/" className={styles.brand} aria-label="Atelier Maren — home">
            <span className={styles.mark}>Atelier</span>
            <span className={styles.markSerif}>Maren</span>
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

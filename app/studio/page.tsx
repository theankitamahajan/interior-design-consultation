import Image from "next/image";
import { Container } from "@/components/site/Container";
import styles from "./page.module.css";

export default function StudioPage() {
  return (
    <article className={styles.page}>
      <Container width="narrow">
        <header className={styles.intro}>
          <p className="eyebrow">The studio</p>
          <h1 className={styles.title}>
            We are <em>two designers</em>, a project manager, and a long list of
            makers we trust.
          </h1>
        </header>
      </Container>

      <Container>
        <div className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1600&q=80"
            alt="The Atelier Maren studio, with samples laid out on a long oak table"
            width={1600}
            height={1000}
          />
        </div>
      </Container>

      <Container width="narrow">
        <div className={styles.prose}>
          <p>
            Atelier Maren began in 2019 in a small loft above a hardware store
            in Portland. We had been working on other people’s projects for too
            long without saying the things we wanted to say about how rooms
            should feel.
          </p>
          <p>
            We work on a handful of residential projects at a time — never more
            than four. We take on one commercial project a year, usually a
            restaurant or a small hospitality space, when the brief feels right.
          </p>
          <p>
            Our approach is unhurried by design. We spend the first weeks
            listening: to how you move through your house at 7am, where the
            light falls in October, what you actually cook on a Tuesday. The
            decisions we make later sit on top of that.
          </p>
          <h2 className={styles.subhead}>What we don’t do</h2>
          <p>
            We do not do flips. We do not do staging. We do not do trend-led
            interiors that need to be redone in three years. We are not the
            right studio if you want a single Pinterest aesthetic delivered
            quickly.
          </p>
        </div>
      </Container>
    </article>
  );
}

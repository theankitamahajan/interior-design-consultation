import Image from "next/image";
import { Container } from "./Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className="eyebrow">A studio in the Pacific Northwest</p>
            <h1 className={styles.headline}>
              Rooms that <em>settle</em> into the way you already live.
            </h1>
            <p className={styles.lede}>
              Atelier Maren is a small interior design practice. We work slowly
              and write things down. We choose materials that age well and
              furniture that holds up to dinner with friends.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
              alt="A sun-filled living room with linen upholstery and a low travertine table"
              width={1200}
              height={1500}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

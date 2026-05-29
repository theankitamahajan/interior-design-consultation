"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import styles from "./FeaturedProjects.module.css";

interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  image: string;
}

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrow">Selected work</p>
          <h2 className={styles.title}>A few rooms we’ve made recently.</h2>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading projects…</div>
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <ul className={styles.grid}>
            {projects.sort((a, b) => b.year - a.year).map((project, i) => (
              <li key={i} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1000}
                    className={styles.image}
                  />
                </div>
                <div className={styles.meta}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardSub}>
                    {project.location} · {project.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

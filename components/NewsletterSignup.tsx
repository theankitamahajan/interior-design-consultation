"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem("newsletter_email", email);
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to save email:", err);
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#1c1815",
        color: "#ffffff",
        padding: "64px 32px",
        marginTop: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 600,
            marginBottom: "16px",
            color: "#ffffff",
          }}
        >
          Stay in touch
        </h3>
        <p
          style={{
            fontSize: "15px",
            fontFamily: "'Cormorant Garamond', serif",
            color: "#cccccc",
            marginBottom: "32px",
          }}
        >
          A short note from the studio four times a year. New work, a few things
          we’re reading, no marketing.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "14px 20px",
              border: "1px solid #555",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: "14px",
              borderRadius: "16px",
              minWidth: "260px",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: "14px 28px",
              backgroundColor: "#B5896A",
              color: "#ffffff",
              border: "none",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            Subscribe →
          </button>
        </form>
        <p
          style={{
            fontSize: "13px",
            color: "#999999",
            marginTop: "20px",
            letterSpacing: "0.04em",
          }}
        >
          ✶ Joined by 5,200+ design enthusiasts
        </p>
        {submitted && (
          <p style={{ marginTop: "16px", color: "#8B9A7B" }}>
            Thanks — you’re on the list.
          </p>
        )}
      </div>
    </section>
  );
}

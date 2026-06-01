"use client";

import { useState } from "react";
import styles from "./page.module.css";

const styleOptions = [
  "Warm Minimal",
  "Collected & Layered",
  "Quiet Contemporary",
  "Traditional with Character",
];

const budgetOptions = [
  "Under $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];

const timelineOptions = [
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Flexible",
];

export default function ConsultationPage() {
  const [step, setStep] = useState(1);

  const [selectedStyle, setSelectedStyle] = useState("");
  const [rooms, setRooms] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        style: selectedStyle,
        rooms,
        budget,
        timeline,
        name,
        email,
      };

      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const canProceedStep2 = rooms && budget && timeline;
  const canSubmit = name.trim() && email.trim();

  if (submitted) {
    return (
      <main className={styles.page}>
        <h1>Thank you.</h1>
        <p style={{ marginTop: 16, color: "#4A433D" }}>
          We’ve received your consultation request. We’ll be in touch soon.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <p style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Consultation
      </p>

      <h1 style={{ fontSize: 40, marginBottom: 40 }}>
        Tell us about your space.
      </h1>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2>1. How should your home feel?</h2>

          <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
            {styleOptions.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStyle(s)}
                style={{
                  padding: 16,
                  border:
                    selectedStyle === s
                      ? "2px solid #B5896A"
                      : "1px solid #ccc",
                  background: "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!selectedStyle}
            style={{
              marginTop: 30,
              opacity: !selectedStyle ? 0.5 : 1,
              cursor: !selectedStyle ? "not-allowed" : "pointer",
            }}
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2>2. What are you planning?</h2>

          <input
            placeholder="Rooms or areas (e.g. Living room, kitchen)"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              marginTop: 20,
              border: "1px solid #ccc",
            }}
          />

          <div style={{ marginTop: 20 }}>
            <p>Budget</p>
            <div style={{ display: "grid", gap: 10 }}>
              {budgetOptions.map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  style={{
                    padding: 14,
                    border:
                      budget === b
                        ? "2px solid #B5896A"
                        : "1px solid #ccc",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <p>Timeline</p>
            <div style={{ display: "grid", gap: 10 }}>
              {timelineOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeline(t)}
                  style={{
                    padding: 14,
                    border:
                      timeline === t
                        ? "2px solid #B5896A"
                        : "1px solid #ccc",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            disabled={!canProceedStep2}
            style={{
              marginTop: 30,
              opacity: !canProceedStep2 ? 0.5 : 1,
              cursor: !canProceedStep2 ? "not-allowed" : "pointer",
            }}
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2>3. Your details</h2>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              marginTop: 20,
              border: "1px solid #ccc",
            }}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: 14,
              marginTop: 12,
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={!canSubmit || loading}
            style={{
              marginTop: 30,
              background: "#B5896A",
              color: "white",
              padding: 14,
              opacity: !canSubmit || loading ? 0.5 : 1,
              cursor:
                !canSubmit || loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "Submit request"}
          </button>
        </div>
      )}
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("mock_user");
    setLoggedIn(!!user);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 120,
        textAlign: "center",
      }}
    >
      <div className="card" style={{ padding: 48, maxWidth: 720 }}>
        {!loggedIn ? (
          <>
            <h1 className="glow" style={{ fontSize: 56, marginBottom: 16 }}>
              ⭐ Stellar Hub
            </h1>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 18,
                marginBottom: 32,
              }}
            >
              A gaming community built on competition, events, and cosmic vibes.
              Join tournaments, community nights, and connect through Discord 🌌
            </p>

            <Link
              href="/signup"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #ff8ad4, #ffb7e3)",
                color: "#0b0b12",
                fontWeight: 700,
                boxShadow: "0 0 28px rgba(255,138,212,0.6)",
              }}
            >
              Claim your handle ✨
            </Link>
          </>
        ) : (
          <>
            <h1 className="glow" style={{ fontSize: 52, marginBottom: 16 }}>
              Welcome back, Commander 🚀
            </h1>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 18,
                marginBottom: 32,
              }}
            >
              Your next tournament awaits. Jump into upcoming events or manage
              your participation.
            </p>

            <Link
              href="/events"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #5dffb1, #9dffd2)",
                color: "#0b0b12",
                fontWeight: 700,
                boxShadow: "0 0 28px rgba(93,255,177,0.5)",
              }}
            >
              View Events 🏆
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

"use client";

import DiscordStats from "@/components/DiscordStats";

export default function Home() {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 120,
          paddingBottom: 120,
          textAlign: "center",
        }}
      >
        <div
          className="card"
          style={{
            padding: 48,
            maxWidth: 720,
            width: "100%",
          }}
        >
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

          <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noopener noreferrer"
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
            Join the Discord 🚀
          </a>
        </div>
      </section>

      <DiscordStats />
    </>
  );
}

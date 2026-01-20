"use client";

import { useEffect, useState } from "react";

type DiscordData = {
  name: string;
  presence_count: number;
  members?: { username: string }[];
};

const DISCORD_SERVER_ID = "PASTE_YOUR_SERVER_ID_HERE";

export default function DiscordStats() {
  const [data, setData] = useState<DiscordData | null>(null);

  useEffect(() => {
    fetch(`https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return null;

  const memberCount = data.members?.length ?? "—";

  return (
    <section
      style={{
        position: "relative",
        zIndex: 5,
        padding: "140px 24px",
        backgroundColor: "rgba(11,11,18,0.95)",
        borderTop: "1px solid rgba(255,138,212,0.15)",
      }}
    >
      <h2
        className="glow"
        style={{
          textAlign: "center",
          fontSize: 32,
          marginBottom: 16,
        }}
      >
        🌌 {data.name}
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "var(--text-muted)",
          marginBottom: 48,
        }}
      >
        Live Discord Community
      </p>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 32,
        }}
      >
        <StatCard icon="👥" value={memberCount} label="Members" />
        <StatCard icon="🟢" value={data.presence_count} label="Online" />
        <StatCard icon="🚀" value="Live" label="Server Status" />
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string | number;
  label: string;
}) {
  return (
    <div
      className="card"
      style={{
        padding: 40,
        textAlign: "center",
        boxShadow: "0 0 40px rgba(255,138,212,0.25)",
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 12 }}>{icon}</div>

      <div className="glow" style={{ fontSize: 36, fontWeight: 700 }}>
        {value}
      </div>

      <div
        style={{
          marginTop: 8,
          color: "var(--text-muted)",
          fontSize: 16,
        }}
      >
        {label}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  game: string;
  date: string;
  max_slots: number;
  status: "open" | "full" | "closed";
};

const MOCK_EVENTS: Event[] = [
  {
    id: "galactic-showdown",
    title: "Galactic Showdown",
    game: "Starfield Arena",
    date: "2026-02-10T18:00:00Z",
    max_slots: 64,
    status: "open",
  },
  {
    id: "neon-night-cup",
    title: "Neon Night Cup",
    game: "Cyber Clash",
    date: "2026-02-18T20:00:00Z",
    max_slots: 32,
    status: "full",
  },
  {
    id: "community-chill",
    title: "Community Chill Games",
    game: "Various",
    date: "2026-01-28T17:00:00Z",
    max_slots: 100,
    status: "closed",
  },
];

const statusStyle = (status: Event["status"]) => {
  if (status === "open") return { label: "Open", color: "#5dffb1" };
  if (status === "full") return { label: "Full", color: "#ffb347" };
  return { label: "Closed", color: "#ff6b6b" };
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setEvents(MOCK_EVENTS);
      setLoading(false);
    }, 600);

    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ paddingTop: 140, paddingBottom: 120 }}>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <h1 className="glow" style={{ fontSize: 52, textAlign: "center" }}>
          🏆 Events & Tournaments
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            margin: "16px 0 64px",
            fontSize: 18,
          }}
        >
          Competitive tournaments and chill community events 🌌
        </p>

        {loading && (
          <p style={{ textAlign: "center", opacity: 0.6 }}>Loading events…</p>
        )}

        {!loading && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
            }}
          >
            {events.map((event) => {
              const s = statusStyle(event.status);

              return (
                <div key={event.id} className="card" style={{ padding: 32 }}>
                  <span
                    style={{
                      display: "inline-block",
                      marginBottom: 12,
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      color: s.color,
                      border: `1px solid ${s.color}`,
                    }}
                  >
                    {s.label}
                  </span>

                  <h3 className="glow" style={{ fontSize: 24 }}>
                    {event.title}
                  </h3>

                  <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
                    🎮 {event.game}
                  </p>

                  <p style={{ color: "var(--text-muted)" }}>
                    📅 {new Date(event.date).toLocaleString()}
                  </p>

                  {event.status === "open" ? (
                    <Link
                      href={`/events/${event.id}`}
                      style={{
                        display: "inline-block",
                        marginTop: 24,
                        padding: "10px 22px",
                        borderRadius: 999,
                        background: "linear-gradient(135deg, #ff8ad4, #ffb7e3)",
                        color: "#0b0b12",
                        fontWeight: 600,
                      }}
                    >
                      View Details ✨
                    </Link>
                  ) : (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 24,
                        padding: "10px 22px",
                        borderRadius: 999,
                        opacity: 0.4,
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      Registration Closed
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

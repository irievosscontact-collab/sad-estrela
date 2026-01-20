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

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = MOCK_EVENTS.find((e) => e.id === params.slug);

  if (!event) {
    return (
      <main style={{ paddingTop: 140, textAlign: "center" }}>
        <h1 className="glow">Event not found</h1>
        <Link href="/events">← Back to events</Link>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: 140, paddingBottom: 120 }}>
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <Link href="/events" style={{ opacity: 0.6 }}>
          ← Back to events
        </Link>

        <h1 className="glow" style={{ fontSize: 48, marginTop: 24 }}>
          {event.title}
        </h1>

        <p style={{ marginTop: 12, color: "var(--text-muted)" }}>
          🎮 {event.game}
        </p>

        <p style={{ color: "var(--text-muted)" }}>
          📅 {new Date(event.date).toLocaleString()}
        </p>

        <p style={{ color: "var(--text-muted)" }}>
          👥 Max slots: {event.max_slots}
        </p>

        <div className="card" style={{ padding: 32, marginTop: 40 }}>
          <p style={{ lineHeight: 1.6 }}>
            This is a mock event detail page. Later you can replace this with
            real API data or CMS content.
          </p>

          {event.status === "open" ? (
            <button
              style={{
                marginTop: 24,
                padding: "12px 28px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #ff8ad4, #ffb7e3)",
                color: "#0b0b12",
                fontWeight: 600,
              }}
            >
              Join Event ✨
            </button>
          ) : (
            <p style={{ marginTop: 24, opacity: 0.5 }}>Registration closed</p>
          )}
        </div>
      </section>
    </main>
  );
}

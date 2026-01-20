import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 120,
        borderTop: "1px solid rgba(255,138,212,0.15)",
        background: "rgba(11,11,18,0.8)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
        }}
      >
        <div>
          <h3 className="glow" style={{ marginBottom: 12 }}>
            ⭐ Stellar Hub
          </h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
            A cosmic gaming community focused on tournaments, events, and
            bringing players together through Discord 🌌
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: 12 }}>Navigation</h4>
          <ul style={{ listStyle: "none", lineHeight: 2 }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: 12 }}>Community</h4>
          <ul style={{ listStyle: "none", lineHeight: 2 }}>
            <li>
              <a
                href="https://discord.gg/YOUR_INVITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a href="#">Twitter / X</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "var(--text-muted)",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Stellar Hub. All rights reserved.
      </div>
    </footer>
  );
}

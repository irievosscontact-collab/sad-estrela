export default function About() {
  return (
    <section
      style={{
        padding: "120px 24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: 900,
          width: "100%",
          padding: 48,
          textAlign: "center",
        }}
      >
        <h2 className="glow" style={{ fontSize: 42, marginBottom: 20 }}>
          What is ⭐ Stellar Hub?
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: 18,
            lineHeight: 1.7,
          }}
        >
          Stellar Hub is a community-driven gaming space built around
          competition, creativity, and connection.
          <br />
          <br />
          We host online tournaments, community game nights, and special events
          — all organized through our Discord.
          <br />
          <br />
          Whether you’re here to compete, chill, or meet other gamers, there’s a
          place for you in our universe 🌌
        </p>
      </div>
    </section>
  );
}

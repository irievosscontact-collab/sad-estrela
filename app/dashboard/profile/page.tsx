"use client";

import { useState } from "react";

export default function ProfileThemePage() {
  const [displayName, setDisplayName] = useState("irie");
  const [bio, setBio] = useState(
    "✨ cosmic gamer ✨\n🌌 community nights\n🚀 tournaments incoming"
  );
  const [theme, setTheme] = useState("stellar");

  return (
    <main style={styles.wrapper}>
      {/* Sidebar (copy-paste, refactor later) */}
      <aside style={styles.sidebar}>
        <div style={styles.profileBox}>
          <div style={styles.avatar} />
          <div>
            <strong>irie</strong>
            <div style={{ opacity: 0.6 }}>@irie</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a href="/dashboard" style={styles.navItem}>
            Overview
          </a>
          <a style={styles.navItemActive}>Profile & Theme</a>
          <a href="/dashboard/page-editor" style={styles.navItem}>
            Your Personal Page
          </a>
          <a style={styles.navItem}>Templates</a>
        </nav>

        <button style={styles.logout}>Logout</button>
      </aside>

      {/* Content */}
      <section style={styles.content}>
        <div style={styles.grid}>
          {/* MAIN EDITOR */}
          <div className="card" style={styles.editor}>
            <div style={styles.editorHeader}>
              <h2>Your Stellar Hub Profile</h2>
              <span style={styles.saved}>● Saved</span>
            </div>

            {/* Handle / Display Name */}
            <div style={styles.row}>
              <Field label="Handle">
                <input
                  disabled
                  value="irie"
                  style={{ ...styles.input, opacity: 0.6 }}
                />
              </Field>

              <Field label="Display Name">
                <input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  style={styles.input}
                />
              </Field>
            </div>

            {/* Bio */}
            <Field
              label="Bio"
              hint="Main game? Rank? What do you host or play?"
            >
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={200}
                style={styles.textarea}
              />
              <div style={styles.counter}>{bio.length}/200</div>
            </Field>

            {/* Tags */}
            <div style={styles.tags}>
              <span style={styles.tag}>Fighting Games</span>
              <span style={styles.tag}>Tournament Host</span>
              <span style={styles.tag}>Discord Regular</span>
            </div>

            {/* Theme selector */}
            <div>
              <h3 style={{ marginBottom: 12 }}>Color Theme</h3>

              <div style={styles.themes}>
                <ThemeCard
                  active={theme === "stellar"}
                  onClick={() => setTheme("stellar")}
                  title="Stellar"
                />
                <ThemeCard title="Indigo" />
                <ThemeCard title="Emerald" />
                <ThemeCard title="Neon" />
                <ThemeCard locked title="Coming Soon" />
              </div>
            </div>
          </div>

          {/* RIGHT RAIL */}
          <div style={styles.rightRail}>
            {/* Preview */}
            <div className="card" style={styles.previewCard}>
              <h3>Preview</h3>

              <div style={styles.preview}>
                <div style={styles.avatarRing}>
                  <div style={styles.avatarLg} />
                </div>

                <strong>{displayName}</strong>
                <div style={{ opacity: 0.6 }}>@irie</div>

                <pre style={styles.previewBio}>{bio}</pre>

                <button style={styles.primaryBtn}>View Public Profile</button>
                <button style={styles.secondaryBtn}>Set Avatar</button>
              </div>
            </div>

            {/* Connected accounts */}
            <div className="card" style={styles.connections}>
              <h3>Connected Accounts</h3>

              <Account name="Discord" connected />
              <Account name="Google" />
              <Account name="Riot ID" connected />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small Components ---------- */

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ flex: 1 }}>
      <label style={styles.label}>{label}</label>
      {hint && <div style={styles.hint}>{hint}</div>}
      {children}
    </div>
  );
}

function ThemeCard({
  title,
  active,
  locked,
  onClick,
}: {
  title: string;
  active?: boolean;
  locked?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.themeCard,
        opacity: locked ? 0.4 : 1,
        border: active
          ? "1px solid var(--pink)"
          : "1px solid rgba(255,255,255,0.12)",
        cursor: locked ? "not-allowed" : "pointer",
      }}
    >
      <strong>{title}</strong>
      {locked && <span style={{ fontSize: 12 }}>🔒</span>}
    </div>
  );
}

function Account({ name, connected }: { name: string; connected?: boolean }) {
  return (
    <div style={styles.account}>
      <span>{name}</span>
      <button
        style={{
          ...styles.accountBtn,
          background: connected ? "rgba(0,255,170,0.15)" : "transparent",
          color: connected ? "#7dffd1" : "white",
        }}
      >
        {connected ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    paddingTop: 80,
  },

  sidebar: {
    width: 260,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    borderRight: "1px solid rgba(255,255,255,0.08)",
  },

  profileBox: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff8ad4, #6aa9ff)",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  navItem: {
    padding: "10px 14px",
    borderRadius: 10,
    opacity: 0.6,
  },

  navItemActive: {
    padding: "10px 14px",
    borderRadius: 10,
    background: "rgba(255,138,212,0.15)",
    fontWeight: 600,
  },

  logout: {
    marginTop: "auto",
    opacity: 0.6,
    background: "none",
    border: "none",
    color: "white",
  },

  content: {
    flex: 1,
    padding: 32,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 24,
  },

  editor: {
    padding: 32,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  editorHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  saved: {
    color: "#7dffd1",
    fontSize: 12,
  },

  row: {
    display: "flex",
    gap: 16,
  },

  label: {
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 6,
    display: "block",
  },

  hint: {
    fontSize: 12,
    opacity: 0.5,
    marginBottom: 6,
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
  },

  textarea: {
    width: "100%",
    minHeight: 120,
    padding: 12,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
    resize: "none",
  },

  counter: {
    fontSize: 12,
    opacity: 0.5,
    textAlign: "right",
    marginTop: 4,
  },

  tags: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },

  tag: {
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(255,138,212,0.15)",
    fontSize: 12,
  },

  themes: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
  },

  themeCard: {
    padding: 16,
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rightRail: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  previewCard: {
    padding: 24,
  },

  preview: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    textAlign: "center",
  },

  avatarRing: {
    padding: 4,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff8ad4, #6aa9ff)",
  },

  avatarLg: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "#111",
  },

  previewBio: {
    opacity: 0.7,
    whiteSpace: "pre-wrap",
    marginTop: 8,
  },

  primaryBtn: {
    marginTop: 12,
    padding: "8px 16px",
    borderRadius: 999,
    background: "white",
    color: "#0b0b12",
    fontWeight: 600,
  },

  secondaryBtn: {
    padding: "8px 16px",
    borderRadius: 999,
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "white",
  },

  connections: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  account: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  accountBtn: {
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.25)",
    background: "transparent",
    color: "white",
  },
};

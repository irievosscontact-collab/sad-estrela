"use client";

export default function DashboardPage() {
  return (
    <main style={styles.wrapper}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.profileBox}>
          <div style={styles.avatar} />
          <div>
            <strong>irie</strong>
            <div style={{ opacity: 0.6 }}>@irie</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a style={styles.navItemActive}>Overview</a>
          <a href="/dashboard/profile" style={styles.navItem}>
            Profile & Theme
          </a>
          <a href="/dashboard/page-editor" style={styles.navItem}>
            Your Personal Page
          </a>

          <a style={styles.navItem}>Templates</a>
        </nav>

        <button style={styles.logout}>Logout</button>
      </aside>

      {/* Content */}
      <section style={styles.content}>
        {/* Account Overview */}
        <div className="card" style={styles.overviewCard}>
          <div>
            <h2>Account Overview</h2>
            <p style={{ opacity: 0.6 }}>irie · @irie</p>
          </div>

          <div style={styles.actions}>
            <button style={styles.actionBtn}>Edit Profile</button>
            <button style={styles.actionBtnGhost}>Add Links</button>
            <button style={styles.actionBtnGhost}>Customize</button>
          </div>

          <div style={styles.stats}>
            <Stat title="Points" value="530" />
            <Stat title="Profile Views" value="54" />
            <Stat title="Links" value="3" />
          </div>
        </div>

        {/* Bottom Grid */}
        <div style={styles.grid}>
          {/* Profile Preview */}
          <div className="card" style={{ padding: 24 }}>
            <h3>Profile Preview</h3>

            <div style={styles.preview}>
              <div style={styles.avatarLg} />
              <div>
                <strong>irie</strong>
                <div style={{ opacity: 0.6 }}>@irie</div>
                <pre style={styles.bio}>
                  ✨ cosmic gamer ✨ 🌌 community nights 🚀 tournaments incoming
                </pre>
              </div>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="card" style={{ padding: 24 }}>
            <h3>Profile Completion</h3>
            <strong style={{ fontSize: 28 }}>100%</strong>

            <div style={styles.progressBar}>
              <div style={styles.progressFill} />
            </div>

            <ul style={styles.checklist}>
              <li>✔ Add display name</li>
              <li>✔ Claim handle</li>
              <li>✔ Upload avatar</li>
              <li>✔ Write bio</li>
              <li>✔ Add first link</li>
            </ul>
          </div>

          {/* Traffic Snapshot */}
          <div className="card" style={{ padding: 24 }}>
            <h3>Traffic Snapshot</h3>

            <div style={styles.traffic}>
              <div>
                <strong>Views</strong>
                <div style={styles.big}>54</div>
              </div>
              <div>
                <strong>Visitors</strong>
                <div style={styles.big}>10</div>
              </div>
            </div>

            <p style={{ opacity: 0.6, marginTop: 12 }}>
              Analytics coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div style={styles.stat}>
      <div style={{ opacity: 0.6 }}>{title}</div>
      <strong style={{ fontSize: 28 }}>{value}</strong>
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
    cursor: "pointer",
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
    cursor: "pointer",
  },

  content: {
    flex: 1,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },

  overviewCard: {
    padding: 32,
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 24,
  },

  actions: {
    display: "flex",
    gap: 12,
  },

  actionBtn: {
    padding: "8px 18px",
    borderRadius: 999,
    fontWeight: 600,
    background: "white",
    color: "#0b0b12",
  },

  actionBtnGhost: {
    padding: "8px 18px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.25)",
    background: "transparent",
    color: "white",
  },

  stats: {
    gridColumn: "1 / -1",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
  },

  stat: {
    padding: 20,
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 24,
  },

  preview: {
    display: "flex",
    gap: 16,
    marginTop: 16,
  },

  avatarLg: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff8ad4, #6aa9ff)",
  },

  bio: {
    marginTop: 8,
    opacity: 0.7,
    whiteSpace: "pre-wrap",
  },

  progressBar: {
    height: 8,
    background: "rgba(255,255,255,0.1)",
    borderRadius: 999,
    margin: "12px 0",
    overflow: "hidden",
  },

  progressFill: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #ff8ad4, #6aa9ff)",
  },

  checklist: {
    listStyle: "none",
    padding: 0,
    marginTop: 12,
    opacity: 0.8,
  },

  traffic: {
    display: "flex",
    gap: 32,
    marginTop: 16,
  },

  big: {
    fontSize: 28,
    fontWeight: 700,
  },
};

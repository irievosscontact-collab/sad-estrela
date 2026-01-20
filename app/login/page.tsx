"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock auth delay
    setTimeout(() => {
      localStorage.setItem("mock_user", "true");
      router.push("/events");
    }, 800);
  };

  return (
    <main style={{ paddingTop: 140, paddingBottom: 120 }}>
      <section
        style={{
          maxWidth: 420,
          margin: "0 auto",
          padding: 32,
        }}
        className="card"
      >
        <h1 className="glow" style={{ fontSize: 36, textAlign: "center" }}>
          Welcome Back
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            marginTop: 8,
            marginBottom: 32,
          }}
        >
          Sign in to continue ✨
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: 16 }}>
            <span style={{ opacity: 0.7 }}>Email</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "block", marginBottom: 24 }}>
            <span style={{ opacity: 0.7 }}>Password</span>
            <input
              type="password"
              required
              placeholder="••••••••"
              style={inputStyle}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 999,
              fontWeight: 600,
              background: "linear-gradient(135deg, #ff8ad4, #ffb7e3)",
              color: "#0b0b12",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: 24,
            opacity: 0.6,
          }}
        >
          No account?{" "}
          <Link href="/signup" className="glow">
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  marginTop: 6,
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
};

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("mock_user");
    setLoggedIn(!!user);
    setOpen(false);
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("mock_user");
    setLoggedIn(false);
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(11,11,18,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,138,212,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="glow" style={{ fontWeight: 700 }}>
          ⭐ Stellar Hub
        </Link>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>

          <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>

          {!loggedIn ? (
            <>
              <Link href="/login" style={{ opacity: 0.7 }}>
                Log in
              </Link>

              <Link
                href="/signup"
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #ff8ad4, #ffb7e3)",
                  color: "#0b0b12",
                }}
              >
                Sign up
              </Link>
            </>
          ) : (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setOpen((v) => !v)}
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Dashboard ▾
              </button>

              {open && (
                <div
                  className="card"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "calc(100% + 12px)",
                    minWidth: 180,
                    padding: 12,
                  }}
                >
                  <Link
                    href="/dashboard"
                    style={{
                      display: "block",
                      padding: "8px 12px",
                    }}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={logout}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 12px",
                      background: "transparent",
                      border: "none",
                      color: "#ff6b6b",
                      cursor: "pointer",
                    }}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

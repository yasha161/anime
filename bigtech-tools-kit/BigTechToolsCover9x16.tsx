import React from "react";
import { AbsoluteFill, useCurrentFrame, staticFile, Img } from "remotion";
import {
  fontNeueHaas,
  fontPragmatica,
  fontSpace,
  fontPlayfair,
  fontAmericanCaptain,
  fontCoolvetica,
} from "../fonts";

export const BigTechToolsCover9x16: React.FC = () => {
  const frame = useCurrentFrame();

  // Frame 0: Variant 1 — Benchmark Warm Paper Editorial (Stamp Master - PERFECT GRID BALANCE)
  // Frame 1: Variant 2 — High-Converting Split Comparison (The Trap vs 3 Secret Tools)
  // Frame 2: Variant 3 — Sleek Dark Mode Whistleblower (High-Tech Hacker & Privacy Audit)
  const variant = frame === 1 ? 2 : frame >= 2 ? 3 : 1;

  if (variant === 3) {
    // ═══════════════════════════════════════════════════════════════════
    // VARIANT 3: SLEEK DARK MODE WHISTLEBLOWER (1080x1920)
    // ═══════════════════════════════════════════════════════════════════
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "#070B12",
          color: "#FFFFFF",
          fontFamily: fontNeueHaas,
          overflow: "hidden",
        }}
      >
        {/* Neon Ambient Background Glows */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: "50%",
            transform: "translateX(-50%)",
            width: 950,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 1050,
            left: "50%",
            transform: "translateX(-50%)",
            width: 850,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(225, 29, 72, 0.22) 0%, transparent 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        {/* Inset Border Frame */}
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: "2px solid rgba(255, 255, 255, 0.14)",
            borderRadius: 40,
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Top Header */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 70,
            right: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 15,
          }}
        >
          <div
            style={{
              backgroundColor: "#E11D48",
              color: "#FFF",
              fontFamily: fontSpace,
              fontSize: 20,
              fontWeight: 800,
              padding: "10px 26px",
              borderRadius: 100,
              letterSpacing: 1.5,
              boxShadow: "0 0 24px rgba(225, 29, 72, 0.4)",
            }}
          >
            ● BIG TECH EXPOSED
          </div>
          <div
            style={{
              fontFamily: fontNeueHaas,
              fontSize: 28,
              fontWeight: 800,
              color: "rgba(255, 255, 255, 0.65)",
              letterSpacing: 1,
            }}
          >
            @yashwebsites
          </div>
        </div>

        {/* ── 1:1 SAFE-ZONE CONTAINER (Y: 420 to 1500) ── */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: 60,
            right: 60,
            height: 1080,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 20,
          }}
        >
          {/* Eyebrow Pill */}
          <div
            style={{
              fontFamily: fontSpace,
              fontSize: 22,
              fontWeight: 800,
              color: "#38BDF8",
              backgroundColor: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              padding: "8px 24px",
              borderRadius: 100,
              letterSpacing: 2,
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            ⚠️ CLASSIFIED CYBER ARCHIVE // 03 TOOLS
          </div>

          {/* Primary Hook Headline */}
          <div
            style={{
              fontFamily: fontAmericanCaptain,
              fontSize: 108,
              lineHeight: 0.95,
              letterSpacing: 2,
              color: "#FFFFFF",
              textShadow: "0 10px 30px rgba(0,0,0,0.8)",
              marginBottom: 16,
            }}
          >
            GOOGLE & APPLE
            <br />
            <span style={{ color: "#F43F5E" }}>TUMSE YEH 3 TOOLS</span>
            <br />
            CHHIPATE HAIN!
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: fontNeueHaas,
              fontSize: 28,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: 820,
              lineHeight: 1.35,
              marginBottom: 36,
            }}
          >
            Auto-Debit Fraud, Spam Inboxes & Paid Ads Se Bachne Ka Permanent
            Solution
          </div>

          {/* 3 Dark Tool Cards in Grid Safe-Zone */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "100%",
              maxWidth: 860,
            }}
          >
            {/* Tool 1 */}
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(244, 63, 94, 0.4)",
                borderRadius: 20,
                padding: "16px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <span style={{ fontSize: 32 }}>💳</span>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#FFF",
                    }}
                  >
                    Privacy.com Virtual Card
                  </div>
                  <div
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 18,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    ₹0 Limit Burner Card • Free Trials Never Auto-Debit
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(244, 63, 94, 0.2)",
                  color: "#FB7185",
                  fontFamily: fontSpace,
                  fontSize: 16,
                  fontWeight: 800,
                  padding: "6px 16px",
                  borderRadius: 8,
                  border: "1px solid rgba(244, 63, 94, 0.4)",
                }}
              >
                ₹0 LIMIT
              </div>
            </div>

            {/* Tool 2 */}
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 20,
                padding: "16px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <span style={{ fontSize: 32 }}>⚡</span>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#FFF",
                    }}
                  >
                    Temp-Mail Live OTP
                  </div>
                  <div
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 18,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    10-Minute Disposable Inbox • Zero Spam On Personal Mail
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  color: "#38BDF8",
                  fontFamily: fontSpace,
                  fontSize: 16,
                  fontWeight: 800,
                  padding: "6px 16px",
                  borderRadius: 8,
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                }}
              >
                LIVE OTP
              </div>
            </div>

            {/* Tool 3 */}
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                borderRadius: 20,
                padding: "16px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <span style={{ fontSize: 32 }}>🔍</span>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#FFF",
                    }}
                  >
                    SearXNG Deep Search
                  </div>
                  <div
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 18,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Pure Uncensored Web • Zero Ads • Direct Open Databases
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  color: "#34D399",
                  fontFamily: fontSpace,
                  fontSize: 16,
                  fontWeight: 800,
                  padding: "6px 16px",
                  borderRadius: 8,
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                }}
              >
                NO ADS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 70,
            right: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 15,
          }}
        >
          <div
            style={{
              fontFamily: fontSpace,
              fontSize: 20,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: 1.5,
            }}
          >
            📁 10 UNDERGROUND SITES READY
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              fontFamily: fontSpace,
              fontSize: 20,
              fontWeight: 900,
              padding: "12px 32px",
              borderRadius: 100,
              letterSpacing: 1,
              boxShadow: "0 10px 30px rgba(255,255,255,0.25)",
            }}
          >
            COMMENT "TOOLS" 💬
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  if (variant === 2) {
    // ═══════════════════════════════════════════════════════════════════
    // VARIANT 2: HIGH-CONVERTING SPLIT COMPARISON (1080x1920)
    // ═══════════════════════════════════════════════════════════════════
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "#F7F4EF",
          color: "#181411",
          fontFamily: fontNeueHaas,
          overflow: "hidden",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 70,
            right: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 25,
          }}
        >
          <div
            style={{
              backgroundColor: "#8B0000",
              color: "#FFF",
              fontFamily: fontSpace,
              fontSize: 20,
              fontWeight: 800,
              padding: "10px 24px",
              borderRadius: 8,
              letterSpacing: 1,
            }}
          >
            BIG TECH VS YOU
          </div>
          <div
            style={{
              fontFamily: fontNeueHaas,
              fontSize: 28,
              fontWeight: 800,
              color: "#181411",
              letterSpacing: 1,
            }}
          >
            @yashwebsites
          </div>
        </div>

        {/* ── 1:1 SAFE-ZONE CONTAINER (Y: 420 to 1500) ── */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: 60,
            right: 60,
            height: 1080,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 20,
          }}
        >
          {/* Main Title Hook */}
          <div
            style={{
              fontFamily: fontAmericanCaptain,
              fontSize: 115,
              lineHeight: 0.95,
              letterSpacing: 2,
              color: "#181411",
              marginBottom: 16,
            }}
          >
            GOOGLE & APPLE KA
            <br />
            <span
              style={{
                backgroundColor: "#FEE2E2",
                color: "#DC2626",
                padding: "2px 20px",
                borderRadius: 12,
              }}
            >
              AUTO-DEBIT TRAP!
            </span>
          </div>

          <div
            style={{
              fontFamily: fontNeueHaas,
              fontSize: 30,
              fontWeight: 700,
              color: "#4A3E35",
              marginBottom: 36,
            }}
          >
            In 3 Free Tools Se Hamesha Ke Liye Bacho:
          </div>

          {/* Split Boxes Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              width: "100%",
              maxWidth: 880,
            }}
          >
            {/* Box 1: What Big Tech Does (Red / Warning) */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "2.5px solid #FCA5A5",
                borderRadius: 24,
                padding: "22px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                textAlign: "left",
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#DC2626",
                  }}
                >
                  ❌ BIG TECH DEFAULT SETTINGS
                </div>
                <div
                  style={{
                    backgroundColor: "#FEE2E2",
                    color: "#991B1B",
                    fontSize: 15,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 6,
                  }}
                >
                  AUTOMATIC TRAP
                </div>
              </div>
              <div
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 22,
                  color: "#374151",
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                Free Trial ke baad ₹1,499 auto-cut • Personal email pe 500+ spam
                promotions • Google ads wali fake download sites!
              </div>
            </div>

            {/* VS Divider Badge */}
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 22,
                fontWeight: 900,
                color: "#FFFFFF",
                backgroundColor: "#181411",
                padding: "6px 22px",
                borderRadius: 100,
                alignSelf: "center",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                marginTop: -10,
                marginBottom: -10,
                zIndex: 30,
              }}
            >
              VS THE SOLUTION
            </div>

            {/* Box 2: What You Use (Green / Verified) */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "2.5px solid #86EFAC",
                borderRadius: 24,
                padding: "22px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                textAlign: "left",
                boxShadow: "0 10px 25px rgba(22, 163, 74, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#16A34A",
                  }}
                >
                  ✅ 3 UNDERGROUND DEFENSE TOOLS
                </div>
                <div
                  style={{
                    backgroundColor: "#DCFCE7",
                    color: "#166534",
                    fontSize: 15,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 6,
                  }}
                >
                  100% FREE
                </div>
              </div>
              <div
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 22,
                  color: "#1F2937",
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                1. <b>Privacy.com</b> ($0 Burner Card) • 2. <b>Temp-Mail</b>{" "}
                (Disposable Inbox & OTP) • 3. <b>SearXNG</b> (Uncensored Ad-Free
                Search)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 70,
            right: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 25,
          }}
        >
          <div
            style={{
              fontFamily: fontSpace,
              fontSize: 20,
              color: "#6B7280",
              fontWeight: 700,
            }}
          >
            📌 SAVE KARLO FOR LATER
          </div>
          <div
            style={{
              backgroundColor: "#DC2626",
              color: "#FFFFFF",
              fontFamily: fontSpace,
              fontSize: 22,
              fontWeight: 900,
              padding: "14px 34px",
              borderRadius: 100,
              boxShadow: "0 10px 25px rgba(220, 38, 38, 0.35)",
            }}
          >
            COMMENT "TOOLS" 💬
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // VARIANT 1: BENCHMARK WARM PAPER EDITORIAL (STAMP MASTER)
  // Perfectly matches reference reel (editz.with_aliya aesthetic)
  // ═══════════════════════════════════════════════════════════════════
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#CBB7A2",
        color: "#1C1510",
        fontFamily: fontNeueHaas,
        overflow: "hidden",
      }}
    >
      {/* Paper Grain / Subtle Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(28, 21, 16, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Editorial Outer Frame Border */}
      <div
        style={{
          position: "absolute",
          inset: 32,
          border: "2px solid rgba(28, 21, 16, 0.22)",
          borderRadius: 40,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Top Header */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 15,
        }}
      >
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 20,
            fontWeight: 800,
            color: "#1C1510",
            backgroundColor: "rgba(28, 21, 16, 0.08)",
            padding: "8px 22px",
            borderRadius: 100,
            letterSpacing: 1.5,
          }}
        >
          • SECRET TECH ARCHIVE // 04
        </div>
        <div
          style={{
            fontFamily: fontNeueHaas,
            fontSize: 28,
            fontWeight: 800,
            color: "#1C1510",
            letterSpacing: 1,
          }}
        >
          @yashwebsites
        </div>
      </div>

      {/* ── 1:1 SAFE-ZONE CONTAINER (Y: 420 to 1500) ── */}
      <div
        style={{
          position: "absolute",
          top: 420,
          left: 60,
          right: 60,
          height: 1080,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 20,
        }}
      >
        {/* Eyebrow Tag */}
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 22,
            fontWeight: 800,
            color: "#8B0000",
            backgroundColor: "#FCD5CE",
            padding: "8px 26px",
            borderRadius: 100,
            letterSpacing: 2,
            marginBottom: 24,
            textTransform: "uppercase",
            boxShadow: "0 4px 15px rgba(139, 0, 0, 0.12)",
          }}
        >
          ⚠️ CLASSIFIED BIG TECH TOOLS
        </div>

        {/* Minimal Sans + Bold Serif Transition Headline */}
        <div
          style={{
            fontFamily: fontNeueHaas,
            fontSize: 65,
            fontWeight: 800,
            letterSpacing: -1,
            color: "#1C1510",
            lineHeight: 1.05,
            marginBottom: 10,
          }}
        >
          GOOGLE AUR APPLE...
        </div>

        <div
          style={{
            fontFamily: fontPlayfair,
            fontStyle: "italic",
            fontSize: 90,
            fontWeight: 900,
            color: "#8B0000",
            lineHeight: 1.0,
            letterSpacing: -1,
            marginBottom: 16,
            textShadow: "0 4px 20px rgba(139,0,0,0.15)",
          }}
        >
          TUMSE YEH 3 TOOLS
          <br />
          <span
            style={{
              fontStyle: "normal",
              fontFamily: fontAmericanCaptain,
              fontSize: 110,
              letterSpacing: 2,
              color: "#1C1510",
              backgroundColor: "#FEF08A",
              padding: "0 24px",
              borderRadius: 16,
              display: "inline-block",
              marginTop: 6,
            }}
          >
            CHHIPATE HAIN!
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: fontNeueHaas,
            fontSize: 26,
            fontWeight: 600,
            color: "#5C4A3A",
            marginBottom: 36,
          }}
        >
          Internet Use Karne Ka Tareeka Hamesha Ke Liye Badal Jayega
        </div>

        {/* Center UI Showcase Card in Latte Warmth */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 860,
            backgroundColor: "#FAF6F0",
            border: "2px solid rgba(28, 21, 16, 0.15)",
            borderRadius: 28,
            padding: "24px 32px",
            boxShadow: "0 20px 50px rgba(28, 21, 16, 0.16)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "left",
          }}
        >
          {/* Card Item 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottom: "1px solid rgba(28, 21, 16, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 28 }}>💳</span>
              <div>
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1C1510",
                  }}
                >
                  1. Privacy.com ($0 Virtual Card)
                </div>
                <div
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 17,
                    color: "#6B5A4B",
                  }}
                >
                  Trial Khatam Hone Ke Baad Auto-Debit ₹0 Pe Blocked!
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 16,
                fontWeight: 800,
                color: "#DC2626",
                backgroundColor: "#FEE2E2",
                padding: "6px 14px",
                borderRadius: 8,
              }}
            >
              ₹0 LIMIT
            </div>
          </div>

          {/* Card Item 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottom: "1px solid rgba(28, 21, 16, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 28 }}>⚡</span>
              <div>
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1C1510",
                  }}
                >
                  2. Temp-Mail (Live OTP Inbox)
                </div>
                <div
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 17,
                    color: "#6B5A4B",
                  }}
                >
                  10-Min Temporary Email Jo OTP Dene Ke Baad Delete Ho Jaye
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 16,
                fontWeight: 800,
                color: "#0284C7",
                backgroundColor: "#E0F2FE",
                padding: "6px 14px",
                borderRadius: 8,
              }}
            >
              LIVE OTP
            </div>
          </div>

          {/* Card Item 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 28 }}>🔍</span>
              <div>
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1C1510",
                  }}
                >
                  3. SearXNG (Uncensored Search)
                </div>
                <div
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 17,
                    color: "#6B5A4B",
                  }}
                >
                  Zero Ads • Direct Unindexed Files & Open Research Archives
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 16,
                fontWeight: 800,
                color: "#059669",
                backgroundColor: "#D1FAE5",
                padding: "6px 14px",
                borderRadius: 8,
              }}
            >
              NO ADS
            </div>
          </div>

          {/* Red Pointer Arrow in Corner */}
          <div
            style={{
              position: "absolute",
              right: -25,
              top: -30,
              width: 55,
              height: 55,
              transform: "rotate(-15deg)",
              filter: "drop-shadow(0 6px 12px rgba(220, 38, 38, 0.4))",
            }}
          >
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M5 5L18 35L23 22L35 18L5 5Z"
                fill="#DC2626"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Walking Cat Silhouette Mascot (Bottom Left - Signature editz.with_aliya aesthetic) */}
      <div
        style={{
          position: "absolute",
          bottom: 75,
          left: 70,
          zIndex: 25,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          style={{
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.15))",
          }}
        >
          {/* Walking Cat Silhouette */}
          <path
            d="M12 44C14 38 18 34 26 34C32 34 38 36 44 38C50 40 54 44 54 48C54 52 48 54 40 54C28 54 18 52 14 48L12 44Z"
            fill="#1C1510"
          />
          {/* Head & Ears */}
          <circle cx="16" cy="30" r="10" fill="#1C1510" />
          <polygon points="10,22 13,12 18,22" fill="#1C1510" />
          <polygon points="16,22 21,12 24,22" fill="#1C1510" />
          {/* Tail */}
          <path
            d="M52 46C56 42 60 36 60 28C60 25 58 24 56 26C54 28 54 34 50 38"
            stroke="#1C1510"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Walking Legs */}
          <line
            x1="20"
            y1="50"
            x2="18"
            y2="60"
            stroke="#1C1510"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="52"
            x2="32"
            y2="60"
            stroke="#1C1510"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="42"
            y1="52"
            x2="40"
            y2="60"
            stroke="#1C1510"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="48"
            y1="50"
            x2="52"
            y2="58"
            stroke="#1C1510"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 18,
            fontWeight: 800,
            color: "#1C1510",
            letterSpacing: 1,
          }}
        >
          SECRET DIRECTORY // VOL. 04
        </div>
      </div>

      {/* Bottom Right CTA Badge */}
      <div
        style={{
          position: "absolute",
          bottom: 75,
          right: 70,
          zIndex: 25,
          backgroundColor: "#8B0000",
          color: "#FFFFFF",
          fontFamily: fontSpace,
          fontSize: 22,
          fontWeight: 900,
          padding: "16px 36px",
          borderRadius: 100,
          letterSpacing: 1,
          boxShadow: "0 12px 30px rgba(139, 0, 0, 0.35)",
        }}
      >
        COMMENT "TOOLS" 💬
      </div>
    </AbsoluteFill>
  );
};

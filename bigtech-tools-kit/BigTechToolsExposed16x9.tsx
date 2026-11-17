import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Audio,
  Img,
} from "remotion";
import {
  fontNeueHaas,
  fontPragmatica,
  fontSpace,
  fontPlayfair,
  fontAmericanCaptain,
  fontCoolvetica,
} from "../fonts";
import chunks from "../data/bigtech_chunks_2lines.json";

// ═════════════════════════════════════════════════════════════════════
// 1. SVG TECH LOGOS & MASCOTS
// ═════════════════════════════════════════════════════════════════════

// Google Official 4-Color Logo SVG
const GoogleLogoSvg: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M44.5 20H24V28.5H35.8C34.7 32.1 31.5 35 24 35C17.9 35 13 30.1 13 24C13 17.9 17.9 13 24 13C26.9 13 29.5 14 31.5 15.8L37.8 9.5C34.1 6 29.3 4 24 4C13 4 4 13 4 24C4 35 13 44 24 44C34.5 44 44 36.5 44 24C44 22.6 44.2 21.3 44.5 20Z"
      fill="#4285F4"
    />
    <path
      d="M6.3 14.7L13.3 19.8C15.2 15.3 19.2 13 24 13C26.9 13 29.5 14 31.5 15.8L37.8 9.5C34.1 6 29.3 4 24 4C16.8 4 10.6 8.3 6.3 14.7Z"
      fill="#EA4335"
    />
    <path
      d="M24 44C29.2 44 33.9 42.1 37.6 38.8L30.9 33.5C28.9 34.8 26.6 35.5 24 35.5C18.2 35.5 13.4 31.9 11.6 26.8L4.6 32.2C8.7 39.2 15.8 44 24 44Z"
      fill="#34A853"
    />
    <path
      d="M44.5 20H24V28.5H35.8C35.2 30.4 34 32.1 32.5 33.3L32.4 33.5L39.1 38.8C43.1 35.1 45 29.8 45 24C45 22.6 44.8 21.3 44.5 20Z"
      fill="#FBBC05"
    />
  </svg>
);

// Apple Minimalist Monochrome Icon SVG
const AppleLogoSvg: React.FC<{ size?: number; color?: string }> = ({
  size = 44,
  color = "#1C1510",
}) => (
  <svg width={size} height={size} viewBox="0 0 170 170" fill={color}>
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.71-13.98-5.87-8.91-10.43-18.7-13.68-29.36-3.26-10.66-4.89-21.05-4.89-31.18 0-14.37 3.59-26.39 10.77-36.08 7.18-9.69 16.27-14.65 27.27-14.88 4.9 0 10.22 1.3 15.97 3.91 5.75 2.61 9.69 3.97 11.83 4.08 1.63 0 5.76-1.42 12.38-4.24 6.63-2.83 12.35-4.08 17.18-3.77 13.06.65 23.36 5.56 30.9 14.73-11.53 6.96-17.18 16.43-16.96 28.4.22 9.36 3.91 17.2 11.08 23.51 7.17 6.31 15.65 9.9 25.44 10.77-2.18 6.53-4.9 12.84-8.16 18.93zM119.22 33.72c0-7.39 2.67-14.26 8.01-20.61 5.34-6.35 11.87-10.35 19.59-12 1.09 7.83-1.35 15.11-7.33 21.84-5.98 6.74-12.74 10.4-20.27 10.77z" />
  </svg>
);

// Mastercard Dual Circle Logo SVG
const MastercardSvg: React.FC<{ size?: number }> = ({ size = 44 }) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 132 82" fill="none">
    <circle cx="41" cy="41" r="41" fill="#EB001B" />
    <circle cx="91" cy="41" r="41" fill="#F79E1B" fillOpacity="0.9" />
    <path
      d="M66 14.2C72.8 21.6 77 30.9 77 41C77 51.1 72.8 60.4 66 67.8C59.2 60.4 55 51.1 55 41C55 30.9 59.2 21.6 66 14.2Z"
      fill="#FF5F00"
    />
  </svg>
);

// Walking Strolling Black Cat Mascot (Continuous Movement along the Bottom Line)
const WalkingStrollingCat: React.FC<{ frame: number }> = ({ frame }) => {
  // Cat continuously walks across the screen from left to right smoothly
  const totalSpan = 1920 + 240;
  const catX = ((frame * 3.2) % totalSpan) - 120;

  const walkCycle = (frame % 14) / 14;
  const legSwing1 = Math.sin(walkCycle * Math.PI * 2) * 8.5;
  const legSwing2 = Math.sin((walkCycle + 0.5) * Math.PI * 2) * 8.5;
  const bodyBob = Math.abs(Math.sin(walkCycle * Math.PI * 2)) * 3;
  const tailWag = Math.sin(frame * 0.22) * 11;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 28 - bodyBob,
        left: catX,
        zIndex: 25,
        display: "flex",
        alignItems: "center",
        gap: 10,
        pointerEvents: "none",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.18))" }}
      >
        <path
          d="M12 42C14 36 18 32 26 32C32 32 38 34 44 36C50 38 54 42 54 46C54 50 48 52 40 52C28 52 18 50 14 46L12 42Z"
          fill="#1C1510"
        />
        <circle cx="16" cy="28" r="9" fill="#1C1510" />
        <polygon points="10,21 13,12 18,21" fill="#1C1510" />
        <polygon points="16,21 21,12 24,21" fill="#1C1510" />
        <path
          d={`M52 44 C${56 + tailWag * 0.3} 40, ${60 + tailWag * 0.5} 34, ${
            60 + tailWag
          } 26 C${59 + tailWag} 23, 56 24, 54 26 C53 28, 54 34, 50 38`}
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1={20 + legSwing1}
          y1={48}
          x2={18 - legSwing1}
          y2={58}
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={28 - legSwing2}
          y1={50}
          x2={32 + legSwing2}
          y2={58}
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={42 + legSwing2}
          y1={50}
          x2={40 - legSwing2}
          y2={58}
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={48 - legSwing1}
          y1={48}
          x2={52 + legSwing1}
          y2={56}
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Reusable Bouncing Red Pointer Arrow
const BouncingPointerArrow: React.FC<{
  x?: number;
  y?: number;
  rotation?: number;
  frame: number;
}> = ({ x = 0, y = 0, rotation = -15, frame }) => {
  const bounce = Math.sin(frame * 0.28) * 8;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y + bounce,
        transform: `rotate(${rotation}deg)`,
        width: 46,
        height: 46,
        zIndex: 50,
        filter: "drop-shadow(0 6px 14px rgba(220, 38, 38, 0.45))",
        pointerEvents: "none",
      }}
    >
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="M6 6L20 34L24 22L36 18L6 6Z"
          fill="#DC2626"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════
// 2. MAIN COMPOSITION: 1976 FRAMES = 65.88s MASTER
// ═════════════════════════════════════════════════════════════════════
export const BigTechToolsExposed16x9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find active 2-line chunk
  const activeChunk =
    chunks.find(
      (c) => frame >= c.startFrame && frame <= c.endFrame
    ) || chunks[0];

  // Dynamic Camera subtle breath
  const cameraScale = 1.0 + Math.sin(frame * 0.04) * 0.01;

  // Sound triggers on chunk entries
  const isChunkCut = frame === activeChunk.startFrame;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#CBB7A2", // Warm sand / latte paper tone
        color: "#1C1510",
        fontFamily: fontNeueHaas,
        overflow: "hidden",
      }}
    >
      {/* ─── 1. AUDIO TRACKS ─── */}
      <Audio
        src={staticFile("audio/bigtech_tools_raw.mp3")}
        volume={1.0}
      />
      <Audio
        src={staticFile("audio/lofi_viral_beat.mp3")}
        volume={0.045}
        loop
      />
      {isChunkCut && (
        <Audio src={staticFile("audio/pop.mp3")} volume={0.12} />
      )}

      {/* ─── 2. Paper Grain / Dot Texture ─── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.07,
          backgroundImage: "radial-gradient(#1C1510 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* ─── 3. Inset Frame Border ─── */}
      <div
        style={{
          position: "absolute",
          inset: 22,
          border: "2px solid rgba(28, 21, 16, 0.14)",
          borderRadius: 28,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* ─── 4. Top Editorial Header Bar ─── */}
      <div
        style={{
          position: "absolute",
          top: 38,
          left: 50,
          right: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 15,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              backgroundColor: "#1C1510",
              color: "#FFF",
              fontFamily: fontSpace,
              fontSize: 13,
              fontWeight: 800,
              padding: "5px 14px",
              borderRadius: 6,
              letterSpacing: 1.2,
            }}
          >
            ● SECRET TECH ARCHIVE // 04
          </div>
          <div
            style={{
              fontFamily: fontSpace,
              fontSize: 14,
              fontWeight: 700,
              color: "rgba(28, 21, 16, 0.6)",
              letterSpacing: 1,
            }}
          >
            3 TOOLS BIG TECH HIDES
          </div>
        </div>

        <div
          style={{
            fontFamily: fontNeueHaas,
            fontSize: 20,
            fontWeight: 800,
            color: "rgba(28, 21, 16, 0.5)",
            letterSpacing: 1.2,
          }}
        >
          @yashwebsites
        </div>
      </div>

      {/* ─── 5. Walking Baseline Track & Walking Black Cat Mascot ─── */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 36,
          right: 36,
          height: 1.5,
          backgroundColor: "rgba(28, 21, 16, 0.16)",
          zIndex: 20,
        }}
      />
      <WalkingStrollingCat frame={frame} />

      {/* ─── 6. Bottom Right Meta ─── */}
      <div
        style={{
          position: "absolute",
          bottom: 38,
          right: 50,
          display: "flex",
          alignItems: "center",
          gap: 14,
          zIndex: 15,
        }}
      >
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 12,
            fontWeight: 800,
            color: "rgba(28, 21, 16, 0.55)",
            backgroundColor: "rgba(28, 21, 16, 0.08)",
            padding: "4px 12px",
            borderRadius: 6,
            letterSpacing: 1,
          }}
        >
          COMMENT "TOOLS" FOR DIRECT LINKS
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          7. HERO 2-LINE WORD-BY-WORD KINETIC CAPTIONS STAGE (UPPER/MID)
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 60,
          right: 60,
          height: 380,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 30,
          transform: `scale(${cameraScale})`,
          transformOrigin: "center center",
        }}
      >
        {/* Dynamic Category Pill */}
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 15,
            fontWeight: 800,
            color:
              frame < 245
                ? "#8B0000"
                : frame < 760
                ? "#DC2626"
                : frame < 1206
                ? "#0284C7"
                : frame < 1664
                ? "#059669"
                : "#E11D48",
            backgroundColor:
              frame < 245
                ? "#FCD5CE"
                : frame < 760
                ? "#FEE2E2"
                : frame < 1206
                ? "#E0F2FE"
                : frame < 1664
                ? "#D1FAE5"
                : "#FFE4E6",
            padding: "5px 22px",
            borderRadius: 100,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 16,
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          }}
        >
          {frame < 245
            ? "⚠️ CLASSIFIED BIG TECH SECRETS"
            : frame < 760
            ? "💳 TOOL 01 // FREE TRIAL DEFENSE"
            : frame < 1206
            ? "⚡ TOOL 02 // GHOST INBOX SHIELD"
            : frame < 1664
            ? "📂 TOOL 03 // UNCENSORED METASEARCH"
            : "💬 DIRECT RESOURCE DIRECTORY"}
        </div>

        {/* 2-LINE WORD-BY-WORD KINETIC CAPTION CONTAINER */}
        <div
          style={{
            fontFamily: fontAmericanCaptain,
            fontSize: 98,
            letterSpacing: 2,
            lineHeight: 1.05,
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px 22px",
            maxWidth: 1350,
          }}
        >
          {activeChunk.words.map((w, idx) => {
            const hasStarted = frame >= w.startFrame;
            const isActive = frame >= w.startFrame && frame <= w.endFrame;

            // Snappy pop spring for current word
            const popSpring = hasStarted
              ? spring({
                  frame: frame - w.startFrame,
                  fps,
                  config: { damping: 11, stiffness: 260 },
                })
              : 0;

            if (!hasStarted) {
              return null; // Word only appears word-by-word as spoken!
            }

            // Word highlight pill color based on context
            const highlightBg =
              w.word.toLowerCase().includes("tools") ||
              w.word.toLowerCase().includes("3rd") ||
              w.word.toLowerCase().includes("zero") ||
              w.word.toLowerCase().includes("otp") ||
              w.word.toLowerCase().includes("direct") ||
              w.word.toLowerCase().includes("10")
                ? "#FEF08A" // Bright yellow
                : w.word.toLowerCase().includes("card") ||
                  w.word.toLowerCase().includes("auto-debit") ||
                  w.word.toLowerCase().includes("spam")
                ? "#FEE2E2" // Danger pink
                : "#FFFFFF"; // Clean white pill

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  padding: isActive ? "2px 20px" : "2px 6px",
                  borderRadius: isActive ? 16 : 8,
                  backgroundColor: isActive ? highlightBg : "transparent",
                  color: isActive
                    ? "#1C1510"
                    : "#1C1510",
                  transform: `scale(${
                    isActive ? 1.15 : Math.min(1.0, popSpring)
                  })`,
                  boxShadow: isActive
                    ? "0 8px 24px rgba(0,0,0,0.12)"
                    : "none",
                  textTransform: "uppercase",
                }}
              >
                {w.word}
              </span>
            );
          })}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          8. DYNAMIC VISUAL SUPPORT STAGE (LOWER-MIDDLE: Y 490 to 920)
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: 80,
          right: 80,
          height: 450,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 25,
        }}
      >
        {/* ── SCENE A: HOOK (Frames 0 - 115) -> Google & Apple Logos + Shinchan ── */}
        {frame < 115 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 22,
                display: "flex",
                alignItems: "center",
                gap: 18,
                boxShadow: "0 12px 35px rgba(0,0,0,0.09)",
                border: "2px solid rgba(28, 21, 16, 0.12)",
                transform: frame < 18 ? "scale(1.08)" : "scale(1.0)",
              }}
            >
              <GoogleLogoSvg size={52} />
              <span
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#1C1510",
                }}
              >
                Google
              </span>
            </div>

            <span
              style={{
                fontFamily: fontSpace,
                fontSize: 32,
                fontWeight: 900,
                color: "#8B0000",
              }}
            >
              &
            </span>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 22,
                display: "flex",
                alignItems: "center",
                gap: 18,
                boxShadow: "0 12px 35px rgba(0,0,0,0.09)",
                border: "2px solid rgba(28, 21, 16, 0.12)",
                transform:
                  frame >= 18 && frame < 36 ? "scale(1.08)" : "scale(1.0)",
              }}
            >
              <AppleLogoSvg size={48} />
              <span
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 34,
                  fontWeight: 800,
                  color: "#1C1510",
                }}
              >
                Apple
              </span>
            </div>

            {/* Shinchan Shock Sticker */}
            <div
              style={{
                position: "absolute",
                right: -240,
                top: -30,
                width: 190,
                height: 190,
              }}
            >
              <Img
                src={staticFile("anime sticker/shinchan_shock_anim.gif")}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        )}

        {/* ── SCENE B: CURIOSITY ACCELERATOR (Frames 115 - 245) ── */}
        {frame >= 115 && frame < 245 && (
          <div
            style={{
              backgroundColor: "#1C1510",
              color: "#FEF08A",
              padding: "18px 48px",
              borderRadius: 24,
              boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#38BDF8",
              }}
            >
              ⚡ PURE OPEN WEB DEFENSE
            </div>
            <div
              style={{
                fontFamily: fontNeueHaas,
                fontSize: 26,
                fontWeight: 700,
                color: "#F1F5F9",
              }}
            >
              Zero Auto-Debit • Zero Spam • Zero Ads
            </div>
          </div>
        )}

        {/* ── SCENE C: TOOL 1 TRAP (Frames 245 - 440) -> Real Card Mat Do + Stamp ── */}
        {frame >= 245 && frame < 440 && (
          <div
            style={{
              width: 740,
              backgroundColor: "#FFFFFF",
              border: "2.5px solid rgba(220, 38, 38, 0.4)",
              borderRadius: 24,
              padding: "24px 34px",
              boxShadow: "0 20px 50px rgba(220, 38, 38, 0.12)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #E5E7EB",
                paddingBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>🎬</span>
                <span
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#111827",
                  }}
                >
                  Netflix / SaaS 30-Day Free Trial
                </span>
              </div>
              <span
                style={{
                  fontFamily: fontSpace,
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#DC2626",
                  backgroundColor: "#FEE2E2",
                  padding: "4px 12px",
                  borderRadius: 6,
                }}
              >
                AUTO-DEBITS ₹1,499/MO
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontFamily: fontSpace,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#6B7280",
                }}
              >
                CARD NUMBER
              </label>
              <div
                style={{
                  backgroundColor: "#F9FAFB",
                  border: "1.5px solid #D1D5DB",
                  borderRadius: 10,
                  padding: "12px 18px",
                  fontFamily: fontSpace,
                  fontSize: 20,
                  color: "#374151",
                  letterSpacing: 2,
                }}
              >
                •••• •••• •••• 4242
              </div>
            </div>

            {/* Stamp drops on frame 360 ("mat do") */}
            {frame >= 360 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(220, 38, 38, 0.12)",
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `rotate(-8deg) scale(${spring({
                    frame: frame - 360,
                    fps,
                    config: { damping: 10, stiffness: 240 },
                  })})`,
                }}
              >
                <div
                  style={{
                    border: "5px dashed #DC2626",
                    color: "#DC2626",
                    fontFamily: fontAmericanCaptain,
                    fontSize: 62,
                    letterSpacing: 4,
                    padding: "12px 36px",
                    borderRadius: 16,
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 15px 40px rgba(220, 38, 38, 0.4)",
                  }}
                >
                  ❌ DO NOT USE REAL CARD!
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── SCENE D: PRIVACY.COM VIRTUAL CARD (Frames 440 - 650) ── */}
        {frame >= 440 && frame < 650 && (
          <div
            style={{
              width: 740,
              height: 360,
              background:
                "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
              borderRadius: 28,
              padding: 34,
              color: "#FFF",
              boxShadow: "0 25px 60px rgba(15, 23, 42, 0.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              border: "2px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 34,
                    background:
                      "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                    borderRadius: 6,
                  }}
                />
                <span
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#94A3B8",
                  }}
                >
                  Privacy.com Virtual
                </span>
              </div>
              <MastercardSvg size={58} />
            </div>

            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 32,
                letterSpacing: 6,
                color: "#F8FAFC",
              }}
            >
              4892 •••• •••• 9081
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 12,
                    color: "#64748B",
                    letterSpacing: 1,
                  }}
                >
                  CARDHOLDER
                </div>
                <div
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#F1F5F9",
                  }}
                >
                  YASH ARORA
                </div>
              </div>

              {/* Spending Limit Pill */}
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: "2px solid #10B981",
                  borderRadius: 14,
                  padding: "10px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
                  transform: frame >= 560 ? "scale(1.08)" : "scale(1.0)",
                }}
              >
                <span style={{ fontSize: 20 }}>🔒</span>
                <div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#34D399",
                    }}
                  >
                    SPENDING LIMIT
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 22,
                      fontWeight: 900,
                      color: "#FFF",
                    }}
                  >
                    ₹0.00 / MONTH
                  </div>
                </div>
              </div>
            </div>

            <BouncingPointerArrow x={630} y={215} frame={frame} />
          </div>
        )}

        {/* ── SCENE E: AUTO-DEBIT BLOCKED ALERT (Frames 650 - 760) ── */}
        {frame >= 650 && frame < 760 && (
          <div
            style={{
              width: 800,
              backgroundColor: "#0D0B0A",
              borderRadius: 24,
              padding: "26px 36px",
              border: "2.5px solid #DC2626",
              boxShadow: "0 25px 60px rgba(220, 38, 38, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    backgroundColor: "#DC2626",
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    color: "#FFF",
                  }}
                >
                  ✕
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 22,
                      fontWeight: 900,
                      color: "#FFF",
                    }}
                  >
                    PAYMENT DECLINED: ₹1,499.00
                  </div>
                  <div
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 16,
                      color: "#9CA3AF",
                    }}
                  >
                    Merchant tried to charge your card after 30-day trial
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#DC2626",
                  color: "#FFF",
                  fontFamily: fontSpace,
                  fontSize: 14,
                  fontWeight: 800,
                  padding: "6px 14px",
                  borderRadius: 8,
                }}
              >
                BLOCKED
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#161312",
                borderRadius: 14,
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#10B981",
                }}
              >
                ✅ Zero Balance Card Protected Your Bank Account
              </div>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 18,
                  fontWeight: 900,
                  color: "#FFF",
                }}
              >
                ₹0 DEDUCTED
              </div>
            </div>
          </div>
        )}

        {/* ── SCENE F: TOOL 2 SPAM TRAP (Frames 760 - 939) ── */}
        {frame >= 760 && frame < 939 && (
          <div
            style={{
              width: 740,
              backgroundColor: "#FFFFFF",
              borderRadius: 24,
              padding: "22px 30px",
              border: "2px solid rgba(28, 21, 16, 0.15)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 16,
                fontWeight: 800,
                color: "#DC2626",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>⚠️</span> INBOX SPAM INFECTION (500+ UNREAD PROMOTIONS)
            </div>
            {[
              "🔥 Claim ₹5,000 Gift Voucher on random site!",
              "📢 Unverified marketing alerts flooding primary mail",
            ].map((msg, mIdx) => (
              <div
                key={mIdx}
                style={{
                  backgroundColor: "#FEF2F2",
                  border: "1px solid #FCA5A5",
                  borderRadius: 10,
                  padding: "10px 16px",
                  fontFamily: fontNeueHaas,
                  fontSize: 16,
                  color: "#991B1B",
                }}
              >
                {msg}
              </div>
            ))}
          </div>
        )}

        {/* ── SCENE G: TEMP-MAIL & LIVE OTP (Frames 939 - 1122) ── */}
        {frame >= 939 && frame < 1122 && (
          <div
            style={{
              width: 780,
              backgroundColor: "#0F172A",
              borderRadius: 24,
              padding: "24px 32px",
              color: "#FFF",
              boxShadow: "0 22px 55px rgba(15, 23, 42, 0.4)",
              border: "2px solid #0284C7",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1E293B",
                borderRadius: 14,
                padding: "12px 20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>📬</span>
                <span
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#38BDF8",
                  }}
                >
                  ghost9482@tmpmail.org
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#0284C7",
                  color: "#FFF",
                  fontFamily: fontSpace,
                  fontSize: 13,
                  fontWeight: 800,
                  padding: "6px 16px",
                  borderRadius: 8,
                }}
              >
                COPY EMAIL
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#162032",
                border: "2px solid #10B981",
                borderRadius: 14,
                padding: "14px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.2)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 12,
                    color: "#94A3B8",
                  }}
                >
                  LIVE OTP RECEIVED
                </div>
                <div
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#F1F5F9",
                  }}
                >
                  Netflix Verification Code
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#10B981",
                  color: "#0F172A",
                  fontFamily: fontSpace,
                  fontSize: 26,
                  fontWeight: 900,
                  padding: "6px 20px",
                  borderRadius: 8,
                  letterSpacing: 2,
                }}
              >
                OTP: 849-201
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: fontSpace,
                fontSize: 12,
                color: "#94A3B8",
              }}
            >
              <span>⏳ Self-destruct: 09:42</span>
              <span>🔒 Inbox wipes clean automatically</span>
            </div>
          </div>
        )}

        {/* ── SCENE H: SPAM-FREE INBOX IMMUNITY (Frames 1122 - 1206) ── */}
        {frame >= 1122 && frame < 1206 && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "3px solid #10B981",
              borderRadius: 24,
              padding: "20px 40px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 18px 45px rgba(16, 185, 129, 0.2)",
            }}
          >
            <span style={{ fontSize: 44 }}>🛡️</span>
            <div>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#1C1510",
                }}
              >
                PRIMARY GMAIL 100% SPAM-FREE 🔒
              </div>
              <div
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 17,
                  color: "#4B5563",
                }}
              >
                Your personal email stays untouched forever.
              </div>
            </div>
          </div>
        )}

        {/* ── SCENE I: GOOGLE ADS (Frames 1206 - 1474) ── */}
        {frame >= 1206 && frame < 1474 && (
          <div
            style={{
              width: 760,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: "18px 24px",
              border: "2px solid #E5E7EB",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              "Ad • Top 10 Best Tools (Paid Affiliate Blog Placement)",
              "Sponsored • Commercial Software with Subscription Paywall",
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  backgroundColor: "#F9FAFB",
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 16,
                    color: "#374151",
                  }}
                >
                  {item}
                </span>
                <span
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#DC2626",
                    backgroundColor: "#FEE2E2",
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  ADS ONLY
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── SCENE J: SEARXNG UNINDEXED DATABASES (Frames 1474 - 1664) ── */}
        {frame >= 1474 && frame < 1664 && (
          <div
            style={{
              width: 800,
              backgroundColor: "#0B132B",
              borderRadius: 24,
              padding: "22px 30px",
              color: "#FFF",
              boxShadow: "0 22px 60px rgba(11, 19, 43, 0.4)",
              border: "2px solid #10B981",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: fontSpace,
                  fontSize: 14,
                  color: "#34D399",
                  fontWeight: 800,
                }}
              >
                ● SearXNG // Deep Uncensored Search
              </span>
              <span
                style={{
                  fontFamily: fontSpace,
                  fontSize: 12,
                  backgroundColor: "#10B981",
                  color: "#0B132B",
                  padding: "2px 8px",
                  borderRadius: 4,
                  fontWeight: 800,
                }}
              >
                PURE WEB
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#1C2541",
                borderRadius: 10,
                padding: "10px 16px",
                fontFamily: fontSpace,
                fontSize: 15,
                color: "#6EE7B7",
              }}
            >
              📁 Index-of: AI Research Papers & Datasets [DIRECT FTP]
            </div>
            <div
              style={{
                backgroundColor: "#1C2541",
                borderRadius: 10,
                padding: "10px 16px",
                fontFamily: fontSpace,
                fontSize: 15,
                color: "#93C5FD",
              }}
            >
              📁 Unindexed Developer Code Archives • 0 Tracking
            </div>
          </div>
        )}

        {/* ── SCENE K: 10 WEBSITES DIRECTORY (Frames 1664 - 1782) ── */}
        {frame >= 1664 && frame < 1782 && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "2.5px solid #8B0000",
              borderRadius: 24,
              padding: "18px 44px",
              display: "flex",
              alignItems: "center",
              gap: 28,
              boxShadow: "0 18px 45px rgba(139, 0, 0, 0.15)",
            }}
          >
            <div
              style={{
                fontFamily: fontAmericanCaptain,
                fontSize: 90,
                color: "#8B0000",
                lineHeight: 1,
              }}
            >
              10
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: fontPlayfair,
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#1C1510",
                }}
              >
                Underground AI & Tech Directory
              </div>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#8B0000",
                }}
              >
                COMPLETE DIRECT-LINK LIST READY
              </div>
            </div>
          </div>
        )}

        {/* ── SCENE L: MANYCHAT CTA (Frames 1782 - 1905) ── */}
        {frame >= 1782 && frame < 1905 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: fontAmericanCaptain,
                fontSize: 110,
                letterSpacing: 3,
                color: "#E11D48",
                backgroundColor: "#FFFFFF",
                padding: "8px 44px",
                borderRadius: 24,
                boxShadow: "0 20px 50px rgba(225, 29, 72, 0.3)",
                border: "3px solid #E11D48",
                transform: `scale(${1.0 + Math.sin(frame * 0.3) * 0.04})`,
              }}
            >
              COMMENT "TOOLS" 💬
            </div>
            <BouncingPointerArrow x={320} y={-10} frame={frame} />
          </div>
        )}

        {/* ── SCENE M: FOLLOW OUTRO (Frames 1905 - 1976) ── */}
        {frame >= 1905 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "#0D0B0A",
                borderRadius: 24,
                padding: "20px 34px",
                display: "flex",
                alignItems: "center",
                gap: 24,
                boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
                border: "2px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "#E11D48",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                }}
              >
                🚀
              </div>
              <div>
                <div
                  style={{
                    fontFamily: fontAmericanCaptain,
                    fontSize: 34,
                    color: "#FFF",
                    letterSpacing: 1.5,
                  }}
                >
                  @YASHWEBSITES ✓
                </div>
                <div
                  style={{
                    fontFamily: fontNeueHaas,
                    fontSize: 15,
                    color: "#9CA3AF",
                  }}
                >
                  Unfiltered Internet Secrets & Tech Tools
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#2563EB",
                  color: "#FFF",
                  fontFamily: fontSpace,
                  fontSize: 18,
                  fontWeight: 900,
                  padding: "10px 26px",
                  borderRadius: 12,
                  boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)",
                }}
              >
                FOLLOW
              </div>
            </div>

            {/* Shinchan Wave Sticker */}
            <div
              style={{
                position: "absolute",
                right: -210,
                top: -30,
                width: 180,
                height: 180,
              }}
            >
              <Img
                src={staticFile("anime sticker/shinchan_wave_anim.gif")}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

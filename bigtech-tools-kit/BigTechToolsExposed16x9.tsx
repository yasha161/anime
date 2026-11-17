import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  staticFile,
  Audio,
  Img,
  Sequence,
} from "remotion";
import {
  fontNeueHaas,
  fontPragmatica,
  fontSpace,
  fontPlayfair,
  fontAmericanCaptain,
  fontCoolvetica,
} from "../fonts";

// ─── 15 CANONICAL EDITORIAL PHRASES (Exact Timings: 55.10s = 1653 Frames @ 30fps) ───
interface ToolsPhrase {
  id: number;
  start: number;
  end: number;
  title: string;
  sub?: string;
  tag?: string;
  font: string;
  fontSize: number;
  color: string;
  highlightBg?: string;
  sticker?: string;
  stickerPos?: "right" | "top" | "left" | "bottom";
  stickerScale?: number;
  showVirtualCard?: boolean;
  showDeclineAlert?: boolean;
  showTempMailCard?: boolean;
  showSearxngCard?: boolean;
  showStackingNotifications?: boolean;
  showOutroNumber?: boolean;
  showProfileCard?: boolean;
}

const PHRASES: ToolsPhrase[] = [
  // ── Phase 1: The Curiosity Hook (0.00s - 8.04s) ──
  {
    id: 1,
    start: 0.0,
    end: 3.42,
    title: "GOOGLE AUR APPLE...",
    sub: "BIG TECH SECRETS",
    tag: "⚠️ HIDDEN FROM USERS",
    font: fontNeueHaas,
    fontSize: 120,
    color: "#1C1510",
    highlightBg: "#E8D8C8",
  },
  {
    id: 2,
    start: 3.42,
    end: 5.24,
    title: "TUMSE YEH 3 TOOLS CHHIPATE HAIN!",
    sub: "THE UNTOLD TRUTH",
    tag: "🚨 CLASSIFIED TOOLS",
    font: fontPlayfair,
    fontSize: 105,
    color: "#8B0000",
    highlightBg: "#FCD5CE",
  },
  {
    id: 3,
    start: 5.24,
    end: 8.04,
    title: "INTERNET USE KARNE KA TAREEKA BADAL JAYEGA!",
    sub: "TEESRA TOOL DEKH KAR HOSH UD JAYENGE",
    tag: "🤯 GAME CHANGER",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#0F172A",
    highlightBg: "#FEF08A",
    sticker: "anime sticker/shinchan_shock_anim.gif",
    stickerPos: "right",
    stickerScale: 1.25,
  },

  // ── Phase 2: Tool 1 — Virtual $0 Trial Card (8.04s - 22.84s) ──
  {
    id: 4,
    start: 8.04,
    end: 11.5,
    title: "TOOL 1: FREE TRIAL KA TRAP",
    sub: "APNA REAL CARD KABHI MAT DO!",
    tag: "💳 AUTO-DEBIT SCAM",
    font: fontPragmatica,
    fontSize: 115,
    color: "#DC2626",
    highlightBg: "#FEE2E2",
  },
  {
    id: 5,
    start: 11.5,
    end: 16.5,
    title: "PRIVACY.COM YA BURNER CARD",
    sub: "ZERO-BALANCE VIRTUAL CARD GENERATOR",
    tag: "🔒 $0.00 LIMIT CARD",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#1E293B",
    showVirtualCard: true,
  },
  {
    id: 6,
    start: 16.5,
    end: 19.3,
    title: "TRIAL BHI ACTIVATE HO JAYEGA!",
    sub: "AUR EK RUPYA BHI DEBIT NAHI HOGA",
    tag: "✅ 100% SAFE FREE TRIAL",
    font: fontAmericanCaptain,
    fontSize: 130,
    color: "#059669",
    highlightBg: "#BBF7D0",
    showVirtualCard: true,
  },
  {
    id: 7,
    start: 19.3,
    end: 22.84,
    title: "AUTO-DEBIT SIDHA BLOCK HO JAYEGA!",
    sub: "PAYMENT DECLINED: ₹1,499 ❌",
    tag: "🚫 BLOCKED SUBSCRIPTION",
    font: fontCoolvetica,
    fontSize: 120,
    color: "#DC2626",
    highlightBg: "#FEE2E2",
    showDeclineAlert: true,
  },

  // ── Phase 3: Tool 2 — The Anti-Spam Ghost Inbox (22.84s - 37.08s) ──
  {
    id: 8,
    start: 22.84,
    end: 25.5,
    title: "TOOL 2: TEMP-MAIL",
    sub: "RANDOM SITES PAR PERSONAL EMAIL MAT DAALO",
    tag: "🛡️ ANTI-SPAM SHIELD",
    font: fontPragmatica,
    fontSize: 115,
    color: "#0284C7",
    highlightBg: "#E0F2FE",
  },
  {
    id: 9,
    start: 25.5,
    end: 31.0,
    title: "10-MINUTE DISPOSABLE EMAIL & LIVE OTP",
    sub: "AUTO-DESTROYS AFTER VERIFICATION",
    tag: "⚡ INSTANT OTP INBOX",
    font: fontAmericanCaptain,
    fontSize: 120,
    color: "#1E293B",
    showTempMailCard: true,
  },
  {
    id: 10,
    start: 31.0,
    end: 37.08,
    title: "PERSONAL INBOX SPAM SE 100% SAFE!",
    sub: "ZERO PROMOTIONAL JUNK • ZERO DATA LEAKS",
    tag: "🔒 100% PRIVATE",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#059669",
    highlightBg: "#DCFCE7",
    showTempMailCard: true,
    sticker: "anime sticker/shinchan_dance_anim.gif",
    stickerPos: "right",
    stickerScale: 1.25,
  },

  // ── Phase 4: Tool 3 — The Uncensored Deep Search (37.08s - 49.62s) ──
  {
    id: 11,
    start: 37.08,
    end: 40.5,
    title: "TOOL 3: SEARXNG SEARCH ENGINE",
    sub: "THE MOST POWERFUL TOOL ON INTERNET",
    tag: "⚡ UNCENSORED METASEARCH",
    font: fontAmericanCaptain,
    fontSize: 130,
    color: "#2563EB",
    highlightBg: "#DBEAFE",
  },
  {
    id: 12,
    start: 40.5,
    end: 44.52,
    title: "GOOGLE SIRF SPONSORED ADS DIKHATA HAI",
    sub: "PAID AFFILIATE BLOGS & TRACKING",
    tag: "❌ GOOGLE'S PAID WALL",
    font: fontPragmatica,
    fontSize: 110,
    color: "#DC2626",
    showSearxngCard: true,
  },
  {
    id: 13,
    start: 44.52,
    end: 49.62,
    title: "SEEDHA DIRECT FILES & HIDDEN DATABASES!",
    sub: "ZERO TRACKING • PURE OPEN WEB",
    tag: "📂 DIRECT FILE ACCESS",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#059669",
    highlightBg: "#BBF7D0",
    showSearxngCard: true,
    showStackingNotifications: true,
  },

  // ── Phase 5: Outro & ManyChat CTA (49.62s - 55.10s) ──
  {
    id: 14,
    start: 49.62,
    end: 52.12,
    title: "10 UNDERGROUND WEBSITES LIST",
    sub: "COMPLETE DIRECT-LINK DIRECTORY",
    tag: "📂 FREE RESOURCE DIRECTORY",
    font: fontPlayfair,
    fontSize: 115,
    color: "#8B0000",
    showOutroNumber: true,
  },
  {
    id: 15,
    start: 52.12,
    end: 55.10,
    title: 'COMMENT "TOOLS"',
    sub: "INSTANT DIRECT LINK TO YOUR DM",
    tag: "💬 TYPE 'TOOLS' IN COMMENTS",
    font: fontAmericanCaptain,
    fontSize: 150,
    color: "#E11D48",
    highlightBg: "#FFE4E6",
    showProfileCard: true,
    sticker: "anime sticker/shinchan_wave_anim.gif",
    stickerPos: "right",
    stickerScale: 1.3,
  },
];

// ─── REUSABLE RED POINTER ARROW COMPONENT (From Reference Reel) ───
const RedPointerArrow: React.FC<{
  x?: number;
  y?: number;
  rotation?: number;
  bounceOffset?: number;
}> = ({ x = 0, y = 0, rotation = -45, bounceOffset = 0 }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y + bounceOffset,
      transform: `rotate(${rotation}deg)`,
      filter: "drop-shadow(0 6px 14px rgba(220, 38, 38, 0.45))",
      zIndex: 50,
      pointerEvents: "none",
    }}
  >
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 4L42 26H35V56H29V26H22L32 4Z"
        fill="#DC2626"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// ─── REUSABLE CORNER CAT MASCOT (From Reference Reel) ─────────────
const WalkingCatMascot: React.FC<{ frame: number }> = ({ frame }) => {
  const tailWag = Math.sin(frame * 0.15) * 8;
  const bodyBob = Math.sin(frame * 0.25) * 2;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 35 + bodyBob,
        left: 55,
        width: 70,
        height: 70,
        zIndex: 25,
        opacity: 0.9,
        pointerEvents: "none",
      }}
    >
      <svg width="68" height="68" viewBox="0 0 100 100" fill="#1A1412">
        {/* Cat Body */}
        <ellipse cx="50" cy="65" rx="22" ry="14" />
        {/* Cat Head */}
        <circle cx="70" cy="50" r="12" />
        {/* Cat Ears */}
        <polygon points="63,42 68,30 73,40" />
        <polygon points="73,42 78,32 82,44" />
        {/* Cat Legs */}
        <rect x="36" y="72" width="4.5" height="18" rx="2" />
        <rect x="44" y="74" width="4.5" height="16" rx="2" />
        <rect x="58" y="72" width="4.5" height="18" rx="2" />
        <rect x="66" y="74" width="4.5" height="16" rx="2" />
        {/* Animated Tail */}
        <path
          d={`M 30 65 Q 16 ${50 + tailWag} 22 ${32 + tailWag}`}
          fill="none"
          stroke="#1A1412"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const BigTechToolsExposed16x9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Active phrase lookup
  const activePhrase =
    PHRASES.find((p) => currentTime >= p.start && currentTime < p.end) ||
    PHRASES[PHRASES.length - 1];

  const phraseStartFrame = Math.round(activePhrase.start * fps);
  const localFrame = frame - phraseStartFrame;

  // Spring animations
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 180, mass: 0.6 },
  });

  const subSpring = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 15, stiffness: 160 },
  });

  const stickerPop = spring({
    frame: Math.max(0, localFrame - 2),
    fps,
    config: { damping: 11, stiffness: 220, mass: 0.5 },
  });

  const arrowBounce = Math.sin(frame * 0.3) * 6;

  // Word-by-word kinetic engine
  const phraseWords = activePhrase.title.split(" ");
  const phraseProgress = Math.max(
    0,
    Math.min(
      1,
      (currentTime - activePhrase.start) /
        Math.max(0.01, activePhrase.end - activePhrase.start)
    )
  );
  const activeWordIndex = Math.min(
    phraseWords.length - 1,
    Math.floor(phraseProgress * phraseWords.length)
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#CBB7A2", // Warm sand / latte paper tone (Reference aesthetic)
        overflow: "hidden",
        fontFamily: fontNeueHaas,
      }}
    >
      {/* ─── 1. AUDIO TRACKS: Bunty Tight Voice + Lofi Beat + SFX ───── */}
      <Audio
        src={staticFile("audio/bigtech_tools_tight.mp3")}
        volume={1.0}
      />
      <Audio
        src={staticFile("audio/lofi_viral_beat.mp3")}
        volume={0.045}
        loop
      />

      {/* SFX Triggers on Phrase Starts */}
      {PHRASES.map((p) => {
        const pFrame = Math.round(p.start * fps);
        if (pFrame === 0) return null;
        return (
          <Sequence key={p.id} from={pFrame} durationInFrames={fps * 2} layout="none">
            <Audio src={staticFile("audio/whoosh.wav")} volume={0.15} />
          </Sequence>
        );
      })}

      {/* Notification SFX on Stacking Notifications */}
      {activePhrase.showStackingNotifications && (
        <Sequence from={phraseStartFrame} durationInFrames={fps * 3} layout="none">
          <Audio src={staticFile("audio/ding.wav")} volume={0.25} />
        </Sequence>
      )}

      {/* ─── 2. Fine Warm Paper Grain Texture ──────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage: `radial-gradient(#1A1412 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          pointerEvents: "none",
        }}
      />

      {/* ─── 3. Inset Frame Border (24px Reference Style) ──────────── */}
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "2px solid rgba(26, 20, 18, 0.12)",
          borderRadius: 28,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* ─── 4. Top Editorial Header Bar ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 15,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              backgroundColor: "#1A1412",
              color: "#FFF",
              fontFamily: fontSpace,
              fontSize: 13,
              fontWeight: 800,
              padding: "5px 14px",
              borderRadius: 6,
              letterSpacing: 1.2,
            }}
          >
            ● SECRET TECH ARCHIVE // UNFILTERED 01
          </div>
          <div
            style={{
              fontFamily: fontSpace,
              fontSize: 15,
              fontWeight: 700,
              color: "rgba(26, 20, 18, 0.55)",
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
            color: "rgba(26, 20, 18, 0.45)",
            letterSpacing: 1.2,
          }}
        >
          @yashwebsites
        </div>
      </div>

      {/* ─── 5. Walking Cat Silhouette Mascot (Bottom-Left Corner) ──── */}
      <WalkingCatMascot frame={frame} />

      {/* ═════════════════════════════════════════════════════════════════
          6. HERO KINETIC TYPOGRAPHY & INTERACTIVE PHONE MOCKUP STAGE
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${enterSpring})`,
            transformOrigin: "center center",
            gap: 20,
            maxWidth: 1650,
          }}
        >
          {/* Dynamic Category Tag Pill */}
          {activePhrase.tag && (
            <div
              style={{
                fontFamily: fontSpace,
                fontSize: 17,
                fontWeight: 800,
                color: activePhrase.color === "#059669" ? "#047857" : "#8B0000",
                backgroundColor:
                  activePhrase.color === "#059669"
                    ? "rgba(16, 185, 129, 0.15)"
                    : "rgba(139, 0, 0, 0.1)",
                border: `1.5px solid ${
                  activePhrase.color === "#059669"
                    ? "rgba(16, 185, 129, 0.35)"
                    : "rgba(139, 0, 0, 0.28)"
                }`,
                padding: "6px 24px",
                borderRadius: 100,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              {activePhrase.tag}
            </div>
          )}

          {/* WORD-BY-WORD KINETIC TITLE */}
          <div
            style={{
              fontFamily: activePhrase.font,
              fontSize: activePhrase.fontSize,
              fontWeight: 900,
              color: activePhrase.color,
              lineHeight: 1.05,
              letterSpacing:
                activePhrase.font === fontAmericanCaptain ? "2.5px" : "-0.5px",
              textAlign: "center",
              textTransform: "uppercase",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px 20px",
              filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.06))",
            }}
          >
            {phraseWords.map((word, wIdx) => {
              const isActiveWord = wIdx === activeWordIndex;
              const isPastWord = wIdx < activeWordIndex;
              const highlightBackground =
                activePhrase.highlightBg || "#FEF08A";

              return (
                <span
                  key={wIdx}
                  style={{
                    display: "inline-block",
                    padding: isActiveWord ? "4px 18px" : "2px 4px",
                    borderRadius: isActiveWord ? 12 : 0,
                    backgroundColor: isActiveWord
                      ? highlightBackground
                      : "transparent",
                    color: isActiveWord
                      ? "#1A1412"
                      : isPastWord
                      ? activePhrase.color
                      : "rgba(26, 20, 18, 0.65)",
                    transform: isActiveWord
                      ? `scale(${1.08 + Math.sin(localFrame * 0.4) * 0.03})`
                      : "scale(1)",
                    transition: "all 0.12s ease-out",
                    boxShadow: isActiveWord
                      ? "0 6px 18px rgba(0,0,0,0.08)"
                      : "none",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Subtitle Pill with Smooth Slide/Spring */}
          {activePhrase.sub && (
            <div
              style={{
                fontFamily: fontPragmatica,
                fontSize: 30,
                fontWeight: 700,
                color: "#4A3E39",
                letterSpacing: 0.5,
                textAlign: "center",
                opacity: subSpring,
                transform: `translateY(${(1 - subSpring) * 12}px)`,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                padding: "8px 28px",
                borderRadius: 14,
                border: "1px solid rgba(26, 20, 18, 0.1)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              }}
            >
              {activePhrase.sub}
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════
              DYNAMIC VISUAL SCENE CARDS (Phones & Pattern Interrupts)
             ═════════════════════════════════════════════════════════════ */}

          {/* CARD 1: Privacy.com Virtual $0 Trial Card Mockup */}
          {activePhrase.showVirtualCard && (
            <div
              style={{
                position: "relative",
                width: 780,
                backgroundColor: "#161B22",
                borderRadius: 24,
                padding: "24px 32px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
                border: "2px solid #30363D",
                marginTop: 8,
              }}
            >
              {/* Virtual Card Graphic */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#0D1117",
                  padding: "20px 28px",
                  borderRadius: 18,
                  border: "1.5px solid #21262D",
                  backgroundImage:
                    "linear-gradient(135deg, #161B22 0%, #0D1117 100%)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 14,
                      color: "#8B949E",
                      letterSpacing: 1,
                    }}
                  >
                    PRIVACY // VIRTUAL BURNER CARD
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#FFF",
                      letterSpacing: 3,
                      marginTop: 8,
                    }}
                  >
                    •••• •••• •••• 4892
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 14,
                      color: "#10B981",
                      marginTop: 6,
                    }}
                  >
                    VALID THRU 12/29 • SINGLE-USE ACTIVE
                  </div>
                </div>

                {/* Spending Limit Setting */}
                <div
                  style={{
                    backgroundColor: "#1F2937",
                    border: "2px solid #3B82F6",
                    padding: "12px 20px",
                    borderRadius: 14,
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 12,
                      color: "#93C5FD",
                    }}
                  >
                    SPENDING LIMIT
                  </div>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 38,
                      color: "#60A5FA",
                      lineHeight: 1,
                      marginTop: 4,
                    }}
                  >
                    $0.00 / MONTH
                  </div>
                </div>
              </div>

              {/* Toggle Row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 16,
                  padding: "0 10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      boxShadow: "0 0 10px #10B981",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 16,
                      color: "#E6EDF3",
                      fontWeight: 700,
                    }}
                  >
                    Block All Charges After Free Trial
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: "#10B981",
                    color: "#FFF",
                    fontFamily: fontSpace,
                    fontSize: 14,
                    fontWeight: 900,
                    padding: "6px 18px",
                    borderRadius: 100,
                  }}
                >
                  ENABLED
                </div>
              </div>

              {/* Red Animated Pointer Arrow pointing to $0.00 toggle */}
              <RedPointerArrow
                x={620}
                y={-10}
                rotation={-35}
                bounceOffset={arrowBounce}
              />
            </div>
          )}

          {/* PATTERN INTERRUPT 1: Payment Declined & Crash Alert */}
          {activePhrase.showDeclineAlert && (
            <div
              style={{
                width: 820,
                backgroundColor: "#1A0A0E",
                borderRadius: 24,
                padding: "26px 34px",
                boxShadow: "0 24px 50px rgba(220, 38, 38, 0.35)",
                border: "2.5px solid #EF4444",
                display: "flex",
                alignItems: "center",
                gap: 28,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 22,
                  backgroundColor: "#EF4444",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 44,
                  flexShrink: 0,
                  boxShadow: "0 8px 24px rgba(239, 68, 68, 0.4)",
                }}
              >
                🚫
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 38,
                      color: "#FCA5A5",
                      letterSpacing: 1.5,
                    }}
                  >
                    PAYMENT DECLINED: ₹1,499.00
                  </div>
                  <div
                    style={{
                      backgroundColor: "#EF4444",
                      color: "#FFF",
                      fontFamily: fontSpace,
                      fontSize: 14,
                      fontWeight: 900,
                      padding: "4px 14px",
                      borderRadius: 8,
                    }}
                  >
                    BLOCKED
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: fontPragmatica,
                    fontSize: 18,
                    color: "#FECDD3",
                    marginTop: 6,
                  }}
                >
                  Merchant tried to auto-debit after 30-day trial. Zero-balance card blocked the transaction!
                </div>

                {/* Crash Line Graph */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 12,
                  }}
                >
                  <span style={{ fontSize: 24 }}>📉</span>
                  <span
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#F87171",
                    }}
                  >
                    Unauthorized Subscription Charges ➔ Dropped to ₹0
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* CARD 2: Temp-Mail Disposable Inbox Mockup */}
          {activePhrase.showTempMailCard && (
            <div
              style={{
                position: "relative",
                width: 800,
                backgroundColor: "#0F172A",
                borderRadius: 24,
                padding: "24px 32px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
                border: "2px solid #38BDF8",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #1E293B",
                  paddingBottom: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24 }}>📬</div>
                  <div>
                    <div
                      style={{
                        fontFamily: fontSpace,
                        fontSize: 14,
                        color: "#94A3B8",
                      }}
                    >
                      TEMP-MAIL // DISPOSABLE INBOX
                    </div>
                    <div
                      style={{
                        fontFamily: fontSpace,
                        fontSize: 20,
                        fontWeight: 800,
                        color: "#38BDF8",
                      }}
                    >
                      ghost9482@tmpmail.org
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#0284C7",
                    color: "#FFF",
                    fontFamily: fontSpace,
                    fontSize: 14,
                    fontWeight: 800,
                    padding: "6px 16px",
                    borderRadius: 8,
                  }}
                >
                  COPY EMAIL
                </div>
              </div>

              {/* Live Incoming OTP Notification */}
              <div
                style={{
                  backgroundColor: "#1E293B",
                  borderRadius: 16,
                  padding: "16px 20px",
                  marginTop: 16,
                  borderLeft: "4px solid #10B981",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#FFF",
                    }}
                  >
                    Verification Code Received
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 14,
                      color: "#94A3B8",
                      marginTop: 2,
                    }}
                  >
                    Service: Netflix Free Trial Registration
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#065F46",
                    color: "#34D399",
                    fontFamily: fontAmericanCaptain,
                    fontSize: 32,
                    fontWeight: 900,
                    padding: "4px 16px",
                    borderRadius: 8,
                    letterSpacing: 2,
                  }}
                >
                  OTP: 849-201
                </div>
              </div>

              <div
                style={{
                  marginTop: 12,
                  fontFamily: fontSpace,
                  fontSize: 14,
                  color: "#94A3B8",
                  textAlign: "center",
                }}
              >
                ⏳ Self-destruct timer: 09:42 remaining • Inbox wipes clean
                automatically
              </div>

              {/* Red Pointer Arrow pointing to Copy Email */}
              <RedPointerArrow
                x={680}
                y={-12}
                rotation={-40}
                bounceOffset={arrowBounce}
              />
            </div>
          )}

          {/* CARD 3: SearXNG Uncensored Search Engine Mockup */}
          {activePhrase.showSearxngCard && (
            <div
              style={{
                width: 820,
                backgroundColor: "#1E293B",
                borderRadius: 24,
                padding: "24px 32px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
                border: "2px solid #60A5FA",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #334155",
                  paddingBottom: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      backgroundColor: "#3B82F6",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#FFF",
                    }}
                  >
                    SearXNG Metasearch // Zero Tracking
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: "#2563EB",
                    color: "#FFF",
                    fontFamily: fontSpace,
                    fontSize: 13,
                    fontWeight: 800,
                    padding: "4px 14px",
                    borderRadius: 6,
                  }}
                >
                  NO ADS • PURE WEB
                </div>
              </div>

              {/* Results List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 14,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0F172A",
                    padding: "12px 18px",
                    borderRadius: 12,
                    borderLeft: "3.5px solid #10B981",
                  }}
                >
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#60A5FA",
                    }}
                  >
                    Direct Index: Python & AI Research Papers [Open Directory]
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 13,
                      color: "#94A3B8",
                      marginTop: 2,
                    }}
                  >
                    index-of /research/datasets/ • 4.2 GB archive • No paywall
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#0F172A",
                    padding: "12px 18px",
                    borderRadius: 12,
                    borderLeft: "3.5px solid #10B981",
                  }}
                >
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#60A5FA",
                    }}
                  >
                    Unindexed Developer Database Archive
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 13,
                      color: "#94A3B8",
                      marginTop: 2,
                    }}
                  >
                    Direct FTP/HTTP mirror • Filtered 0 ads • 100% verified links
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PATTERN INTERRUPT 2: Rapid Stacking iPhone Push Notifications */}
          {activePhrase.showStackingNotifications && (
            <div
              style={{
                position: "absolute",
                top: 480,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                zIndex: 45,
                width: 640,
              }}
            >
              {[
                {
                  title: "SearXNG MetaSearch",
                  desc: "Direct database archive unblocked (4.2 GB)",
                  time: "now",
                },
                {
                  title: "Ghost Download Manager",
                  desc: "Clean file downloaded with 0 ads or redirects",
                  time: "1s ago",
                },
                {
                  title: "Privacy Shield",
                  desc: "Zero tracking pixels detected on connection",
                  time: "2s ago",
                },
              ].map((notif, nIdx) => (
                <div
                  key={nIdx}
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.94)",
                    backdropFilter: "blur(14px)",
                    border: "1.5px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: 18,
                    padding: "14px 22px",
                    boxShadow: "0 18px 36px rgba(0,0,0,0.45)",
                    transform: `translateY(${nIdx * -8}px) scale(${
                      1 - nIdx * 0.04
                    })`,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      backgroundColor: "#2563EB",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 20,
                    }}
                  >
                    ⚡
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fontSpace,
                          fontSize: 15,
                          fontWeight: 800,
                          color: "#FFF",
                        }}
                      >
                        {notif.title}
                      </div>
                      <div
                        style={{
                          fontFamily: fontSpace,
                          fontSize: 12,
                          color: "#94A3B8",
                        }}
                      >
                        {notif.time}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: fontPragmatica,
                        fontSize: 14,
                        color: "#CBD5E1",
                        marginTop: 2,
                      }}
                    >
                      {notif.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* OUTRO 1: Big Number 10 Showcase (From Reference Reel) */}
          {activePhrase.showOutroNumber && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
                backgroundColor: "#FFFFFF",
                padding: "24px 44px",
                borderRadius: 28,
                border: "2.5px solid #8B0000",
                boxShadow: "0 24px 50px rgba(139, 0, 0, 0.15)",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 140,
                  fontWeight: 900,
                  color: "#DC2626",
                  lineHeight: 0.9,
                }}
              >
                10
              </div>
              <div>
                <div
                  style={{
                    fontFamily: fontPlayfair,
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#1A1412",
                  }}
                >
                  Underground AI & Tech Websites
                </div>
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#8B0000",
                    marginTop: 6,
                  }}
                >
                  COMPLETE DIRECT-LINK LIST READY
                </div>
              </div>
            </div>
          )}

          {/* OUTRO 2: Glowing Instagram Profile Card (From Reference Reel) */}
          {activePhrase.showProfileCard && (
            <div
              style={{
                width: 680,
                backgroundColor: "#111722",
                borderRadius: 24,
                padding: "24px 34px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.45)",
                border: "2px solid #E11D48",
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  border: "3px solid #E11D48",
                  padding: 3,
                  backgroundColor: "#000",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "#1E293B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 32,
                  }}
                >
                  🚀
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 36,
                      color: "#FFF",
                      letterSpacing: 1,
                    }}
                  >
                    @yashwebsites
                  </div>
                  <span style={{ color: "#38BDF8", fontSize: 22 }}>✓</span>
                </div>
                <div
                  style={{
                    fontFamily: fontPragmatica,
                    fontSize: 16,
                    color: "#94A3B8",
                    marginTop: 2,
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
                  fontSize: 16,
                  fontWeight: 800,
                  padding: "10px 24px",
                  borderRadius: 10,
                  boxShadow: "0 6px 18px rgba(37, 99, 235, 0.4)",
                }}
              >
                FOLLOW
              </div>
            </div>
          )}
        </div>

        {/* ─── 7. Anime Character Stickers (Right Side) ─────────────── */}
        {activePhrase.sticker && (
          <div
            style={{
              position: "absolute",
              right: 90,
              top: "50%",
              transform: `translate(0, -50%) scale(${
                stickerPop * (activePhrase.stickerScale || 1.2)
              })`,
              zIndex: 35,
              filter: "drop-shadow(0 16px 28px rgba(0,0,0,0.18))",
              pointerEvents: "none",
            }}
          >
            <Img
              src={staticFile(activePhrase.sticker)}
              style={{
                width: 250,
                height: 250,
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </div>

      {/* ─── 8. Bottom Editorial Status Bar ──────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 38,
          left: 140, // offset past the cat mascot
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 15,
        }}
      >
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(26, 20, 18, 0.55)",
            letterSpacing: 1.2,
          }}
        >
          FRAME {frame} // 1653 • 55.10s MASTER CUT
        </div>

        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(26, 20, 18, 0.55)",
            letterSpacing: 1.2,
          }}
        >
          COMMENT "TOOLS" FOR DIRECT LINKS
        </div>
      </div>
    </AbsoluteFill>
  );
};

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
  fontLemonMilk,
  fontCoolvetica,
} from "../fonts";

// ─── 24 CANONICAL EDITORIAL PHRASES (Exact Timings from Whisper Transcript: 72.52s) ───
interface TradingPhrase {
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
  stickerPos?: "right" | "top" | "left" | "bottom" | "hanging";
  stickerScale?: number;
  stickerRotate?: number;
  showProfitCard?: boolean;
  showInspectCard?: boolean;
  showMT5Card?: boolean;
  showTelegramCard?: boolean;
  showCommissionCard?: boolean;
  showMyfxbookCard?: boolean;
  showTradingViewCard?: boolean;
  doodle?: "plane" | "shield" | "alert";
}

const PHRASES: TradingPhrase[] = [
  // ── 01. THE HOOK (0.00s - 8.62s) ──
  {
    id: 1,
    start: 0.0,
    end: 2.2,
    title: "INSTAGRAM PAR 19 SAAL KE LADKE",
    tag: "⚠️ REALITY CHECK",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#0F172A",
    sticker: "preview_assets/luffy_peek.png",
    stickerPos: "bottom",
    stickerScale: 1.15,
  },
  {
    id: 2,
    start: 2.2,
    end: 5.2,
    title: "5 LAKH WALE PROFIT SCREENSHOTS?",
    sub: "YEH GREEN P&L DEKH KAR...",
    tag: "💸 ₹5,00,000 GREEN P&L",
    font: fontPragmatica,
    fontSize: 110,
    color: "#047857",
    highlightBg: "#DCFCE7",
    showProfitCard: true,
  },
  {
    id: 3,
    start: 5.2,
    end: 8.62,
    title: "AGLE 30 SECONDS DHYAN SE DEKHNA!",
    sub: "DEMOTIVATE HONE SE PEHLE...",
    tag: "🚨 SECRET EXPOSED",
    font: fontAmericanCaptain,
    fontSize: 135,
    color: "#E11D48",
    sticker: "anime sticker/shinchan_shock_anim.gif",
    stickerPos: "right",
    stickerScale: 1.25,
  },

  // ── 02. INSPECT ELEMENT HACK (8.62s - 16.18s) ──
  {
    id: 4,
    start: 8.62,
    end: 11.62,
    title: "RIGHT CLICK KIYA, INSPECT ELEMENT KHOLA",
    sub: "LIVE BROWSER CODE TRICK",
    tag: "💻 2-SECOND HTML HACK",
    font: fontSpace,
    fontSize: 105,
    color: "#1E293B",
    showInspectCard: true,
  },
  {
    id: 5,
    start: 11.62,
    end: 13.8,
    title: "2 HAZAAR KA LOSS...",
    sub: "ACTUAL BROKER REALITY",
    tag: "❌ -₹2,000 LOSS",
    font: fontCoolvetica,
    fontSize: 125,
    color: "#DC2626",
    highlightBg: "#FEE2E2",
    showInspectCard: true,
  },
  {
    id: 6,
    start: 13.8,
    end: 16.18,
    title: "5 LAKH KA PROFIT BAN GAYA!",
    sub: "SIRF 2 SECOND MEIN LIVE",
    tag: "🤑 100% FAKE INSPECT",
    font: fontAmericanCaptain,
    fontSize: 140,
    color: "#059669",
    highlightBg: "#BBF7D0",
    sticker: "anime sticker/shinchan_action_anim.gif",
    stickerPos: "right",
    stickerScale: 1.25,
    showInspectCard: true,
  },

  // ── 03. METATRADER 5 DEMO TRICK (16.18s - 25.24s) ──
  {
    id: 7,
    start: 16.18,
    end: 19.82,
    title: "METATRADER KA DEMO ACCOUNT",
    sub: "AUR PHONE MEIN KYA HOTA HAI?",
    tag: "📱 MT5 APP TRICK",
    font: fontPragmatica,
    fontSize: 115,
    color: "#0284C7",
    highlightBg: "#E0F2FE",
    showMT5Card: true,
  },
  {
    id: 8,
    start: 19.82,
    end: 22.7,
    title: "100% REAL ACCOUNT JAISA DIKHTA HAI",
    sub: "EXACT SAME GREEN CANDLES & NUMBERS",
    tag: "🔍 ZERO DIFFERENCE",
    font: fontNeueHaas,
    fontSize: 110,
    color: "#334155",
    showMT5Card: true,
    sticker: "preview_assets/laptop_hands.png",
    stickerPos: "left",
    stickerScale: 1.15,
  },
  {
    id: 9,
    start: 22.7,
    end: 25.24,
    title: "BAS CHHOTA SA 'DEMO' CHHIPA DETE HAIN!",
    sub: "CROP KARKE INSTAGRAM STORY PAR",
    tag: "🚫 CROPPED DEMO TAG",
    font: fontAmericanCaptain,
    fontSize: 130,
    color: "#DC2626",
    highlightBg: "#FEE2E2",
    showMT5Card: true,
    sticker: "preview_assets/shocked_cat.png",
    stickerPos: "right",
    stickerScale: 1.2,
  },

  // ── 04. THE REAL DHANDA: TELEGRAM & BROKER REV-SHARE (25.24s - 40.56s) ──
  {
    id: 10,
    start: 25.24,
    end: 27.56,
    title: "INKA ASLI PAISA TRADING SE NAHI BANTA!",
    tag: "🤫 THE UNTOLD TRUTH",
    font: fontAmericanCaptain,
    fontSize: 130,
    color: "#0F172A",
    highlightBg: "#FEF08A",
  },
  {
    id: 11,
    start: 27.56,
    end: 30.68,
    title: "ASLI DHANDA HAI TELEGRAM LINK MEIN!",
    sub: "UNKE BIO KE VIP GROUP LINK MEIN",
    tag: "✈️ VIP TELEGRAM TRAP",
    font: fontPragmatica,
    fontSize: 115,
    color: "#0284C7",
    showTelegramCard: true,
  },
  {
    id: 12,
    start: 30.68,
    end: 35.12,
    title: "ILLEGAL FOREX BROKER PAR ACCOUNT BANWA KAR",
    sub: "JAB TUM APNA PAISA HAARTE HO...",
    tag: "🚨 UNREGULATED BROKER TRAP",
    font: fontAmericanCaptain,
    fontSize: 120,
    color: "#E11D48",
    showCommissionCard: true,
    sticker: "preview_assets/tanjiro_present.png",
    stickerPos: "left",
    stickerScale: 1.2,
  },
  {
    id: 13,
    start: 35.12,
    end: 38.24,
    title: "TUMHARE LOSS KA 70% COMMISSION",
    sub: "THEY PROFIT ONLY WHEN YOU LOSE!",
    tag: "💸 70% REVENUE SHARE",
    font: fontPragmatica,
    fontSize: 120,
    color: "#DC2626",
    highlightBg: "#FEE2E2",
    showCommissionCard: true,
  },
  {
    id: 14,
    start: 38.24,
    end: 40.56,
    title: "SEEDHA INKE BANK ACCOUNT MEIN!",
    sub: "YOU LOSE = GURU PROFITS",
    font: fontAmericanCaptain,
    fontSize: 135,
    color: "#059669",
    highlightBg: "#BBF7D0",
    showCommissionCard: true,
    sticker: "anime sticker/shinchan_dance_anim.gif",
    stickerPos: "right",
    stickerScale: 1.3,
  },

  // ── 05. THE WHISTLEBLOWER AUDIT: MYFXBOOK & PAPER TRADING (40.56s - 58.90s) ──
  {
    id: 15,
    start: 40.56,
    end: 42.64,
    title: "KISI TRADER KA SACH JANNA HAI?",
    tag: "🕵️ VERIFICATION PROTOCOL",
    font: fontCoolvetica,
    fontSize: 120,
    color: "#1E293B",
  },
  {
    id: 16,
    start: 42.64,
    end: 45.02,
    title: "P&L SCREENSHOT MAT MAANGO!",
    sub: "100% PHOTOSHOPPED HO SAKTA HAI",
    tag: "❌ ZERO AUDIT VALUE",
    font: fontAmericanCaptain,
    fontSize: 135,
    color: "#DC2626",
    highlightBg: "#FEE2E2",
    sticker: "preview_assets/shocked_giyu.png",
    stickerPos: "left",
    stickerScale: 1.15,
  },
  {
    id: 17,
    start: 45.02,
    end: 48.82,
    title: "MYFXBOOK KA VERIFIED PUBLIC AUDIT MANGO",
    sub: "THE ONLY TAMPER-PROOF PROOF",
    tag: "🛡️ 100% VERIFIED AUDIT",
    font: fontPragmatica,
    fontSize: 110,
    color: "#047857",
    highlightBg: "#DCFCE7",
    showMyfxbookCard: true,
  },
  {
    id: 18,
    start: 48.82,
    end: 51.3,
    title: "JISMEIN 1 RUPYA BHI FAKE NAHI HO SAKTA!",
    sub: "DIRECT BROKER API ENCRYPTION",
    tag: "🔒 100% TAMPER PROOF",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#0F172A",
    showMyfxbookCard: true,
  },
  {
    id: 19,
    start: 51.3,
    end: 54.82,
    title: "AUR KHUD TRADING SEEKHNI HAI?",
    sub: "REAL PAISA LAGANE SE PEHLE...",
    tag: "💡 PRO TIP FOR BEGINNERS",
    font: fontPlayfair,
    fontSize: 115,
    color: "#475569",
  },
  {
    id: 20,
    start: 54.82,
    end: 58.9,
    title: "TRADINGVIEW PAPER TRADING USE KARO!",
    sub: "JAHAN 1 RUPYA BHI RISK NAHI HOTA",
    tag: "📈 ZERO-RISK SIMULATOR",
    font: fontAmericanCaptain,
    fontSize: 125,
    color: "#2563EB",
    highlightBg: "#DBEAFE",
    showTradingViewCard: true,
  },

  // ── 06. OUTRO & HIGH-CONVERSION CTA (58.90s - 72.52s) ──
  {
    id: 21,
    start: 58.9,
    end: 61.48,
    title: "IN FAKE TRADING GURUS KE SCAM SE BACHO",
    tag: "🛡️ SPREAD AWARENESS",
    font: fontNeueHaas,
    fontSize: 110,
    color: "#0F172A",
    sticker: "preview_assets/peeking_char.png",
    stickerPos: "top",
    stickerScale: 1.15,
  },
  {
    id: 22,
    start: 61.48,
    end: 64.8,
    title: "REAL VERIFIED AUDIT TOOLS KA DIRECT LINK",
    sub: "AUR COMPLETE SCAM CHECKLIST",
    tag: "📂 FREE RESOURCE PACK",
    font: fontPragmatica,
    fontSize: 112,
    color: "#1D4ED8",
    highlightBg: "#DBEAFE",
  },
  {
    id: 23,
    start: 64.8,
    end: 68.0,
    title: 'COMMENT "TRUTH"',
    sub: "INSTANT BOT DELIVERY TO YOUR DM",
    tag: "💬 TYPE 'TRUTH' IN COMMENTS",
    font: fontAmericanCaptain,
    fontSize: 150,
    color: "#E11D48",
    highlightBg: "#FFE4E6",
    sticker: "anime sticker/shinchan_wave_anim.gif",
    stickerPos: "right",
    stickerScale: 1.3,
  },
  {
    id: 24,
    start: 68.0,
    end: 72.52,
    title: "FOLLOW @yashwebsites",
    sub: "AISI REAL INTERNET SECRETS KE LIYE",
    tag: "🔥 TAP FOLLOW FOR PART 2",
    font: fontAmericanCaptain,
    fontSize: 130,
    color: "#0F172A",
    sticker: "anime sticker/shinchan_clean_standing.png",
    stickerPos: "left",
    stickerScale: 1.2,
    doodle: "plane",
  },
];

export const TradingScamExposed16x9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Active phrase lookup
  const activePhrase =
    PHRASES.find((p) => currentTime >= p.start && currentTime < p.end) ||
    PHRASES[PHRASES.length - 1];

  const phraseStartFrame = Math.round(activePhrase.start * fps);
  const phraseDurationFrames = Math.max(
    1,
    Math.round((activePhrase.end - activePhrase.start) * fps)
  );
  const localFrame = frame - phraseStartFrame;

  // Spring animations for phrase entry
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

  const cardSpring = spring({
    frame: Math.max(0, localFrame - 3),
    fps,
    config: { damping: 13, stiffness: 170, mass: 0.7 },
  });

  // Gliding Paper Airplane (Reference benchmark style)
  const planeProgress = (frame % (fps * 16)) / (fps * 16);
  const planeX = interpolate(planeProgress, [0, 1], [6, 94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const planeY =
    78 + Math.sin(frame * 0.05) * 2.8 + Math.cos(frame * 0.02) * 1.5;

  // Palm leaf shadow slow sway
  const shadowSwayX = Math.sin(frame * 0.02) * 12;
  const shadowSwayY = Math.cos(frame * 0.015) * 8;

  // ── Word-By-Word Kinetic Timing Engine ──
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
        backgroundColor: "#FAF6F0",
        overflow: "hidden",
        fontFamily: fontNeueHaas,
      }}
    >
      {/* ─── 1. Audio Track: User Provided Voiceover + Ducked BGM + SFX ─── */}
      <Audio
        src={staticFile("audio/trading_truth_tight.mp3")}
        volume={1.0}
      />
      <Audio
        src={staticFile("audio/Echo Sax.mp3")}
        volume={0.038}
        loop
      />

      {/* ─── SFX Trigger on Phrase Starts ─── */}
      {PHRASES.map((p) => {
        const pFrame = Math.round(p.start * fps);
        if (pFrame === 0) return null;
        return (
          <Sequence key={p.id} from={pFrame} durationInFrames={fps * 2} layout="none">
            <Audio src={staticFile("audio/whoosh.wav")} volume={0.16} />
          </Sequence>
        );
      })}

      {/* ─── 2. Fine Editorial Paper Texture ───────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.045,
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* ─── 3. Organic Palm Leaf Window Shadow (Benchmark signature) ─── */}
      <div
        style={{
          position: "absolute",
          top: -60 + shadowSwayY,
          right: -80 + shadowSwayX,
          width: 860,
          height: 680,
          opacity: 0.11,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <Img
          src={staticFile("preview_assets/palm_shadow.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* ─── 4. Outer Editorial Frame (24px Inset Border) ─────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "2px solid rgba(15, 23, 42, 0.08)",
          borderRadius: 28,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* ─── 5. Top Editorial Header Bar ───────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 46,
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
              backgroundColor: "#0F172A",
              color: "#FFF",
              fontFamily: fontSpace,
              fontSize: 13,
              fontWeight: 800,
              padding: "5px 14px",
              borderRadius: 6,
              letterSpacing: 1.2,
            }}
          >
            ● TRADING SECRETS // EXPOSED 01
          </div>
          <div
            style={{
              fontFamily: fontSpace,
              fontSize: 15,
              fontWeight: 700,
              color: "rgba(15, 23, 42, 0.45)",
              letterSpacing: 1,
            }}
          >
            THE FAKE PROFIT & BROKER SCAM
          </div>
        </div>

        <div
          style={{
            fontFamily: fontNeueHaas,
            fontSize: 20,
            fontWeight: 800,
            color: "rgba(15, 23, 42, 0.35)",
            letterSpacing: 1.2,
          }}
        >
          @yashwebsites
        </div>
      </div>

      {/* ─── 6. Gliding Paper Airplane (Reference benchmark style) ─────── */}
      <div
        style={{
          position: "absolute",
          left: `${planeX}%`,
          top: `${planeY}%`,
          transform: `translate(-50%, -50%) rotate(42deg)`,
          zIndex: 8,
          filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.12))",
          pointerEvents: "none",
        }}
      >
        <Img
          src={staticFile("preview_assets/airplane.png")}
          style={{ width: 68, height: 68, objectFit: "contain" }}
        />
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          7. HERO KINETIC TYPOGRAPHY & VISUAL CARDS STAGE (Centered Flex)
         ═════════════════════════════════════════════════════════════════════ */}
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
            gap: 22,
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
                color: activePhrase.color === "#059669" ? "#047857" : "#E11D48",
                backgroundColor:
                  activePhrase.color === "#059669"
                    ? "rgba(16, 185, 129, 0.12)"
                    : "rgba(225, 29, 72, 0.08)",
                border: `1.5px solid ${
                  activePhrase.color === "#059669"
                    ? "rgba(16, 185, 129, 0.3)"
                    : "rgba(225, 29, 72, 0.25)"
                }`,
                padding: "6px 22px",
                borderRadius: 100,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              {activePhrase.tag}
            </div>
          )}

          {/* WORD-BY-WORD KINETIC TITLE (ROTATING FONTS & DYNAMIC HIGHLIGHT) */}
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
                    padding: isActiveWord ? "4px 16px" : "2px 4px",
                    borderRadius: isActiveWord ? 12 : 0,
                    backgroundColor: isActiveWord
                      ? highlightBackground
                      : "transparent",
                    color: isActiveWord
                      ? "#0F172A"
                      : isPastWord
                      ? activePhrase.color
                      : "rgba(15, 23, 42, 0.65)",
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

          {/* Subtitle with Smooth Slide/Spring */}
          {activePhrase.sub && (
            <div
              style={{
                fontFamily: fontPragmatica,
                fontSize: 32,
                fontWeight: 700,
                color: "#475569",
                letterSpacing: 0.5,
                textAlign: "center",
                opacity: subSpring,
                transform: `translateY(${(1 - subSpring) * 12}px)`,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(8px)",
                padding: "8px 28px",
                borderRadius: 14,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              }}
            >
              {activePhrase.sub}
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════
              DYNAMIC VISUAL SCENE CARDS (7 High-Impact Visualizations)
             ═════════════════════════════════════════════════════════════ */}

          {/* SCENE CARD 1: ₹5,00,000 Green P&L Profit Card */}
          {activePhrase.showProfitCard && (
            <div
              style={{
                width: 720,
                backgroundColor: "#FFFFFF",
                borderRadius: 24,
                padding: "24px 32px",
                boxShadow:
                  "0 24px 48px rgba(5, 150, 105, 0.16), 0 8px 20px rgba(0,0,0,0.06)",
                border: "2px solid #A7F3D0",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transform: `scale(${cardSpring})`,
                marginTop: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      boxShadow: "0 0 12px #10B981",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#0F172A",
                      letterSpacing: 1,
                    }}
                  >
                    EXNESS PRO TRADING TERMINAL
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: "#DCFCE7",
                    color: "#047857",
                    fontFamily: fontSpace,
                    fontSize: 14,
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: 8,
                  }}
                >
                  TODAY'S REALISED P&L
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 76,
                      fontWeight: 900,
                      color: "#059669",
                      lineHeight: 1,
                      letterSpacing: 2,
                    }}
                  >
                    +₹5,24,850.00
                  </div>
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#059669",
                      marginTop: 4,
                    }}
                  >
                    ▲ +384.2% Return on Margin • Win Rate: 98.4%
                  </div>
                </div>

                {/* Animated Profit Sparkline */}
                <div
                  style={{
                    width: 200,
                    height: 60,
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 6,
                  }}
                >
                  {[30, 45, 38, 65, 52, 75, 88, 70, 95, 100].map((val, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${val}%`,
                        backgroundColor: "#10B981",
                        borderRadius: 3,
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SCENE CARD 2: Chrome Inspect Element DOM Window */}
          {activePhrase.showInspectCard && (
            <div
              style={{
                width: 820,
                backgroundColor: "#0D1117",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
                border: "2px solid #30363D",
                transform: `scale(${cardSpring})`,
                marginTop: 8,
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  backgroundColor: "#161B22",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #30363D",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#FF5F56",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#FFBD2E",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#27C93F",
                    }}
                  />
                  <span
                    style={{
                      marginLeft: 14,
                      fontFamily: fontSpace,
                      fontSize: 14,
                      color: "#8B949E",
                      fontWeight: 600,
                    }}
                  >
                    Chrome DevTools — Elements // live-dom-editor.html
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: "#DC2626",
                    color: "#FFF",
                    fontFamily: fontSpace,
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: 6,
                  }}
                >
                  LIVE HACK
                </div>
              </div>

              {/* Code DOM Inspector */}
              <div
                style={{
                  padding: "20px 24px",
                  fontFamily: fontSpace,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "#E6EDF3",
                }}
              >
                <div style={{ color: "#7EE787" }}>
                  &lt;div class="broker-dashboard-card"&gt;
                </div>
                <div style={{ paddingLeft: 24 }}>
                  <span style={{ color: "#79C0FF" }}>&lt;span</span>{" "}
                  <span style={{ color: "#D2A8FF" }}>class</span>=
                  <span style={{ color: "#A5D6FF" }}>"user-status"</span>
                  <span style={{ color: "#79C0FF" }}>&gt;</span>
                  Verified Account
                  <span style={{ color: "#79C0FF" }}>&lt;/span&gt;</span>
                </div>
                <div
                  style={{
                    paddingLeft: 24,
                    backgroundColor:
                      activePhrase.id >= 6
                        ? "rgba(16, 185, 129, 0.2)"
                        : "rgba(239, 68, 68, 0.2)",
                    borderRadius: 8,
                    padding: "6px 12px",
                    margin: "6px 0",
                    border:
                      activePhrase.id >= 6
                        ? "1.5px solid #10B981"
                        : "1.5px solid #EF4444",
                  }}
                >
                  <span style={{ color: "#79C0FF" }}>&lt;h1</span>{" "}
                  <span style={{ color: "#D2A8FF" }}>id</span>=
                  <span style={{ color: "#A5D6FF" }}>"realised-pnl"</span>
                  <span style={{ color: "#79C0FF" }}>&gt;</span>
                  {activePhrase.id >= 6 ? (
                    <span
                      style={{
                        color: "#10B981",
                        fontWeight: 900,
                        fontSize: 22,
                      }}
                    >
                      +₹5,24,850.00 ◀ [EDITED IN 2 SECONDS!]
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "#EF4444",
                        fontWeight: 900,
                        fontSize: 22,
                      }}
                    >
                      -₹2,000.00 (ORIGINAL LOSS)
                    </span>
                  )}
                  <span style={{ color: "#79C0FF" }}>&lt;/h1&gt;</span>
                </div>
                <div style={{ color: "#7EE787" }}>&lt;/div&gt;</div>
              </div>
            </div>
          )}

          {/* SCENE CARD 3: MetaTrader 5 Mobile Demo Card */}
          {activePhrase.showMT5Card && (
            <div
              style={{
                width: 780,
                backgroundColor: "#0F172A",
                borderRadius: 24,
                padding: "24px 30px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
                border: "2px solid #38BDF8",
                display: "flex",
                alignItems: "center",
                gap: 28,
                transform: `scale(${cardSpring})`,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  backgroundColor: "#0284C7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 20px rgba(2, 132, 199, 0.4)",
                }}
              >
                <Img
                  src={staticFile("brand_assets/metatrader_logo.svg")}
                  style={{ width: 50, height: 50 }}
                />
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
                      fontSize: 32,
                      color: "#FFF",
                      letterSpacing: 1.5,
                    }}
                  >
                    METATRADER 5 // IPHONE TRADING VIEW
                  </div>
                  {/* The Cropped Demo Label Highlight */}
                  <div
                    style={{
                      backgroundColor: "#DC2626",
                      color: "#FFF",
                      fontFamily: fontSpace,
                      fontSize: 16,
                      fontWeight: 900,
                      padding: "6px 14px",
                      borderRadius: 8,
                      border: "2px solid #FFF",
                      animation: "pulse 1s infinite",
                    }}
                  >
                    ⚠️ [DEMO] VIRTUAL ACCOUNT
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    marginTop: 14,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#1E293B",
                      padding: "10px 16px",
                      borderRadius: 12,
                      borderLeft: "4px solid #10B981",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: fontSpace,
                        fontSize: 13,
                        color: "#94A3B8",
                      }}
                    >
                      EUR/USD Buy 5.00
                    </div>
                    <div
                      style={{
                        fontFamily: fontPragmatica,
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#10B981",
                      }}
                    >
                      +$1,420.00 USD
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#1E293B",
                      padding: "10px 16px",
                      borderRadius: 12,
                      borderLeft: "4px solid #10B981",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: fontSpace,
                        fontSize: 13,
                        color: "#94A3B8",
                      }}
                    >
                      XAU/USD Gold Buy 3.00
                    </div>
                    <div
                      style={{
                        fontFamily: fontPragmatica,
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#10B981",
                      }}
                    >
                      +$2,850.00 USD
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 12,
                    fontFamily: fontSpace,
                    fontSize: 14,
                    color: "#F87171",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  ❌ ZERO REAL RISK • GURUS JUST CROP OUT THE "DEMO" WATERMARK!
                </div>
              </div>
            </div>
          )}

          {/* SCENE CARD 4: Telegram VIP Group Link Card */}
          {activePhrase.showTelegramCard && (
            <div
              style={{
                width: 780,
                backgroundColor: "#FFFFFF",
                borderRadius: 24,
                padding: "26px 32px",
                boxShadow:
                  "0 24px 50px rgba(34, 158, 217, 0.18), 0 8px 20px rgba(0,0,0,0.06)",
                border: "2px solid #BAE6FD",
                display: "flex",
                alignItems: "center",
                gap: 26,
                transform: `scale(${cardSpring})`,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  backgroundColor: "#229ED9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  boxShadow: "0 10px 24px rgba(34, 158, 217, 0.4)",
                }}
              >
                <Img
                  src={staticFile("brand_assets/telegram_logo.svg")}
                  style={{ width: 48, height: 48 }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 34,
                      color: "#0F172A",
                      letterSpacing: 1,
                    }}
                  >
                    VIP FOREX & CRYPTO WHALE SIGNALS 🚀
                  </div>
                  <span style={{ fontSize: 22 }}>✓</span>
                </div>

                <div
                  style={{
                    fontFamily: fontPragmatica,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0284C7",
                    marginTop: 2,
                  }}
                >
                  128,450 Subscribers • Pinned: "99% Guaranteed Signals"
                </div>

                <div
                  style={{
                    marginTop: 12,
                    backgroundColor: "#F0F9FF",
                    padding: "8px 16px",
                    borderRadius: 10,
                    border: "1.5px dashed #0284C7",
                    fontFamily: fontSpace,
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#0369A1",
                  }}
                >
                  👉 BIO LINK: t.me/VipScamBrokerTrap (The Real Money Engine)
                </div>
              </div>
            </div>
          )}

          {/* SCENE CARD 5: 70% Broker Revenue-Share Diagram */}
          {activePhrase.showCommissionCard && (
            <div
              style={{
                width: 880,
                backgroundColor: "#FFFFFF",
                borderRadius: 24,
                padding: "24px 34px",
                boxShadow:
                  "0 24px 50px rgba(225, 29, 72, 0.16), 0 8px 20px rgba(0,0,0,0.06)",
                border: "2px solid #FECDD3",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transform: `scale(${cardSpring})`,
                marginTop: 8,
              }}
            >
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
                    fontSize: 32,
                    color: "#E11D48",
                    letterSpacing: 1.5,
                  }}
                >
                  THE 70% REV-SHARE BROKER AFFILIATE SCAM
                </div>
                <div
                  style={{
                    backgroundColor: "#FFE4E6",
                    color: "#BE123C",
                    fontFamily: fontSpace,
                    fontSize: 14,
                    fontWeight: 800,
                    padding: "4px 14px",
                    borderRadius: 8,
                  }}
                >
                  THEY PROFIT WHEN YOU LOSE
                </div>
              </div>

              {/* 3-Step Flow Architecture */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr auto 1fr",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {/* Step 1: User Loss */}
                <div
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "2px solid #F87171",
                    borderRadius: 16,
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 28 }}>👦</div>
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#991B1B",
                    }}
                  >
                    Teenager Loses
                  </div>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 30,
                      color: "#DC2626",
                    }}
                  >
                    -₹1,00,000
                  </div>
                </div>

                {/* Arrow 1 */}
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: "#94A3B8",
                  }}
                >
                  ➔
                </div>

                {/* Step 2: Illegal Broker */}
                <div
                  style={{
                    backgroundColor: "#F8FAFC",
                    border: "2px solid #CBD5E1",
                    borderRadius: 16,
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 28 }}>🏦</div>
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#334155",
                    }}
                  >
                    Offshore Broker
                  </div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 14,
                      color: "#64748B",
                    }}
                  >
                    Unregulated Casino
                  </div>
                </div>

                {/* Arrow 2 */}
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: "#E11D48",
                  }}
                >
                  ➔
                </div>

                {/* Step 3: Guru Bank Account */}
                <div
                  style={{
                    backgroundColor: "#ECFDF5",
                    border: "2px solid #34D399",
                    borderRadius: 16,
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 28 }}>🤑</div>
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#065F46",
                    }}
                  >
                    Guru's Pocket
                  </div>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 30,
                      color: "#059669",
                    }}
                  >
                    +₹70,000 (70%)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCENE CARD 6: Myfxbook Verified Public Audit Badge */}
          {activePhrase.showMyfxbookCard && (
            <div
              style={{
                width: 820,
                backgroundColor: "#FFFFFF",
                borderRadius: 24,
                padding: "26px 34px",
                boxShadow:
                  "0 24px 50px rgba(5, 150, 105, 0.18), 0 8px 20px rgba(0,0,0,0.06)",
                border: "2.5px solid #10B981",
                display: "flex",
                alignItems: "center",
                gap: 28,
                transform: `scale(${cardSpring})`,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 22,
                  backgroundColor: "#ECFDF5",
                  border: "2px solid #10B981",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 20px rgba(16, 185, 129, 0.25)",
                }}
              >
                <Img
                  src={staticFile("brand_assets/myfxbook_badge.svg")}
                  style={{ width: 56, height: 56 }}
                />
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
                      fontSize: 36,
                      color: "#0F172A",
                      letterSpacing: 1.5,
                    }}
                  >
                    MYFXBOOK PUBLIC VERIFIED AUDIT
                  </div>
                  <div
                    style={{
                      backgroundColor: "#10B981",
                      color: "#FFF",
                      fontFamily: fontSpace,
                      fontSize: 14,
                      fontWeight: 800,
                      padding: "5px 14px",
                      borderRadius: 8,
                    }}
                  >
                    ✓ 100% VERIFIED
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    marginTop: 12,
                    fontFamily: fontSpace,
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#047857",
                  }}
                >
                  <span>✓ Track Record Verified</span>
                  <span>•</span>
                  <span>✓ Trading Privileges Confirmed</span>
                  <span>•</span>
                  <span>✓ Direct Broker API Sync</span>
                </div>

                <div
                  style={{
                    marginTop: 12,
                    backgroundColor: "#F0FDF4",
                    padding: "8px 16px",
                    borderRadius: 10,
                    border: "1px solid #BBF7D0",
                    fontFamily: fontNeueHaas,
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#065F46",
                  }}
                >
                  🔒 1 Rupya bhi fake nahi ho sakta • Inspect Element Does NOT
                  Work Here!
                </div>
              </div>
            </div>
          )}

          {/* SCENE CARD 7: TradingView Paper Trading Chart */}
          {activePhrase.showTradingViewCard && (
            <div
              style={{
                width: 820,
                backgroundColor: "#131722",
                borderRadius: 24,
                padding: "24px 32px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.4)",
                border: "2px solid #2962FF",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transform: `scale(${cardSpring})`,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: "#2962FF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Img
                      src={staticFile("brand_assets/tradingview_logo.svg")}
                      style={{ width: 24, height: 24 }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: fontAmericanCaptain,
                        fontSize: 26,
                        color: "#FFF",
                        letterSpacing: 1,
                      }}
                    >
                      TRADINGVIEW PAPER TRADING
                    </div>
                    <div
                      style={{
                        fontFamily: fontSpace,
                        fontSize: 13,
                        color: "#94A3B8",
                      }}
                    >
                      EUR/USD Real-time Live Market Feed
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#2962FF",
                    color: "#FFF",
                    fontFamily: fontSpace,
                    fontSize: 14,
                    fontWeight: 800,
                    padding: "5px 14px",
                    borderRadius: 8,
                  }}
                >
                  0% RISK SIMULATOR
                </div>
              </div>

              {/* Candlestick Graphic Representation */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#1E222D",
                  borderRadius: 14,
                  padding: "16px 24px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 13,
                      color: "#94A3B8",
                    }}
                  >
                    Virtual Account Balance
                  </div>
                  <div
                    style={{
                      fontFamily: fontPragmatica,
                      fontSize: 34,
                      fontWeight: 900,
                      color: "#22D3EE",
                    }}
                  >
                    $100,000.00 USD
                  </div>
                </div>

                {/* Candles visual */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    height: 50,
                  }}
                >
                  {[
                    { h: 35, c: "#26A69A" },
                    { h: 25, c: "#EF5350" },
                    { h: 42, c: "#26A69A" },
                    { h: 48, c: "#26A69A" },
                    { h: 30, c: "#EF5350" },
                    { h: 50, c: "#26A69A" },
                  ].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 14,
                        height: c.h,
                        backgroundColor: c.c,
                        borderRadius: 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ─── 8. Animated Anime Characters & Brand Stickers ───────────── */}
        {activePhrase.sticker && (
          <div
            style={{
              position: "absolute",
              ...(activePhrase.stickerPos === "right"
                ? { right: 90, top: "50%" }
                : activePhrase.stickerPos === "left"
                ? { left: 90, top: "50%" }
                : activePhrase.stickerPos === "top"
                ? { top: 120, left: "50%" }
                : { bottom: 50, left: "50%" }),
              transform: `translate(${
                activePhrase.stickerPos === "right" ||
                activePhrase.stickerPos === "left"
                  ? "0, -50%"
                  : "-50%, 0"
              }) scale(${
                stickerPop * (activePhrase.stickerScale || 1.2)
              }) rotate(${activePhrase.stickerRotate || 0}deg)`,
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

      {/* ─── 9. Bottom Editorial Status Bar ────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 38,
          left: 60,
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
            color: "rgba(15, 23, 42, 0.45)",
            letterSpacing: 1.2,
          }}
        >
          FRAME {frame} // 2176 • 72.52s MASTER CUT
        </div>

        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(15, 23, 42, 0.45)",
            letterSpacing: 1.2,
          }}
        >
          COMMENT "TRUTH" FOR VERIFIED AUDIT LINKS
        </div>
      </div>
    </AbsoluteFill>
  );
};

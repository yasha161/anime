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
import exactWords from "../data/bigtech_words_exact.json";
import exactScenes from "../data/bigtech_scenes_exact.json";

// ═════════════════════════════════════════════════════════════════════
// SVG TECH LOGOS & MASCOTS (Crisp, Zero Lag, Native Remotion)
// ═════════════════════════════════════════════════════════════════════

// Google Official 4-Color Icon SVG
const GoogleLogoSvg: React.FC<{ size?: number }> = ({ size = 56 }) => (
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
  size = 50,
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

// Walking Black Cat Mascot (Signature editz.with_aliya Aesthetic)
const WalkingCatMascot: React.FC<{ frame: number }> = ({ frame }) => {
  const walkCycle = (frame % 16) / 16;
  const legSwing1 = Math.sin(walkCycle * Math.PI * 2) * 8;
  const legSwing2 = Math.sin((walkCycle + 0.5) * Math.PI * 2) * 8;
  const bodyBob = Math.abs(Math.sin(walkCycle * Math.PI * 2)) * 3;
  const tailWag = Math.sin(frame * 0.18) * 12;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 34 - bodyBob,
        left: 48,
        zIndex: 25,
        display: "flex",
        alignItems: "center",
        gap: 12,
        pointerEvents: "none",
      }}
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 64 64"
        fill="none"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))" }}
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
          y1="48"
          x2={18 - legSwing1}
          y2="58"
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={28 - legSwing2}
          y1="50"
          x2={32 + legSwing2}
          y2="58"
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={42 + legSwing2}
          y1="50"
          x2={40 - legSwing2}
          y2="58"
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={48 - legSwing1}
          y1="48"
          x2={52 + legSwing1}
          y2="56"
          stroke="#1C1510"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          fontFamily: fontSpace,
          fontSize: 14,
          fontWeight: 800,
          color: "rgba(28, 21, 16, 0.65)",
          letterSpacing: 1,
        }}
      >
        SECRET TECH ARCHIVE // @yashwebsites
      </div>
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
        width: 48,
        height: 48,
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
// MAIN 16:9 MASTER COMPOSITION (1976 Frames = 65.88s Bunty Raw Voice)
// ═════════════════════════════════════════════════════════════════════
export const BigTechToolsExposed16x9: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find active scene from exactScenes
  const activeScene =
    exactScenes.find(
      (sc) => frame >= sc.startFrame && frame <= sc.endFrame
    ) || exactScenes[0];

  const localFrame = frame - activeScene.startFrame;

  // Scene entrance spring (Snappy, Zero-Lag)
  const sceneSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 13, stiffness: 190, mass: 0.55 },
  });

  // Dynamic Camera subtle float (Never static)
  const cameraBreathe = 1.0 + Math.sin(frame * 0.05) * 0.012;

  // Sound triggers on scene transitions
  const isSceneCut = localFrame === 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#CBB7A2", // Signature warm latte/paper tone
        color: "#1C1510",
        fontFamily: fontNeueHaas,
        overflow: "hidden",
      }}
    >
      {/* ─── 1. AUDIO CHANNELS (Raw Bunty Voice + Low Ducked Lofi Beat + SFX) ─── */}
      <Audio
        src={staticFile("audio/bigtech_tools_raw.mp3")}
        volume={1.0}
      />
      <Audio
        src={staticFile("audio/lofi_viral_beat.mp3")}
        volume={0.045}
        loop
      />
      {isSceneCut && (
        <Audio src={staticFile("audio/whoosh.wav")} volume={0.16} />
      )}

      {/* ─── 2. Fine Warm Paper Grain / Dot Texture ─── */}
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
          inset: 24,
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
          top: 40,
          left: 54,
          right: 54,
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
            ● SECRET TECH ARCHIVE // VOL. 04
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

      {/* ─── 5. Walking Cat Silhouette Mascot ─── */}
      <WalkingCatMascot frame={frame} />

      {/* ─── 6. Bottom Right Timecode & Direct Links Badge ─── */}
      <div
        style={{
          position: "absolute",
          bottom: 34,
          right: 54,
          display: "flex",
          alignItems: "center",
          gap: 16,
          zIndex: 15,
        }}
      >
        <div
          style={{
            fontFamily: fontSpace,
            fontSize: 13,
            color: "rgba(28, 21, 16, 0.45)",
            letterSpacing: 1,
          }}
        >
          FRAME {frame} // 1976 • 65.88s RAW MASTER
        </div>
        <div
          style={{
            backgroundColor: "rgba(28, 21, 16, 0.08)",
            padding: "4px 12px",
            borderRadius: 6,
            fontFamily: fontSpace,
            fontSize: 12,
            fontWeight: 800,
            color: "#1C1510",
            letterSpacing: 1,
          }}
        >
          COMMENT "TOOLS" FOR DIRECT LINKS
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          7. DYNAMIC HERO VISUAL & WORD-BY-WORD STAGE
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
          transform: `scale(${cameraBreathe})`,
          transformOrigin: "center center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${sceneSpring})`,
            transformOrigin: "center center",
            gap: 22,
            maxWidth: 1650,
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              SCENE 1: THE BIG TECH HOOK (Frames 0 - 111)
              Spoken: Google & Apple tumse yeh 3 secret tools hamesha chhipate hain!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 1 && (
            <>
              {/* Category Warning Pill */}
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#8B0000",
                  backgroundColor: "#FCD5CE",
                  border: "1.5px solid rgba(139, 0, 0, 0.28)",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  boxShadow: "0 4px 12px rgba(139, 0, 0, 0.12)",
                }}
              >
                🚨 CLASSIFIED BIG TECH LEAK
              </div>

              {/* Side-by-Side Google & Apple Brand Badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 36,
                  margin: "8px 0",
                }}
              >
                {/* Google Logo Box */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "2px solid rgba(28, 21, 16, 0.12)",
                    transform:
                      frame < 18 ? "scale(1.08)" : "scale(1.0)",
                  }}
                >
                  <GoogleLogoSvg size={46} />
                  <span
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 32,
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
                    fontSize: 26,
                    fontWeight: 900,
                    color: "#8B0000",
                  }}
                >
                  &
                </span>

                {/* Apple Logo Box */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "2px solid rgba(28, 21, 16, 0.12)",
                    transform:
                      frame >= 18 && frame < 36 ? "scale(1.08)" : "scale(1.0)",
                  }}
                >
                  <AppleLogoSvg size={42} />
                  <span
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#1C1510",
                    }}
                  >
                    Apple
                  </span>
                </div>
              </div>

              {/* Title with Word-by-Word Highlight */}
              <div
                style={{
                  fontFamily: fontPlayfair,
                  fontSize: 68,
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "#8B0000",
                  lineHeight: 1.15,
                  textAlign: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px 16px",
                  maxWidth: 1150,
                }}
              >
                {[
                  { text: "GOOGLE", start: 0, end: 18 },
                  { text: "&", start: 14, end: 18 },
                  { text: "APPLE", start: 18, end: 25 },
                  { text: "TUMSE", start: 25, end: 37 },
                  { text: "YEH", start: 37, end: 42 },
                  { text: "3 SECRET TOOLS", start: 42, end: 73, isHook: true },
                  { text: "HAMESHA", start: 80, end: 93 },
                  { text: "CHHIPATE", start: 93, end: 103 },
                  { text: "HAIN!", start: 103, end: 111 },
                ].map((item, idx) => {
                  const isActive =
                    frame >= item.start && frame <= item.end;
                  return (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: isActive
                          ? item.isHook
                            ? "#FEF08A"
                            : "#FEE2E2"
                          : "transparent",
                        color: isActive
                          ? "#1C1510"
                          : item.isHook
                          ? "#DC2626"
                          : "#8B0000",
                        padding: isActive ? "2px 16px" : "2px 4px",
                        borderRadius: 14,
                        transform: isActive ? "scale(1.08)" : "scale(1)",
                        boxShadow: isActive
                          ? "0 8px 24px rgba(0,0,0,0.12)"
                          : "none",
                      }}
                    >
                      {item.text}
                    </span>
                  );
                })}
              </div>

              {/* Shinchan Shock Sticker */}
              <div
                style={{
                  position: "absolute",
                  right: 50,
                  bottom: 30,
                  width: 180,
                  height: 180,
                  transform: `scale(${spring({
                    frame: Math.max(0, localFrame - 20),
                    fps,
                    config: { damping: 11, stiffness: 220 },
                  })})`,
                }}
              >
                <Img
                  src={staticFile("anime sticker/shinchan_shock_anim.gif")}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 2: THE CURIOSITY ACCELERATOR (Frames 111 - 245)
              Spoken: Aur 3rd tool agar pata chal gaya, toh internet use karne ka tareeka hi badal jayega!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 2 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#0F172A",
                  backgroundColor: "#FEF08A",
                  padding: "6px 26px",
                  borderRadius: 100,
                  letterSpacing: 2,
                  boxShadow: "0 4px 15px rgba(254, 240, 138, 0.4)",
                }}
              >
                🤯 GAME CHANGER WARNING
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 115,
                  letterSpacing: 2.5,
                  lineHeight: 1.0,
                  textAlign: "center",
                  color: "#1C1510",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div>AUR 3RD TOOL AGAR PATA CHAL GAYA...</div>
                <div
                  style={{
                    backgroundColor: "#1C1510",
                    color: "#FEF08A",
                    padding: "8px 32px",
                    borderRadius: 20,
                    boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
                    transform:
                      frame >= 165 ? "scale(1.05)" : "scale(1.0)",
                  }}
                >
                  INTERNET USE KARNE KA TAREEKA BADAL JAYEGA!
                </div>
              </div>

              <div
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#6B5A4B",
                }}
              >
                Zero Paid Ads • Zero Tracking • 100% Uncensored
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 3: TOOL 1 TRAP (Frames 245 - 444)
              Spoken: Tool Number 1: Jab bhi koi website Free Trial ke naam par tumhara card maange, toh apna real card mat do!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 3 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#DC2626",
                  backgroundColor: "#FEE2E2",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                💳 TOOL 01 // FREE TRIAL TRAP
              </div>

              <div
                style={{
                  fontFamily: fontPragmatica,
                  fontSize: 72,
                  fontWeight: 900,
                  color: "#1C1510",
                  textAlign: "center",
                }}
              >
                APNA REAL CARD KABHI MAT DO!
              </div>

              {/* Fake Subscription Free Trial Form */}
              <div
                style={{
                  width: 720,
                  backgroundColor: "#FFFFFF",
                  border: "2px solid rgba(220, 38, 38, 0.4)",
                  borderRadius: 24,
                  padding: "24px 32px",
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
                    <span style={{ fontSize: 26 }}>🎬</span>
                    <span
                      style={{
                        fontFamily: fontNeueHaas,
                        fontSize: 20,
                        fontWeight: 800,
                        color: "#111827",
                      }}
                    >
                      30-Day Free Trial Subscription
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#DC2626",
                      backgroundColor: "#FEE2E2",
                      padding: "4px 10px",
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
                      fontSize: 18,
                      color: "#374151",
                      letterSpacing: 2,
                    }}
                  >
                    •••• •••• •••• 4242
                  </div>
                </div>

                {/* Stamp slammed down after frame 360 ("mat do") */}
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
                        fontSize: 64,
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
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 4: PRIVACY.COM $0 VIRTUAL CARD (Frames 444 - 650)
              Spoken: Privacy.com ya burner card par jao, aur 1-click me Zero Balance virtual card generate karlo!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 4 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#059669",
                  backgroundColor: "#D1FAE5",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                🛡️ THE SECRET: PRIVACY.COM
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 88,
                  letterSpacing: 2,
                  color: "#1C1510",
                  textAlign: "center",
                }}
              >
                1-CLICK ZERO BALANCE VIRTUAL CARD!
              </div>

              {/* Holographic Virtual Mastercard Card */}
              <div
                style={{
                  width: 760,
                  height: 380,
                  background:
                    "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
                  borderRadius: 28,
                  padding: 36,
                  color: "#FFF",
                  boxShadow: "0 25px 60px rgba(15, 23, 42, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                {/* Top of Card */}
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
                  <MastercardSvg size={60} />
                </div>

                {/* Card Number */}
                <div
                  style={{
                    fontFamily: fontSpace,
                    fontSize: 34,
                    letterSpacing: 6,
                    color: "#F8FAFC",
                  }}
                >
                  4892 •••• •••• 9081
                </div>

                {/* Bottom Row & Spending Limit Toggle */}
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

                  {/* SPENDING LIMIT PILL */}
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
                      transform:
                        frame >= 580 ? "scale(1.08)" : "scale(1.0)",
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
                          fontSize: 24,
                          fontWeight: 900,
                          color: "#FFF",
                        }}
                      >
                        ₹0.00 / MONTH
                      </div>
                    </div>
                  </div>
                </div>

                {/* Red Pointer Arrow pointing at ₹0 limit */}
                <BouncingPointerArrow x={650} y={230} frame={frame} />
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 5: AUTO-DEBIT BLOCKED ALERT (Frames 650 - 760)
              Spoken: Trial bhi activate ho jayega, aur ek rupya bhi auto-debit nahi hoga!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 5 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#DC2626",
                  backgroundColor: "#FEE2E2",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                🚫 FRAUD PREVENTION ACTIVE
              </div>

              <div
                style={{
                  fontFamily: fontCoolvetica,
                  fontSize: 84,
                  letterSpacing: 1,
                  color: "#DC2626",
                  textAlign: "center",
                }}
              >
                AUTO-DEBIT SIDHA BLOCK HO JAYEGA!
              </div>

              {/* Big Dark Crimson Alert Box */}
              <div
                style={{
                  width: 820,
                  backgroundColor: "#0D0B0A",
                  borderRadius: 24,
                  padding: "28px 36px",
                  border: "2px solid #DC2626",
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
                      fontSize: 16,
                      fontWeight: 900,
                      color: "#FFF",
                    }}
                  >
                    ₹0 DEDUCTED
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 6: TOOL 2 TRAP (Frames 760 - 939)
              Spoken: Second tool: Kisi bhi random website par login karte waqt apna personal email mat daalo!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 6 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#0284C7",
                  backgroundColor: "#E0F2FE",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                🛡️ TOOL 02 // ANTI-SPAM DEFENSE
              </div>

              <div
                style={{
                  fontFamily: fontPragmatica,
                  fontSize: 74,
                  fontWeight: 900,
                  color: "#1C1510",
                  textAlign: "center",
                }}
              >
                RANDOM SITES PAR PERSONAL EMAIL MAT DAALO!
              </div>

              {/* Flooding Spam Warning UI */}
              <div
                style={{
                  width: 760,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 24,
                  padding: "24px 30px",
                  border: "2px solid rgba(28, 21, 16, 0.15)",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
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
                  <span>⚠️</span> INBOX CONTAMINATION WARNING (500+ SPAM EMAILS)
                </div>

                {[
                  "🔥 Exclusive Offer: Claim ₹5,000 Gift Voucher!",
                  "📢 Account Alert: Unverified promotional newsletter",
                  "🛒 70% Discount on unknown products",
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
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 7: TEMP-MAIL & LIVE OTP (Frames 939 - 1122)
              Spoken: Temp-Mail use karo, yeh tumhe 10-minute ka temporary email aur live OTP de dega!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 7 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#0284C7",
                  backgroundColor: "#E0F2FE",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                ⚡ INSTANT OTP INBOX
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 88,
                  letterSpacing: 2,
                  color: "#1C1510",
                  textAlign: "center",
                }}
              >
                10-MINUTE DISPOSABLE EMAIL & LIVE OTP!
              </div>

              {/* Temp-Mail Interactive Mockup Card */}
              <div
                style={{
                  width: 820,
                  backgroundColor: "#0F172A",
                  borderRadius: 24,
                  padding: "26px 34px",
                  color: "#FFF",
                  boxShadow: "0 22px 55px rgba(15, 23, 42, 0.4)",
                  border: "2px solid #0284C7",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Email Address Bar */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#1E293B",
                    borderRadius: 14,
                    padding: "14px 22px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>📬</span>
                    <span
                      style={{
                        fontFamily: fontSpace,
                        fontSize: 22,
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
                      fontSize: 14,
                      fontWeight: 800,
                      padding: "8px 18px",
                      borderRadius: 8,
                    }}
                  >
                    COPY EMAIL
                  </div>
                </div>

                {/* Live OTP Notification Box */}
                <div
                  style={{
                    backgroundColor: "#162032",
                    border: "2px solid #10B981",
                    borderRadius: 16,
                    padding: "16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)",
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
                      LIVE INCOMING MESSAGE
                    </div>
                    <div
                      style={{
                        fontFamily: fontNeueHaas,
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#F1F5F9",
                      }}
                    >
                      Service Verification Code Received
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#10B981",
                      color: "#0F172A",
                      fontFamily: fontSpace,
                      fontSize: 28,
                      fontWeight: 900,
                      padding: "8px 24px",
                      borderRadius: 10,
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
                    fontSize: 13,
                    color: "#94A3B8",
                  }}
                >
                  <span>⏳ Auto-destruct timer: 09:42 remaining</span>
                  <span>🔒 Inbox wipes clean automatically</span>
                </div>
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 8: 100% SPAM-FREE SHIELD (Frames 1122 - 1206)
              Spoken: Jisse tumhara personal inbox spam se hamesha safe rahega!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 8 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#059669",
                  backgroundColor: "#D1FAE5",
                  padding: "6px 26px",
                  borderRadius: 100,
                  letterSpacing: 2,
                }}
              >
                🛡️ PERMANENT SPAM IMMUNITY
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 96,
                  letterSpacing: 2,
                  color: "#059669",
                  textAlign: "center",
                }}
              >
                PERSONAL INBOX HAMESHA SAFE RAHEGA!
              </div>

              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "3px solid #10B981",
                  borderRadius: 24,
                  padding: "24px 44px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  boxShadow: "0 18px 45px rgba(16, 185, 129, 0.2)",
                }}
              >
                <span style={{ fontSize: 44 }}>🔒</span>
                <div>
                  <div
                    style={{
                      fontFamily: fontSpace,
                      fontSize: 24,
                      fontWeight: 900,
                      color: "#1C1510",
                    }}
                  >
                    ZERO SPAM • ZERO DATA BROKERS
                  </div>
                  <div
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 18,
                      color: "#4B5563",
                    }}
                  >
                    Your primary email stays pristine forever.
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 9: TOOL 3 SEARXNG (Frames 1206 - 1350)
              Spoken: Third aur sabse powerful tool: SearXNG search engine!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 9 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#2563EB",
                  backgroundColor: "#DBEAFE",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                ⚡ TOOL 03 // UNCENSORED METASEARCH
              </div>

              <div
                style={{
                  fontFamily: fontPlayfair,
                  fontSize: 84,
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "#1E3A8A",
                  textAlign: "center",
                }}
              >
                SEARXNG SEARCH ENGINE
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 60,
                  letterSpacing: 2,
                  color: "#1C1510",
                  backgroundColor: "#FEF08A",
                  padding: "6px 28px",
                  borderRadius: 12,
                }}
              >
                THE MOST POWERFUL TOOL ON THE ENTIRE INTERNET!
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 10: GOOGLE ADS CRITIQUE (Frames 1350 - 1474)
              Spoken: Google jahan sirf sponsored ads aur paid blogs dikhata hai,
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 10 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#DC2626",
                  backgroundColor: "#FEE2E2",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                ❌ GOOGLE'S PAID ALGORITHM
              </div>

              <div
                style={{
                  fontFamily: fontPragmatica,
                  fontSize: 70,
                  fontWeight: 900,
                  color: "#DC2626",
                  textAlign: "center",
                }}
              >
                GOOGLE SIRF SPONSORED ADS DIKHATA HAI!
              </div>

              {/* Google Fake Ad Results Box */}
              <div
                style={{
                  width: 800,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 20,
                  padding: "20px 28px",
                  border: "2px solid #E5E7EB",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "Ad • Top 10 Tools (Paid Affiliate Link Placement)",
                  "Sponsored • Commercial SaaS Solution with Paywall",
                  "Ad • Download Portal full of adware and trackers",
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
                      border: "1px solid #E5E7EB",
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
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 11: DIRECT UNINDEXED FILES & DATABASES (Frames 1474 - 1664)
              Spoken: yeh tool pura internet bina kisi tracking ke, seedha direct files aur hidden databases search kar ke de dega!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 11 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#059669",
                  backgroundColor: "#D1FAE5",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                📂 UNINDEXED OPEN WEB
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 84,
                  letterSpacing: 2,
                  color: "#059669",
                  textAlign: "center",
                }}
              >
                SEEDHA DIRECT FILES & HIDDEN DATABASES!
              </div>

              {/* SearXNG Dark Terminal Interface */}
              <div
                style={{
                  width: 840,
                  backgroundColor: "#0B132B",
                  borderRadius: 24,
                  padding: "24px 32px",
                  color: "#FFF",
                  boxShadow: "0 22px 60px rgba(11, 19, 43, 0.4)",
                  border: "2px solid #10B981",
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
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: 10,
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
                    ● SearXNG // Zero Tracking Metasearch
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
                    padding: "12px 18px",
                    fontFamily: fontSpace,
                    fontSize: 16,
                    color: "#6EE7B7",
                  }}
                >
                  📁 Index-of: AI Datasets & Research Papers [DIRECT FTP]
                </div>
                <div
                  style={{
                    backgroundColor: "#1C2541",
                    borderRadius: 10,
                    padding: "12px 18px",
                    fontFamily: fontSpace,
                    fontSize: 16,
                    color: "#93C5FD",
                  }}
                >
                  📁 Unindexed Developer Code Archives • 0 Ads • 0 Tracking
                </div>
              </div>
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 12: 10 WEBSITES DIRECTORY (Frames 1664 - 1782)
              Spoken: Maine aisi 10 underground websites ki complete direct link list bna di hai.
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 12 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#8B0000",
                  backgroundColor: "#FCD5CE",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                📂 FREE UNDERGROUND DIRECTORY
              </div>

              <div
                style={{
                  fontFamily: fontPlayfair,
                  fontSize: 82,
                  fontWeight: 900,
                  color: "#8B0000",
                  textAlign: "center",
                }}
              >
                10 UNDERGROUND WEBSITES LIST
              </div>

              {/* Big 10 White Badge Card */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2.5px solid #8B0000",
                  borderRadius: 24,
                  padding: "20px 48px",
                  display: "flex",
                  alignItems: "center",
                  gap: 32,
                  boxShadow: "0 18px 45px rgba(139, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{
                    fontFamily: fontAmericanCaptain,
                    fontSize: 100,
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
                      fontSize: 28,
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
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 13: MANYCHAT CTA (Frames 1782 - 1905)
              Spoken: Comments me likho "TOOLS", main abhi tumhare DM me direct link bhej dunga!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 13 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#E11D48",
                  backgroundColor: "#FFE4E6",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                💬 INSTANT DIRECT MESSAGE
              </div>

              <div
                style={{
                  fontFamily: fontAmericanCaptain,
                  fontSize: 130,
                  letterSpacing: 3,
                  color: "#E11D48",
                  backgroundColor: "#FFFFFF",
                  padding: "10px 48px",
                  borderRadius: 28,
                  boxShadow: "0 20px 50px rgba(225, 29, 72, 0.3)",
                  border: "3px solid #E11D48",
                  transform: `scale(${1.0 + Math.sin(frame * 0.3) * 0.04})`,
                }}
              >
                COMMENT "TOOLS"
              </div>

              <div
                style={{
                  fontFamily: fontNeueHaas,
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#1C1510",
                }}
              >
                Main abhi tumhare DM mein teeno tools ke direct links bhej dunga!
              </div>

              <BouncingPointerArrow x={760} y={190} frame={frame} />
            </>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SCENE 14: FOLLOW OUTRO (Frames 1905 - 1976)
              Spoken: aur aise secret tech ke liye FOLLOW karlo!
             ───────────────────────────────────────────────────────────── */}
          {activeScene.id === 14 && (
            <>
              <div
                style={{
                  fontFamily: fontSpace,
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#1C1510",
                  backgroundColor: "rgba(28, 21, 16, 0.08)",
                  padding: "6px 24px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                }}
              >
                🚀 DAILY UNFILTERED TECH
              </div>

              {/* Profile Card */}
              <div
                style={{
                  backgroundColor: "#0D0B0A",
                  borderRadius: 24,
                  padding: "24px 38px",
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                  boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#E11D48",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                  }}
                >
                  🚀
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: fontAmericanCaptain,
                      fontSize: 36,
                      color: "#FFF",
                      letterSpacing: 1.5,
                    }}
                  >
                    @YASHWEBSITES ✓
                  </div>
                  <div
                    style={{
                      fontFamily: fontNeueHaas,
                      fontSize: 16,
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
                    padding: "12px 28px",
                    borderRadius: 12,
                    boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)",
                    transform:
                      frame >= 1940 ? "scale(1.08)" : "scale(1.0)",
                  }}
                >
                  FOLLOW
                </div>
              </div>

              {/* Shinchan Wave Sticker */}
              <div
                style={{
                  position: "absolute",
                  right: 90,
                  bottom: 70,
                  width: 200,
                  height: 200,
                }}
              >
                <Img
                  src={staticFile("anime sticker/shinchan_wave_anim.gif")}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};

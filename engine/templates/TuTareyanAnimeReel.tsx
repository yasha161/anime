import React, { useMemo } from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// =========================================================================
// 1. TIMING & LYRICS DATA (43.0s / 1075 frames @ 25fps)
// Song: "Tu Ta Tareyan Toh V Sohna" - Hamza Malik & Zain Zohaib (Alfaaz)
// 100% Hinglish, Max 2 lines per screen, Fast Kinetic Typography
// =========================================================================

interface WordSync {
  word: string;
  startFrame: number;
  endFrame: number;
}

interface LyricSegment {
  id: number;
  startFrame: number;
  endFrame: number;
  line1: string;
  line2: string;
  words: WordSync[];
}

const LYRICS: LyricSegment[] = [
  {
    id: 1,
    startFrame: 12,
    endFrame: 182,
    line1: "BEH JA TU MERE SAAMNE,",
    line2: "TAINU AKHIYAN CH BHAR KE VEKHAN",
    words: [
      { word: "BEH", startFrame: 14, endFrame: 32 },
      { word: "JA", startFrame: 32, endFrame: 50 },
      { word: "TU", startFrame: 50, endFrame: 70 },
      { word: "MERE", startFrame: 70, endFrame: 92 },
      { word: "SAAMNE,", startFrame: 92, endFrame: 115 },
      { word: "TAINU", startFrame: 115, endFrame: 135 },
      { word: "AKHIYAN", startFrame: 135, endFrame: 152 },
      { word: "CH", startFrame: 152, endFrame: 162 },
      { word: "BHAR", startFrame: 162, endFrame: 172 },
      { word: "KE", startFrame: 172, endFrame: 177 },
      { word: "VEKHAN", startFrame: 177, endFrame: 182 },
    ],
  },
  {
    id: 2,
    startFrame: 187,
    endFrame: 326,
    line1: "VEKHAN TAINU RAAT BHAR...",
    line2: "CHARHDI SAVER TAK",
    words: [
      { word: "VEKHAN", startFrame: 190, endFrame: 220 },
      { word: "TAINU", startFrame: 220, endFrame: 245 },
      { word: "RAAT", startFrame: 245, endFrame: 270 },
      { word: "BHAR...", startFrame: 270, endFrame: 290 },
      { word: "CHARHDI", startFrame: 290, endFrame: 308 },
      { word: "SAVER", startFrame: 308, endFrame: 320 },
      { word: "TAK", startFrame: 320, endFrame: 326 },
    ],
  },
  {
    id: 3,
    startFrame: 337,
    endFrame: 476,
    line1: "BAAGHAAN VICHON MEHKDE,",
    line2: "TODE TERE LAYI GULAAB 🌹",
    words: [
      { word: "BAAGHAAN", startFrame: 340, endFrame: 375 },
      { word: "VICHON", startFrame: 375, endFrame: 405 },
      { word: "MEHKDE,", startFrame: 405, endFrame: 430 },
      { word: "TODE", startFrame: 430, endFrame: 445 },
      { word: "TERE", startFrame: 445, endFrame: 458 },
      { word: "LAYI", startFrame: 458, endFrame: 466 },
      { word: "GULAAB 🌹", startFrame: 466, endFrame: 476 },
    ],
  },
  {
    id: 4,
    startFrame: 476,
    endFrame: 626,
    line1: "MAHI TERE DEEDAAR LAYI,",
    line2: "HAR PAL CH TERA HI KHWAAB",
    words: [
      { word: "MAHI", startFrame: 480, endFrame: 515 },
      { word: "TERE", startFrame: 515, endFrame: 540 },
      { word: "DEEDAAR", startFrame: 540, endFrame: 568 },
      { word: "LAYI,", startFrame: 568, endFrame: 585 },
      { word: "HAR", startFrame: 585, endFrame: 598 },
      { word: "PAL", startFrame: 598, endFrame: 610 },
      { word: "CH", startFrame: 610, endFrame: 615 },
      { word: "TERA", startFrame: 615, endFrame: 620 },
      { word: "HI", startFrame: 620, endFrame: 623 },
      { word: "KHWAAB", startFrame: 623, endFrame: 626 },
    ],
  },
  {
    id: 5,
    startFrame: 626,
    endFrame: 698,
    line1: "TU TAAN TAAREYAN TON",
    line2: "VI SOHNA AE! ✨",
    words: [
      { word: "TU", startFrame: 628, endFrame: 640 },
      { word: "TAAN", startFrame: 640, endFrame: 652 },
      { word: "TAAREYAN", startFrame: 652, endFrame: 668 },
      { word: "TON", startFrame: 668, endFrame: 678 },
      { word: "VI", startFrame: 678, endFrame: 686 },
      { word: "SOHNA", startFrame: 686, endFrame: 694 },
      { word: "AE! ✨", startFrame: 694, endFrame: 698 },
    ],
  },
  {
    id: 6,
    startFrame: 698,
    endFrame: 770,
    line1: "TERE WARGA KOI",
    line2: "NA HONA AE! 🌙",
    words: [
      { word: "TERE", startFrame: 702, endFrame: 720 },
      { word: "WARGA", startFrame: 720, endFrame: 736 },
      { word: "KOI", startFrame: 736, endFrame: 752 },
      { word: "NA", startFrame: 752, endFrame: 762 },
      { word: "HONA", startFrame: 762, endFrame: 768 },
      { word: "AE! 🌙", startFrame: 768, endFrame: 770 },
    ],
  },
  {
    id: 7,
    startFrame: 770,
    endFrame: 843,
    line1: "TU TAAN TAAREYAN TON",
    line2: "VI SOHNA AE! ✨",
    words: [
      { word: "TU", startFrame: 772, endFrame: 785 },
      { word: "TAAN", startFrame: 785, endFrame: 800 },
      { word: "TAAREYAN", startFrame: 800, endFrame: 818 },
      { word: "TON", startFrame: 818, endFrame: 826 },
      { word: "VI", startFrame: 826, endFrame: 834 },
      { word: "SOHNA", startFrame: 834, endFrame: 840 },
      { word: "AE! ✨", startFrame: 840, endFrame: 843 },
    ],
  },
  {
    id: 8,
    startFrame: 843,
    endFrame: 919,
    line1: "TERE WARGA KOI",
    line2: "NA HONA AE! 🌙",
    words: [
      { word: "TERE", startFrame: 845, endFrame: 865 },
      { word: "WARGA", startFrame: 865, endFrame: 885 },
      { word: "KOI", startFrame: 885, endFrame: 900 },
      { word: "NA", startFrame: 900, endFrame: 910 },
      { word: "HONA", startFrame: 910, endFrame: 916 },
      { word: "AE! 🌙", startFrame: 916, endFrame: 919 },
    ],
  },
  {
    id: 9,
    startFrame: 919,
    endFrame: 1075,
    line1: "JINNA TUSSI MERE NAAL PYAR KARDE O,",
    line2: "MAIN TAAN TERE NAAL KAR LEYA AE! ❤️",
    words: [
      { word: "JINNA", startFrame: 922, endFrame: 940 },
      { word: "TUSSI", startFrame: 940, endFrame: 960 },
      { word: "MERE", startFrame: 960, endFrame: 975 },
      { word: "NAAL", startFrame: 975, endFrame: 988 },
      { word: "PYAR", startFrame: 988, endFrame: 1005 },
      { word: "KARDE", startFrame: 1005, endFrame: 1018 },
      { word: "O,", startFrame: 1018, endFrame: 1025 },
      { word: "MAIN", startFrame: 1025, endFrame: 1038 },
      { word: "TAAN", startFrame: 1038, endFrame: 1048 },
      { word: "TERE", startFrame: 1048, endFrame: 1058 },
      { word: "NAAL", startFrame: 1058, endFrame: 1065 },
      { word: "KAR", startFrame: 1065, endFrame: 1070 },
      { word: "LEYA", startFrame: 1070, endFrame: 1073 },
      { word: "AE! ❤️", startFrame: 1073, endFrame: 1075 },
    ],
  },
];

// =========================================================================
// 2. PALETTE & DESIGN TOKENS
// =========================================================================
const PALETTE = {
  // Midnight Celestial Sky
  skyZenith: '#040714',
  skyUpper: '#090d24',
  skyMid: '#131b3e',
  skyHorizon: '#241e45',
  nebulaPurple: '#4c1d95',
  nebulaMagenta: '#831843',
  moonGlow: '#fef08a',
  starlightWhite: '#ffffff',
  starlightGold: '#facc15',

  // Architecture & Terrace
  marbleDark: '#0e1424',
  marbleMid: '#1a2238',
  marbleBalustrade: '#28344e',
  marbleHighlight: '#475569',
  lanternAmber: '#f59e0b',
  lanternCore: '#fffbeb',

  // Kabir (Anime Male Lead) - Refined Fair Skin with Soft Cel Shadows
  kabirSkinFair: '#ffedd5',
  kabirSkinBase: '#fed7aa',
  kabirSkinShadow: '#fba56d',
  kabirHairDark: '#0f172a',
  kabirHairMid: '#1e293b',
  kabirHairSheen: '#94a3b8',
  kabirEyesIris: '#d97706',
  kabirCoatMain: '#0b1329',
  kabirCoatLapel: '#1e293b',
  kabirCoatGoldZari: '#f59e0b',

  // Tara (Anime Female Lead) - Ethereal Porcelain & Rose
  taraSkinFair: '#fff1f2',
  taraSkinBase: '#ffedd5',
  taraSkinShadow: '#fecdd3',
  taraBlush: '#f43f5e',
  taraHairDark: '#1c1917',
  taraHairMid: '#292524',
  taraHairSheen: '#c084fc',
  taraEyesIris: '#818cf8',
  taraEyesPupil: '#1e1b4b',
  taraKurtiPink: '#db2777',
  taraKurtiBorder: '#facc15',
  taraDupattaChiffon: '#f472b6',
  taraDupattaGlow: '#fbcfe8',

  // Velvet Rose
  rosePetalDark: '#881337',
  rosePetalMid: '#be123c',
  rosePetalBright: '#e11d48',
  roseStem: '#15803d',
};

// =========================================================================
// 3. PROCEDURAL CELESTIAL BACKGROUND & ATMOSPHERE
// =========================================================================

function generateStars(count: number) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const seedX = (Math.sin(i * 37.19 + 13.57) * 43758.545) % 1;
    const seedY = (Math.cos(i * 59.23 + 29.81) * 23456.789) % 1;
    const seedSize = (Math.sin(i * 83.47 + 71.13) * 12345.678) % 1;
    const seedPulseSpeed = (Math.cos(i * 19.83 + 47.29) * 98765.432) % 1;
    stars.push({
      id: i,
      x: Math.abs(seedX) * 1080,
      y: Math.abs(seedY) * 1100,
      r: 1.2 + Math.abs(seedSize) * 2.4,
      speed: 0.04 + Math.abs(seedPulseSpeed) * 0.08,
      baseOpacity: 0.35 + Math.abs(seedSize) * 0.55,
      isGold: i % 7 === 0,
    });
  }
  return stars;
}

const STATIC_STARS = generateStars(120);

function generatePetals(count: number) {
  const petals = [];
  for (let i = 0; i < count; i++) {
    const seedX = (Math.sin(i * 23.45 + 17.89) * 34567.89) % 1;
    const seedY = (Math.cos(i * 41.23 + 67.12) * 56789.01) % 1;
    const seedScale = (Math.sin(i * 13.91 + 91.33) * 67890.12) % 1;
    const seedSpeed = (Math.cos(i * 77.11 + 31.45) * 78901.23) % 1;
    petals.push({
      id: i,
      initX: Math.abs(seedX) * 1180 - 50,
      initY: Math.abs(seedY) * 2000 - 100,
      scale: 0.6 + Math.abs(seedScale) * 0.8,
      speedY: 2.5 + Math.abs(seedSpeed) * 3.5,
      speedX: 1.2 + Math.abs(seedScale) * 2.0,
      rotSpeed: 0.03 + Math.abs(seedSpeed) * 0.05,
    });
  }
  return petals;
}

const STATIC_PETALS = generatePetals(30);

const CelestialSky: React.FC<{
  frame: number;
  cameraScale?: number;
  cameraY?: number;
  showShootingStarAlways?: boolean;
}> = ({ frame, cameraScale = 1.0, cameraY = 0, showShootingStarAlways = false }) => {
  const moonPulse = 1 + Math.sin(frame * 0.04) * 0.03;
  const shootingStarFrame = showShootingStarAlways ? frame % 60 : frame % 160;
  const isShootingStarActive = shootingStarFrame < 28;
  const starX = interpolate(shootingStarFrame, [0, 28], [1050, 150], { extrapolateRight: 'clamp' });
  const starY = interpolate(shootingStarFrame, [0, 28], [120, 720], { extrapolateRight: 'clamp' });
  const starOpacity = interpolate(shootingStarFrame, [0, 8, 22, 28], [0, 0.95, 0.8, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${cameraScale}) translateY(${cameraY}px)`,
        transformOrigin: '50% 30%',
      }}
    >
      <svg viewBox="0 0 1080 1920" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={PALETTE.skyZenith} />
            <stop offset="35%" stopColor={PALETTE.skyUpper} />
            <stop offset="65%" stopColor={PALETTE.skyMid} />
            <stop offset="100%" stopColor={PALETTE.skyHorizon} />
          </linearGradient>

          <radialGradient id="nebulaGlow" cx="45%" cy="30%" r="55%">
            <stop offset="0%" stopColor={PALETTE.nebulaPurple} stopOpacity="0.45" />
            <stop offset="50%" stopColor={PALETTE.nebulaMagenta} stopOpacity="0.22" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="moonAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={PALETTE.moonGlow} stopOpacity="0.9" />
            <stop offset="40%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#60a5fa" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <filter id="starBloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="bokehSoft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <rect width="1080" height="1920" fill="url(#twilightSky)" />

        <ellipse cx="500" cy="550" rx="650" ry="420" fill="url(#nebulaGlow)" style={{ mixBlendMode: 'screen' }} />

        <g filter="url(#starBloom)">
          {STATIC_STARS.map((s) => {
            const flicker = Math.sin(frame * s.speed + s.id) * 0.35 + 0.65;
            return (
              <circle
                key={s.id}
                cx={s.x}
                cy={s.y}
                r={s.r}
                fill={s.isGold ? PALETTE.starlightGold : PALETTE.starlightWhite}
                opacity={s.baseOpacity * flicker}
              />
            );
          })}
        </g>

        {isShootingStarActive && (
          <g opacity={starOpacity}>
            <line
              x1={starX + 180}
              y1={starY - 110}
              x2={starX}
              y2={starY}
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#starBloom)"
            />
            <circle cx={starX} cy={starY} r="6" fill="#fef08a" filter="url(#starBloom)" />
          </g>
        )}

        {/* Luminous Crescent Moon */}
        <g transform={`translate(820, 320) scale(${moonPulse})`}>
          <circle cx="0" cy="0" r="140" fill="url(#moonAura)" style={{ mixBlendMode: 'screen' }} />
          <path
            d="M -20 -70 C 30 -50 50 10 20 60 C -10 40 -20 10 -15 -20 C -10 -45 -18 -60 -20 -70 Z"
            fill="#ffffff"
            filter="url(#starBloom)"
          />
          <path
            d="M -20 -70 C 25 -45 42 12 18 55 C -8 38 -15 10 -12 -18 C -8 -40 -16 -58 -20 -70 Z"
            fill="#fef08a"
            opacity="0.85"
          />
        </g>

        {/* Distant Royal Silhouettes */}
        <g opacity="0.65">
          <path
            d="M 0 1180 L 120 1140 L 120 1080 Q 140 1050 160 1080 L 160 1140 L 280 1160 L 380 1110 Q 420 1060 460 1110 L 460 1170 L 620 1150 L 720 1090 Q 760 1040 800 1090 L 800 1160 L 960 1130 L 1080 1180 L 1080 1920 L 0 1920 Z"
            fill="#080e1e"
          />
          {[
            { cx: 180, cy: 1180, r: 24, c: '#f59e0b', op: 0.35 },
            { cx: 340, cy: 1160, r: 18, c: '#fbbf24', op: 0.4 },
            { cx: 520, cy: 1190, r: 28, c: '#f43f5e', op: 0.28 },
            { cx: 680, cy: 1170, r: 22, c: '#38bdf8', op: 0.3 },
            { cx: 860, cy: 1160, r: 32, c: '#fbbf24', op: 0.45 },
            { cx: 980, cy: 1190, r: 20, c: '#f59e0b', op: 0.35 },
          ].map((b, idx) => (
            <circle
              key={idx}
              cx={b.cx}
              cy={b.cy}
              r={b.r * (1 + Math.sin(frame * 0.06 + idx) * 0.15)}
              fill={b.c}
              opacity={b.op}
              filter="url(#bokehSoft)"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}
        </g>
      </svg>
    </AbsoluteFill>
  );
};

const DriftingRosePetals: React.FC<{ frame: number; intensity?: number }> = ({ frame, intensity = 1.0 }) => {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <svg viewBox="0 0 1080 1920" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="petalGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={PALETTE.rosePetalBright} />
            <stop offset="60%" stopColor={PALETTE.rosePetalMid} />
            <stop offset="100%" stopColor={PALETTE.rosePetalDark} />
          </radialGradient>
        </defs>
        {STATIC_PETALS.map((p) => {
          const y = (p.initY + frame * p.speedY * intensity) % 2100 - 100;
          const x = (p.initX + Math.sin(frame * 0.03 + p.id) * 70 + frame * p.speedX * 0.4) % 1180 - 50;
          const rot = (frame * p.rotSpeed * 60 + p.id * 40) % 360;
          return (
            <g
              key={p.id}
              transform={`translate(${x}, ${y}) rotate(${rot}) scale(${p.scale})`}
              opacity={0.85}
            >
              <path
                d="M 0 -18 C 12 -22 24 -8 20 12 C 16 26 0 34 -8 24 C -18 14 -16 -8 0 -18 Z"
                fill="url(#petalGrad)"
                stroke="#4c0519"
                strokeWidth="1.2"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const TerraceBalustrade: React.FC<{ frame: number }> = ({ frame }) => {
  const lanternFlicker = 1 + Math.sin(frame * 0.15) * 0.08 + Math.cos(frame * 0.28) * 0.05;

  return (
    <svg
      viewBox="0 0 1080 1920"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="lanternRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={PALETTE.lanternCore} stopOpacity="0.95" />
          <stop offset="35%" stopColor={PALETTE.lanternAmber} stopOpacity="0.6" />
          <stop offset="75%" stopColor="#ea580c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="balustradeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={PALETTE.marbleBalustrade} />
          <stop offset="30%" stopColor={PALETTE.marbleMid} />
          <stop offset="100%" stopColor={PALETTE.marbleDark} />
        </linearGradient>
      </defs>

      <g>
        <rect x="0" y="1380" width="1080" height="45" rx="6" fill="#334155" />
        <rect x="0" y="1380" width="1080" height="12" fill="#64748b" opacity="0.6" />

        {[60, 160, 260, 360, 460, 560, 660, 760, 860, 960].map((xPillar, idx) => (
          <g key={idx}>
            <rect x={xPillar - 14} y="1425" width="28" height="220" fill="url(#balustradeGrad)" rx="4" />
            <circle cx={xPillar} cy="1510" r="9" fill="#080e1e" />
            <circle cx={xPillar} cy="1570" r="7" fill="#080e1e" />
          </g>
        ))}

        <rect x="0" y="1645" width="1080" height="40" fill="#1e293b" />
        <rect x="0" y="1685" width="1080" height="235" fill="#0b1120" />
        <line x1="0" y1="1685" x2="1080" y2="1685" stroke="#475569" strokeWidth="4" opacity="0.7" />
      </g>

      <g transform={`translate(160, 1260) scale(${lanternFlicker})`}>
        <circle cx="0" cy="0" r="220" fill="url(#lanternRadial)" style={{ mixBlendMode: 'screen' }} />
        <path d="M -30 -40 L 0 -70 L 30 -40 Z" fill="#78350f" stroke="#d97706" strokeWidth="3" />
        <circle cx="0" cy="-75" r="7" fill="none" stroke="#d97706" strokeWidth="3" />
        <rect x="-24" y="-40" width="48" height="60" rx="6" fill="#fef08a" opacity="0.85" />
        <line x1="-24" y1="-10" x2="24" y2="-10" stroke="#78350f" strokeWidth="2.5" />
        <line x1="0" y1="-40" x2="0" y2="20" stroke="#78350f" strokeWidth="2.5" />
        <ellipse cx="0" cy="-8" rx="10" ry="16" fill="#ffffff" filter="url(#starBloom)" />
        <rect x="-28" y="20" width="56" height="15" rx="3" fill="#78350f" stroke="#d97706" strokeWidth="2" />
      </g>
    </svg>
  );
};

// =========================================================================
// 4. REFINED 2D ANIME CHARACTER MODELS (ZERO DISCOLORATION / ZERO GLITCH)
// =========================================================================

// --- KABIR: AUTHENTIC 2D ANIME BOY ---
interface KabirProps {
  frame: number;
  x?: number;
  y?: number;
  scale?: number;
  facing?: 'left' | 'right' | 'front';
  isGazingAtStars?: boolean;
  isHoldingRose?: boolean;
  eyeBlink?: boolean;
}

const KabirAnimeFigure: React.FC<KabirProps> = ({
  frame,
  x = 360,
  y = 860,
  scale = 1.35,
  facing = 'right',
  isGazingAtStars = false,
  isHoldingRose = false,
}) => {
  const breath = Math.sin(frame * 0.07) * 3;
  const isBlinking = frame % 95 < 4;
  const flipX = facing === 'left' ? -1 : 1;

  return (
    <svg
      viewBox="0 0 1080 1920"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="kabirIrisGrad" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="45%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
      </defs>

      <g transform={`translate(${x}, ${y + breath}) scale(${scale * flipX}, ${scale})`}>
        {/* Back Hair Volume */}
        <path
          d="M -70 -70 C -95 -20 -80 60 -40 85 C 0 95 40 85 70 50 C 90 -10 75 -70 50 -85 Z"
          fill={PALETTE.kabirHairDark}
        />

        {/* Clean Anime Neck (Connecting directly to Mandarin Collar) */}
        <g>
          <path d="M -22 30 L -26 115 L 26 115 L 22 30 Z" fill={PALETTE.kabirSkinBase} />
          {/* Subtle Neck Cel Shadow */}
          <path d="M -16 35 Q 0 52 16 35 L 20 65 Q 0 82 -20 65 Z" fill={PALETTE.kabirSkinShadow} opacity="0.6" />
        </g>

        {/* Tailored Obsidian Bandhgala Coat & Shoulders */}
        <g>
          {/* Broad Shoulders & Torso */}
          <path
            d="M -150 135 C -170 200 -160 380 -130 520 L 130 520 C 160 380 170 200 150 135 C 100 120 0 115 -150 135 Z"
            fill={PALETTE.kabirCoatMain}
            stroke="#020617"
            strokeWidth="4"
          />

          {/* High Mandarin Collar */}
          <path
            d="M -42 100 C -25 90 25 90 42 100 L 46 138 C 25 146 -25 146 -46 138 Z"
            fill={PALETTE.kabirCoatLapel}
            stroke={PALETTE.kabirCoatGoldZari}
            strokeWidth="2.5"
          />

          {/* Center Placket with Gold Zari Buttons */}
          <line x1="0" y1="138" x2="0" y2="520" stroke={PALETTE.kabirCoatGoldZari} strokeWidth="3" />
          {[165, 205, 245, 285, 325, 365, 405].map((btnY, bIdx) => (
            <circle key={bIdx} cx="0" cy={btnY} r="4" fill="#facc15" stroke="#78350f" strokeWidth="1.5" />
          ))}

          {/* Draped Kashmiri Shawl on Left Shoulder */}
          <path
            d="M -60 135 C -115 170 -140 270 -125 380 C -110 320 -90 230 -50 170 Z"
            fill={PALETTE.kabirCoatLapel}
            stroke={PALETTE.kabirCoatGoldZari}
            strokeWidth="2"
          />
        </g>

        {/* Hand Presenting Blooming Rose (Shot 3) */}
        {isHoldingRose && (
          <g transform="translate(110, 240)">
            <path d="M 0 0 L 80 40 L 70 75 L -10 35 Z" fill={PALETTE.kabirCoatMain} stroke="#020617" strokeWidth="3" />
            <rect x="68" y="38" width="16" height="36" rx="3" fill="#facc15" stroke="#78350f" strokeWidth="1.5" />
            <ellipse cx="95" cy="55" rx="14" ry="10" fill={PALETTE.kabirSkinBase} />

            <g transform="translate(110, 30)">
              <path d="M -5 20 Q 5 60 0 95" stroke={PALETTE.roseStem} strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M 2 45 Q 25 35 30 50 Q 15 55 2 45 Z" fill="#166534" />
              <circle cx="0" cy="0" r="26" fill={PALETTE.rosePetalDark} />
              <path
                d="M -16 -12 C -24 4 -12 20 0 22 C 12 20 24 4 16 -12 C 8 -24 -8 -24 -16 -12 Z"
                fill={PALETTE.rosePetalMid}
              />
              <path
                d="M -8 -8 C -14 0 -6 12 0 14 C 6 12 14 0 8 -8 C 4 -14 -4 -14 -8 -8 Z"
                fill={PALETTE.rosePetalBright}
              />
              <circle cx="0" cy="2" r="6" fill="#f43f5e" />
              <circle cx="0" cy="0" r="38" fill="url(#lanternRadial)" opacity="0.5" style={{ mixBlendMode: 'screen' }} />
            </g>
          </g>
        )}

        {/* Kabir Anime Head & Clean Jawline */}
        <g transform={`translate(0, 0) rotate(${isGazingAtStars ? -6 : 0})`}>
          {/* Smooth Tapered Anime Jaw */}
          <path
            d="M -56 -40 C -60 20 -42 68 0 94 C 42 68 60 20 56 -40 C 35 -58 -35 -58 -56 -40 Z"
            fill={PALETTE.kabirSkinFair}
            stroke="#020617"
            strokeWidth="3.2"
          />

          {/* Clean Under-Chin Cel Shadow */}
          <path
            d="M -30 75 Q 0 94 30 75 L 26 90 Q 0 102 -26 90 Z"
            fill={PALETTE.kabirSkinShadow}
            opacity="0.65"
          />

          {/* Right Ear with Gold Huggie Earring */}
          <g transform="translate(56, 5)">
            <path d="M 0 -16 C 12 -10 12 10 0 16 Z" fill={PALETTE.kabirSkinBase} stroke="#020617" strokeWidth="2.5" />
            <circle cx="4" cy="12" r="4.5" fill="none" stroke="#facc15" strokeWidth="2.5" />
          </g>

          {/* Clean Anime Nose */}
          <path d="M 0 10 L 6 25 L -2 27" stroke="#b45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Confident Romantic Smile */}
          <path d="M -12 55 Q 0 65 16 55" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Expressive Amber Anime Eyes */}
          {isBlinking ? (
            <g>
              <path d="M -40 14 Q -26 24 -12 14" stroke="#0f172a" strokeWidth="4.2" fill="none" strokeLinecap="round" />
              <path d="M 12 14 Q 26 24 40 14" stroke="#0f172a" strokeWidth="4.2" fill="none" strokeLinecap="round" />
            </g>
          ) : (
            <g>
              {/* Left Eye */}
              <g transform="translate(-26, 10)">
                <ellipse cx="0" cy="0" rx="13" ry="11" fill="#ffffff" />
                <ellipse cx="1" cy="0" rx="9" ry="9" fill="url(#kabirIrisGrad)" />
                <circle cx="1" cy="0" r="4" fill="#0f172a" />
                <circle cx="-1" cy="-3" r="3" fill="#ffffff" />
                <circle cx="4" cy="3" r="1.5" fill="#ffffff" />
                <path d="M -15 -6 Q 0 -14 15 -5" stroke="#0f172a" strokeWidth="4.2" fill="none" strokeLinecap="round" />
                <path d="M -10 -13 Q 0 -17 10 -12" stroke="#b45309" strokeWidth="1.6" fill="none" />
                <path d="M -16 -22 Q 0 -28 16 -21" stroke="#0f172a" strokeWidth="3.8" fill="none" strokeLinecap="round" />
              </g>

              {/* Right Eye */}
              <g transform="translate(26, 10)">
                <ellipse cx="0" cy="0" rx="13" ry="11" fill="#ffffff" />
                <ellipse cx="1" cy="0" rx="9" ry="9" fill="url(#kabirIrisGrad)" />
                <circle cx="1" cy="0" r="4" fill="#0f172a" />
                <circle cx="-1" cy="-3" r="3" fill="#ffffff" />
                <circle cx="4" cy="3" r="1.5" fill="#ffffff" />
                <path d="M -15 -5 Q 0 -14 15 -6" stroke="#0f172a" strokeWidth="4.2" fill="none" strokeLinecap="round" />
                <path d="M -10 -12 Q 0 -17 10 -13" stroke="#b45309" strokeWidth="1.6" fill="none" />
                <path d="M -16 -21 Q 0 -28 16 -22" stroke="#0f172a" strokeWidth="3.8" fill="none" strokeLinecap="round" />
              </g>
            </g>
          )}

          {/* Layered Hair Volume & Fringe */}
          <g>
            <path
              d="M -70 -40 C -80 -95 -40 -145 0 -145 C 45 -145 85 -95 75 -35 C 70 -15 60 15 50 25 C 45 -25 35 -55 20 -75 C 10 -35 -5 10 -18 30 C -25 -20 -38 -50 -52 -68 C -62 -25 -65 10 -70 -40 Z"
              fill={PALETTE.kabirHairDark}
              stroke="#020617"
              strokeWidth="3.2"
            />
            <path
              d="M -45 -75 C -32 -38 -18 0 -14 15 C -8 -18 4 -48 14 -68 C 24 -28 35 10 40 25 C 48 -10 52 -38 46 -75 Z"
              fill={PALETTE.kabirHairMid}
            />
            {/* Angel Ring Sheen Arc */}
            <path
              d="M -40 -110 Q 0 -130 40 -110"
              stroke={PALETTE.kabirHairSheen}
              strokeWidth="3.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

// --- TARA: ETHEREAL 2D ANIME GIRL ---
interface TaraProps {
  frame: number;
  x?: number;
  y?: number;
  scale?: number;
  facing?: 'left' | 'right' | 'front';
  isSmiling?: boolean;
  isLookingUp?: boolean;
}

const TaraAnimeFigure: React.FC<TaraProps> = ({
  frame,
  x = 720,
  y = 860,
  scale = 1.35,
  facing = 'left',
  isSmiling = true,
  isLookingUp = false,
}) => {
  const breath = Math.sin(frame * 0.07 + 0.8) * 3;
  const hairFloat = Math.sin(frame * 0.09) * 8;
  const dupattaBreeze = Math.sin(frame * 0.07 + 1.5) * 14;
  const jhumkaSwing = Math.sin(frame * 0.11) * 8;
  const isBlinking = (frame + 45) % 110 < 4;
  const flipX = facing === 'right' ? -1 : 1;

  return (
    <svg
      viewBox="0 0 1080 1920"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="taraIrisGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="35%" stopColor="#818cf8" />
          <stop offset="70%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>

        <linearGradient id="dupattaSheer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={PALETTE.taraDupattaChiffon} stopOpacity="0.85" />
          <stop offset="70%" stopColor={PALETTE.taraKurtiPink} stopOpacity="0.65" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <g transform={`translate(${x}, ${y + breath}) scale(${scale * flipX}, ${scale})`}>
        {/* Cascading Long Silky Hair Behind Body */}
        <g>
          <path
            d="M -60 -60 C -110 50 -130 220 -100 420 C -70 480 -30 500 -10 480 C -45 380 -65 240 -45 100 Z"
            fill={PALETTE.taraHairDark}
            transform={`rotate(${hairFloat * 0.4})`}
          />
          <path
            d="M 50 -60 C 100 60 130 240 110 440 C 80 500 40 510 20 480 C 55 380 75 240 40 90 Z"
            fill={PALETTE.taraHairDark}
            transform={`rotate(${-hairFloat * 0.4})`}
          />
        </g>

        {/* Slender Feminine Neck */}
        <g>
          <path d="M -18 30 L -22 110 L 22 110 L 18 30 Z" fill={PALETTE.taraSkinFair} />
          {/* Subtle Neck Shadow */}
          <path d="M -14 34 Q 0 48 14 34 L 16 60 Q 0 74 -16 60 Z" fill={PALETTE.taraSkinShadow} opacity="0.5" />
          {/* Elegant Gold Choker Necklace */}
          <path d="M -20 100 Q 0 112 20 100" stroke="#facc15" strokeWidth="3.5" fill="none" />
          <circle cx="0" cy="112" r="3.5" fill="#f43f5e" stroke="#facc15" strokeWidth="1.2" />
        </g>

        {/* Tailored Kurti Bodice */}
        <g>
          <path
            d="M -110 130 C -125 190 -115 340 -95 480 L 95 480 C 115 340 125 190 110 130 C 70 115 0 110 -110 130 Z"
            fill={PALETTE.taraKurtiPink}
            stroke="#831843"
            strokeWidth="3.5"
          />
          {/* Gold Gota Patti V-Neckline */}
          <path d="M -45 120 L 0 190 L 45 120 Z" fill="#9d174d" stroke="#facc15" strokeWidth="3" />
          {[145, 175, 205, 245, 285].map((gy, gIdx) => (
            <circle key={gIdx} cx="0" cy={gy} r="3.5" fill="#facc15" />
          ))}
        </g>

        {/* Floating Translucent Chiffon Dupatta */}
        <g transform={`translate(0, 140) rotate(${dupattaBreeze * 0.6})`}>
          <path
            d="M -90 10 C -160 50 -220 160 -180 300 C -150 400 -80 350 -100 240 C -120 160 -60 70 -40 20 Z"
            fill="url(#dupattaSheer)"
            stroke="#facc15"
            strokeWidth="2.5"
          />
          <path
            d="M -90 10 C -160 50 -220 160 -180 300"
            stroke="#facc15"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6 4"
          />
        </g>

        {/* Tara Anime Head & Radiant Face */}
        <g transform={`translate(0, 0) rotate(${isLookingUp ? -6 : 0})`}>
          {/* Delicate Porcelain Anime Chin & Jaw */}
          <path
            d="M -50 -35 C -54 18 -38 60 0 84 C 38 60 54 18 50 -35 C 32 -52 -32 -52 -50 -35 Z"
            fill={PALETTE.taraSkinFair}
            stroke="#020617"
            strokeWidth="2.8"
          />

          {/* Under-Chin Shadow */}
          <path
            d="M -26 68 Q 0 84 26 68 L 22 80 Q 0 92 -22 80 Z"
            fill={PALETTE.taraSkinShadow}
            opacity="0.6"
          />

          {/* Soft Cheek Blush */}
          <ellipse cx="-26" cy="28" rx="13" ry="6.5" fill={PALETTE.taraBlush} opacity="0.45" />
          <ellipse cx="26" cy="28" rx="13" ry="6.5" fill={PALETTE.taraBlush} opacity="0.45" />

          {/* Forehead Maang Tikka */}
          <line x1="0" y1="-70" x2="0" y2="-18" stroke="#facc15" strokeWidth="2" />
          <circle cx="0" cy="-16" r="4" fill="#facc15" stroke="#991b1b" strokeWidth="1.5" />

          {/* Dainty Nose */}
          <path d="M 0 10 L 4 23 L -1 25" stroke="#fb923c" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Sweet Anime Smile */}
          <path
            d={isSmiling ? "M -11 50 Q 0 62 11 50" : "M -9 52 Q 0 56 9 52"}
            stroke="#9f1239"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          {isSmiling && <ellipse cx="0" cy="54" rx="3.5" ry="1.8" fill="#fda4af" />}

          {/* Traditional Gold Jhumkas */}
          <g transform={`translate(-50, 16) rotate(${jhumkaSwing})`}>
            <circle cx="0" cy="0" r="3.5" fill="#facc15" />
            <path d="M -7 9 C -7 3 7 3 7 9 Z" fill="#facc15" stroke="#78350f" strokeWidth="1" />
            <circle cx="-4" cy="13" r="2" fill="#ffffff" />
            <circle cx="0" cy="14" r="2" fill="#ffffff" />
            <circle cx="4" cy="13" r="2" fill="#ffffff" />
          </g>
          <g transform={`translate(50, 16) rotate(${-jhumkaSwing})`}>
            <circle cx="0" cy="0" r="3.5" fill="#facc15" />
            <path d="M -7 9 C -7 3 7 3 7 9 Z" fill="#facc15" stroke="#78350f" strokeWidth="1" />
            <circle cx="-4" cy="13" r="2" fill="#ffffff" />
            <circle cx="0" cy="14" r="2" fill="#ffffff" />
            <circle cx="4" cy="13" r="2" fill="#ffffff" />
          </g>

          {/* Radiant Starry Violet Eyes */}
          {isBlinking ? (
            <g>
              <path d="M -36 12 Q -22 22 -8 12" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 8 12 Q 22 22 36 12" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
            </g>
          ) : (
            <g>
              {/* Left Eye */}
              <g transform="translate(-23, 8)">
                <ellipse cx="0" cy="0" rx="13" ry="11" fill="#ffffff" />
                <ellipse cx="1" cy="0" rx="9.5" ry="9.5" fill="url(#taraIrisGrad)" />
                <circle cx="1" cy="0" r="4.2" fill={PALETTE.taraEyesPupil} />
                <circle cx="-2" cy="-4" r="3.2" fill="#ffffff" />
                <circle cx="4" cy="3" r="1.6" fill="#ffffff" />
                <circle cx="-4" cy="4" r="1.1" fill="#ffffff" />
                <path d="M -15 -5 Q 0 -16 17 -5" stroke="#0f172a" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                <path d="M 13 -6 L 19 -9" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M -11 -13 Q 0 -18 11 -13" stroke="#fb923c" strokeWidth="1.5" fill="none" />
                <path d="M -15 -21 Q 0 -27 15 -19" stroke="#292524" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>

              {/* Right Eye */}
              <g transform="translate(23, 8)">
                <ellipse cx="0" cy="0" rx="13" ry="11" fill="#ffffff" />
                <ellipse cx="1" cy="0" rx="9.5" ry="9.5" fill="url(#taraIrisGrad)" />
                <circle cx="1" cy="0" r="4.2" fill={PALETTE.taraEyesPupil} />
                <circle cx="-2" cy="-4" r="3.2" fill="#ffffff" />
                <circle cx="4" cy="3" r="1.6" fill="#ffffff" />
                <circle cx="-4" cy="4" r="1.1" fill="#ffffff" />
                <path d="M -17 -5 Q 0 -16 15 -5" stroke="#0f172a" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                <path d="M 13 -5 L 19 -8" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M -11 -13 Q 0 -18 11 -13" stroke="#fb923c" strokeWidth="1.5" fill="none" />
                <path d="M -15 -19 Q 0 -27 15 -21" stroke="#292524" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>
            </g>
          )}

          {/* Hair Crown & Bangs */}
          <g>
            <path
              d="M -65 -35 C -70 -85 -40 -135 0 -135 C 40 -135 70 -85 65 -35 C 55 -15 45 15 40 32 C 38 -18 28 -45 16 -65 C 8 -25 -5 10 -14 32 C -20 -18 -32 -45 -42 -65 C -50 -20 -55 10 -65 -35 Z"
              fill={PALETTE.taraHairDark}
              stroke="#020617"
              strokeWidth="3"
            />
            <path d="M -48 -45 C -55 20 -50 85 -40 140 C -36 95 -40 28 -34 -28 Z" fill={PALETTE.taraHairMid} />
            <path d="M 48 -45 C 55 20 50 85 40 140 C 36 95 40 28 34 -28 Z" fill={PALETTE.taraHairMid} />
            {/* Purple Sheen Arc */}
            <path
              d="M -36 -100 Q 0 -120 36 -100"
              stroke={PALETTE.taraHairSheen}
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.75"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

// =========================================================================
// 5. CINEMATIC 7-SHOT SEQUENCE COMPOSITIONS
// =========================================================================

// --- SHOT 1 (Frames 0 - 187): Midnight Balcony Gaze ---
// "Beh ja tu mere saamne, tainu akhiyan ch bhar ke vekhan"
const Shot1_MidnightBalconyGaze: React.FC<{ frame: number }> = ({ frame }) => {
  const cameraZoom = interpolate(frame, [0, 187], [1.02, 1.1], { extrapolateRight: 'clamp' });
  const cameraY = interpolate(frame, [0, 187], [0, -35], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill>
      <CelestialSky frame={frame} cameraScale={cameraZoom} cameraY={cameraY} />
      <KabirAnimeFigure
        frame={frame}
        x={540}
        y={880}
        scale={1.45}
        facing="right"
        isGazingAtStars={true}
      />
      <TerraceBalustrade frame={frame} />
      <DriftingRosePetals frame={frame} intensity={0.9} />
    </AbsoluteFill>
  );
};

// --- SHOT 2 (Frames 187 - 337): Tara's Ethereal Entrance ---
// "Vekhan tainu raat bhar... charhdi saver tak"
const Shot2_TaraEtherealEntrance: React.FC<{ frame: number }> = ({ frame }) => {
  const shotFrame = frame - 187;
  const cameraZoom = interpolate(shotFrame, [0, 150], [1.05, 1.15], { extrapolateRight: 'clamp' });
  const panX = interpolate(shotFrame, [0, 150], [-25, 25], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ transform: `scale(${cameraZoom}) translateX(${panX}px)`, transformOrigin: '50% 45%' }}>
      <CelestialSky frame={frame} />
      <TaraAnimeFigure
        frame={frame}
        x={540}
        y={840}
        scale={1.55}
        facing="left"
        isSmiling={true}
        isLookingUp={false}
      />
      <TerraceBalustrade frame={frame} />
      <DriftingRosePetals frame={frame} intensity={1.3} />
    </AbsoluteFill>
  );
};

// --- SHOT 3 (Frames 337 - 476): Cinematic Blooming Rose Macro Close-Up ---
// "Baaghaan vichon mehkde, tode tere layi gulaab 🌹"
const Shot3_VelvetRoseOffering: React.FC<{ frame: number }> = ({ frame }) => {
  const shotFrame = frame - 337;
  const cameraZoom = interpolate(shotFrame, [0, 140], [1.0, 1.12], { extrapolateRight: 'clamp' });
  const roseFloat = Math.sin(shotFrame * 0.08) * 8;

  return (
    <AbsoluteFill style={{ transform: `scale(${cameraZoom})`, transformOrigin: '50% 50%' }}>
      <CelestialSky frame={frame} cameraScale={1.1} />

      {/* Soft Blurred Kabir in Background */}
      <g opacity="0.45" filter="url(#bokehSoft)">
        <KabirAnimeFigure
          frame={frame}
          x={360}
          y={840}
          scale={1.3}
          facing="right"
          isHoldingRose={false}
        />
      </g>

      <TerraceBalustrade frame={frame} />

      {/* Cinematic Macro Foreground Rose Presentation */}
      <svg viewBox="0 0 1080 1920" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g transform={`translate(540, ${1100 + roseFloat})`}>
          {/* Radiant Starlight Bloom around Rose */}
          <circle cx="0" cy="0" r="180" fill="url(#lanternRadial)" opacity="0.6" style={{ mixBlendMode: 'screen' }} />

          {/* Kabir's Stylized Sleeve & Hand */}
          <path d="M -160 180 L -40 100 L 20 160 L -100 240 Z" fill={PALETTE.kabirCoatMain} stroke="#020617" strokeWidth="5" />
          <rect x="-45" y="95" width="28" height="55" rx="5" fill="#facc15" stroke="#78350f" strokeWidth="2.5" />
          <ellipse cx="0" cy="125" rx="28" ry="20" fill={PALETTE.kabirSkinFair} stroke="#020617" strokeWidth="3" />
          <ellipse cx="18" cy="110" rx="16" ry="12" fill={PALETTE.kabirSkinFair} stroke="#020617" strokeWidth="2.5" />

          {/* Stem & Leaves */}
          <path d="M 0 50 Q 15 150 0 240" stroke={PALETTE.roseStem} strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M 5 110 Q 55 90 70 120 Q 35 135 5 110 Z" fill="#15803d" stroke="#052e16" strokeWidth="2" />
          <path d="M -5 160 Q -55 140 -70 170 Q -35 185 -5 160 Z" fill="#15803d" stroke="#052e16" strokeWidth="2" />

          {/* Huge Velvet Crimson Rose Head */}
          <circle cx="0" cy="0" r="75" fill={PALETTE.rosePetalDark} stroke="#4c0519" strokeWidth="4" />
          {/* Outer Layer Petals */}
          <path
            d="M -50 -40 C -75 10 -40 60 0 65 C 40 60 75 10 50 -40 C 25 -75 -25 -75 -50 -40 Z"
            fill={PALETTE.rosePetalMid}
            stroke="#4c0519"
            strokeWidth="3.5"
          />
          {/* Mid Layer Petals */}
          <path
            d="M -35 -25 C -55 10 -25 45 0 48 C 25 45 55 10 35 -25 C 18 -55 -18 -55 -35 -25 Z"
            fill={PALETTE.rosePetalBright}
            stroke="#881337"
            strokeWidth="3"
          />
          {/* Inner Swirl Petals */}
          <path
            d="M -20 -15 C -30 5 -15 28 0 30 C 15 28 30 5 20 -15 C 10 -35 -10 -35 -20 -15 Z"
            fill="#f43f5e"
            stroke="#9f1239"
            strokeWidth="2.5"
          />
          <circle cx="0" cy="5" r="12" fill="#fb7185" />
          {/* Glistening Dewdrop Highlight */}
          <circle cx="15" cy="-8" r="6" fill="#ffffff" filter="url(#starBloom)" />
          <circle cx="-12" cy="18" r="4" fill="#ffffff" opacity="0.8" />
        </g>
      </svg>

      <DriftingRosePetals frame={frame} intensity={1.8} />
    </AbsoluteFill>
  );
};

// --- SHOT 4 (Frames 476 - 626): Starlit Connection Two-Shot ---
// "Mahi tere deedaar layi, har pal ch tera hi khwaab"
const Shot4_StarlitConnectionTwoShot: React.FC<{ frame: number }> = ({ frame }) => {
  const shotFrame = frame - 476;
  const cameraZoom = interpolate(shotFrame, [0, 150], [1.02, 1.1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ transform: `scale(${cameraZoom})`, transformOrigin: '50% 50%' }}>
      <CelestialSky frame={frame} />
      <KabirAnimeFigure
        frame={frame}
        x={350}
        y={880}
        scale={1.38}
        facing="right"
      />
      <TaraAnimeFigure
        frame={frame}
        x={730}
        y={890}
        scale={1.35}
        facing="left"
        isSmiling={true}
      />
      <TerraceBalustrade frame={frame} />
      <DriftingRosePetals frame={frame} intensity={1.2} />
    </AbsoluteFill>
  );
};

// --- SHOT 5 (Frames 626 - 770): SAKUGA DROP 1 - "TU TAAN TAREYAN TON VI SOHNA AE!" ---
const Shot5_SakugaClimaxStars: React.FC<{ frame: number }> = ({ frame }) => {
  const shotFrame = frame - 626;
  const cameraZoom = interpolate(shotFrame, [0, 144], [1.08, 1.25], { extrapolateRight: 'clamp' });
  const dutchAngle = interpolate(shotFrame, [0, 70, 144], [-2.5, 2.0, -1.0]);

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${cameraZoom}) rotate(${dutchAngle}deg)`,
        transformOrigin: '50% 45%',
      }}
    >
      <CelestialSky frame={frame} cameraScale={1.2} showShootingStarAlways={true} />
      {/* Kabir Gazing at Tara, Raised Toward Stars */}
      <KabirAnimeFigure
        frame={frame}
        x={330}
        y={850}
        scale={1.48}
        facing="right"
        isGazingAtStars={true}
      />
      <TaraAnimeFigure
        frame={frame}
        x={750}
        y={865}
        scale={1.45}
        facing="left"
        isSmiling={true}
        isLookingUp={true}
      />
      <TerraceBalustrade frame={frame} />
      <DriftingRosePetals frame={frame} intensity={2.2} />
    </AbsoluteFill>
  );
};

// --- SHOT 6 (Frames 770 - 919): SAKUGA DROP 2 - "TERE WARGA KOI NA HONA AE!" ---
const Shot6_SakugaClimaxTara: React.FC<{ frame: number }> = ({ frame }) => {
  const shotFrame = frame - 770;
  const cameraZoom = interpolate(shotFrame, [0, 150], [1.15, 1.3], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${cameraZoom})`,
        transformOrigin: '50% 38%',
      }}
    >
      <CelestialSky frame={frame} cameraScale={1.15} />
      <TaraAnimeFigure
        frame={frame}
        x={540}
        y={780}
        scale={1.85}
        facing="left"
        isSmiling={true}
        isLookingUp={false}
      />
      <TerraceBalustrade frame={frame} />
      <DriftingRosePetals frame={frame} intensity={2.0} />
    </AbsoluteFill>
  );
};

// --- SHOT 7 (Frames 919 - 1075): Grand Romantic Outro ---
// "Jinna tussi mere naal pyar karde o... main taan tere naal kar leya ae!"
const Shot7_GrandRomanticOutro: React.FC<{ frame: number }> = ({ frame }) => {
  const shotFrame = frame - 919;
  const cameraZoom = interpolate(shotFrame, [0, 156], [1.0, 1.08], { extrapolateRight: 'clamp' });
  const fadeToBlack = interpolate(shotFrame, [135, 156], [0, 0.75], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ transform: `scale(${cameraZoom})`, transformOrigin: '50% 50%' }}>
      <CelestialSky frame={frame} showShootingStarAlways={true} />
      <KabirAnimeFigure
        frame={frame}
        x={390}
        y={910}
        scale={1.3}
        facing="right"
      />
      <TaraAnimeFigure
        frame={frame}
        x={690}
        y={925}
        scale={1.28}
        facing="left"
        isSmiling={true}
      />
      <TerraceBalustrade frame={frame} />
      <DriftingRosePetals frame={frame} intensity={1.4} />

      <AbsoluteFill style={{ backgroundColor: '#040714', opacity: fadeToBlack, pointerEvents: 'none' }} />
    </AbsoluteFill>
  );
};

// =========================================================================
// 6. FAST KINETIC GLASSMORPHISM TYPOGRAPHY (TOP CAPSULE)
// =========================================================================
const FastKineticTypography: React.FC<{ frame: number }> = ({ frame }) => {
  const activeSegment = LYRICS.find((seg) => frame >= seg.startFrame && frame < seg.endFrame);

  if (!activeSegment) return null;

  const activeWordObj = activeSegment.words.find(
    (w) => frame >= w.startFrame && frame < w.endFrame
  );
  const activeWord = activeWordObj ? activeWordObj.word.toUpperCase().replace(/[.,!✨🌙❤️🌹]/g, '') : '';

  return (
    <div
      style={{
        position: 'absolute',
        top: 90,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 50,
        pointerEvents: 'none',
        padding: '0 40px',
      }}
    >
      {/* Sleek Top Track Badge */}
      <div
        style={{
          background: 'rgba(9, 13, 36, 0.85)',
          border: '1.5px solid rgba(250, 204, 21, 0.65)',
          borderRadius: 24,
          padding: '6px 24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(250, 204, 21, 0.3)',
          backdropFilter: 'blur(12px)',
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: '0.15em',
            color: '#fef08a',
            textTransform: 'uppercase',
          }}
        >
          ✦ KABIR X TARA · TU TA TAREYAN TOH V SOHNA ✦
        </span>
      </div>

      {/* Glassmorphism Capsule with Dynamic Word Pill */}
      <div
        style={{
          width: '92%',
          maxWidth: 960,
          background: 'rgba(9, 13, 36, 0.75)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 28,
          padding: '18px 28px',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(16px)',
          textAlign: 'center',
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px 12px',
            marginBottom: 6,
          }}
        >
          {activeSegment.line1.split(' ').map((word, wIdx) => {
            const cleanWord = word.toUpperCase().replace(/[.,!✨🌙❤️🌹]/g, '');
            const isActive = cleanWord === activeWord;

            return (
              <span
                key={wIdx}
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 34,
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  color: isActive ? '#0f172a' : '#f8fafc',
                  backgroundColor: isActive ? '#f59e0b' : 'transparent',
                  padding: isActive ? '3px 14px' : '0px 2px',
                  borderRadius: isActive ? 12 : 0,
                  boxShadow: isActive ? '0 0 20px #f59e0b, 0 4px 12px rgba(0,0,0,0.5)' : 'none',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.08s ease-out',
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Line 2 */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px 12px',
          }}
        >
          {activeSegment.line2.split(' ').map((word, wIdx) => {
            const cleanWord = word.toUpperCase().replace(/[.,!✨🌙❤️🌹]/g, '');
            const isActive = cleanWord === activeWord;

            return (
              <span
                key={wIdx}
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 34,
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  color: isActive ? '#0f172a' : '#f8fafc',
                  backgroundColor: isActive ? '#f59e0b' : 'transparent',
                  padding: isActive ? '3px 14px' : '0px 2px',
                  borderRadius: isActive ? 12 : 0,
                  boxShadow: isActive ? '0 0 20px #f59e0b, 0 4px 12px rgba(0,0,0,0.5)' : 'none',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.08s ease-out',
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 7. MASTER COMPOSITION
// =========================================================================
export const TuTareyanAnimeReel: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#040714', overflow: 'hidden' }}>
      {/* Official Sliced Audio Hook (43.0s / 1075 frames @ 25fps) */}
      <Audio src={staticFile('tutareyan_hook_43s.mp3')} />

      {/* 7 Cinematic Narrative Shots */}
      {frame < 187 && <Shot1_MidnightBalconyGaze frame={frame} />}
      {frame >= 187 && frame < 337 && <Shot2_TaraEtherealEntrance frame={frame} />}
      {frame >= 337 && frame < 476 && <Shot3_VelvetRoseOffering frame={frame} />}
      {frame >= 476 && frame < 626 && <Shot4_StarlitConnectionTwoShot frame={frame} />}
      {frame >= 626 && frame < 770 && <Shot5_SakugaClimaxStars frame={frame} />}
      {frame >= 770 && frame < 919 && <Shot6_SakugaClimaxTara frame={frame} />}
      {frame >= 919 && <Shot7_GrandRomanticOutro frame={frame} />}

      {/* Fast Kinetic Typography Top Capsule */}
      <FastKineticTypography frame={frame} />
    </AbsoluteFill>
  );
};

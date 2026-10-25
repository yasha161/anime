// =========================================================================
// DAYTIME SAKUGA 2D ANIME REEL MASTER TEMPLATE
// 100% In-House Vector Anime Cels (html-anime)
// Zero AI Static Photos | Action Choreography | Word-by-Word Lyric Sync
// =========================================================================

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

export interface WordSync {
  word: string;
  startFrame: number;
  endFrame: number;
}

export interface LyricLine {
  lineIndex: number;
  hindiText: string;
  startFrame: number;
  endFrame: number;
  words: WordSync[];
}

export const DAY_PALETTE = {
  skyTop: '#1e88e5',
  skyMid: '#60a5fa',
  skyBottom: '#bae6fd',
  sunGold: '#fef08a',
  sunCore: '#ffffff',
  cloudWhite: '#ffffff',
  cloudShadow: '#c7d2fe',
  sakuraPink: '#f472b6',
  sakuraDeep: '#db2777',
  skinBase: '#fce7d2',
  skinMid: '#f5cba7',
  skinShadow: '#d99b79',
  hairBase: '#0f172a',
  hairHighlight: '#38bdf8',
  robeBase: '#0c1322',
  robeAccent: '#0284c7',
  katanaSteel: '#f8fafc',
  katanaGold: '#fbbf24',
  line: '#070b14',
};

export const DaylightAnimeDefs: React.FC = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <filter id="daySunBloom" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="60" result="blur3" />
        <feMerge>
          <feMergeNode in="blur3" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="bladeShine" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComponentTransfer in="blur" result="boost">
          <feFuncA type="linear" slope="2.5" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="boost" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="daySkinGrad" x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor={DAY_PALETTE.skinBase} />
        <stop offset="65%" stopColor={DAY_PALETTE.skinMid} />
        <stop offset="100%" stopColor={DAY_PALETTE.skinShadow} />
      </linearGradient>
      <radialGradient id="dayIrisGrad" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#38bdf8" />
        <stop offset="70%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </radialGradient>
      <linearGradient id="sunbeamGrad" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#fef08a" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="slashArcGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="35%" stopColor="#38bdf8" />
        <stop offset="70%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

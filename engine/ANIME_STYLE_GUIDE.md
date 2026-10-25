# ⚔️ 2D Vector Anime Sakuga Engine — Core Style Guide & Production Rules

> **Permanent Production Mandate for @kavy.axstyle**  
> *Saved on 2026-10-25 per Director Request*

---

## 🚫 1. STRICT BANS (Never Violate)
1. **NO AI Still Photos:** Never use static AI portrait photos with music playing behind them (e.g. the banned `reel_04_ishq` style is permanently prohibited).
2. **NO Static Characters:** Never leave a character standing motionless while audio plays.
3. **NO Japanese Kanji Subtitles Below Lyrics:** Subtitles must remain clean Romanized Hindi/Punjabi lyrics without extraneous Japanese translation lines beneath.
4. **NO Outsourced Stock Clips:** 100% of visual cels, background environments, effects, and typography are authored in code via `html-anime` and Remotion SVG vector composition.

---

## 🌟 2. CORE VISUAL PILLARS

### A. Authentic 2D Anime Anatomy (`html-anime-cel`)
- **Head & Jawline:** Sharp 3/4 tapered anime jaw with crisp chin vertex (`M 350 800 Q 350 1030 450 1130 L 540 1180...`).
- **Half-Face Cel Shadow:** Hard-edged directional shadow splitting the facial plane (`opacity: 0.85`).
- **Layered Fringe Bangs:** Multi-tiered hair geometry with primary base color and neon/sunlight gloss crescent highlight (`hairHighlight`).
- **Intricate Anime Eyes:** White sclera, multi-stop radial iris bloom (`#38bdf8` -> `#0284c7`), solid pupil, specular white catchlight squares/dots, sharp eyeliner stroke with outer lash taper.
- **Garments & Weaponry:** Samurai haori robes with collar lapels, chest strap, katana scabbard (`saya`), guard (`tsuba`), and diamond-wrapped handle (`tsukamaki`).

### B. Daytime Makoto Shinkai Summer Aesthetic
- **Sky Gradient:** Rich azure `#1e88e5` -> `#60a5fa` -> `#bae6fd` -> soft horizon `#f0fdf4`.
- **Towering Cumulus Clouds:** Large billowing organic cloud clusters with white sunlit crowns (`#ffffff`, `#fef9c3`) and soft lavender-blue shadows (`#c7d2fe`).
- **Radiant Sunlight & Sunbeams:** Overhead sun with multi-layered SVG bloom filter (`daySunBloom`) and angled god rays slicing through the atmosphere.
- **Drifting Sakura Petals:** Ambient cherry blossom petals dynamically floating and tumbling on the wind vector.

---

## 🎬 3. SONG-CORRELATED SAKUGA ACTION (3-Shot Grammar)

Action in every video MUST correlate directly to the music's emotional and rhythmic progression:

| Scene | Musical Context | Visual Action & Camera Choreography |
|---|---|---|
| **Shot 1: Anticipation / Build** | Intro melody or opening vocal line | Wind whips hair and haori robes; character eyes lock forward; hand reaches hilt; thumb pops katana tsuba guard open with a golden sparkle flash. |
| **Shot 2: Sakuga Climax / Drop** | Beat drop, heavy 808 bass, or intense vocal line | High-velocity dash across frame; speed lines burst across sky; sweeping golden-cyan plasma slash arc (`strokeWidth: 58px`); camera shake (`shakeX`, `shakeY`); impact flash. |
| **Shot 3: Resolution / Sheathe** | Hook lingering or melodic resolution | Low-angle heroic close-up facing camera; steel blade held diagonally across foreground; blinding 8-point sunburst flare reflecting off polished blade edge. |

---

## 🎤 4. SUBTITLE & TYPOGRAPHY SYSTEM
- **Word-for-Word Sync:** Subtitle frames must match sung vocals with millisecond precision.
- **Active Word Pop:** Active word scales dynamically via Remotion `spring(damping: 12, stiffness: 220)` with vibrant electric cyan glow (`textShadow: 0 0 24px rgba(56, 189, 248, 0.95)`).
- **Clean Layout:** Centered translucent dark glass pill (`background: rgba(7, 11, 20, 0.88)`), border in cyan, clean word spacing (`margin: 0 8px`).
- **Zero Japanese Translation:** Keeps all focus on clean lyrical immersion.

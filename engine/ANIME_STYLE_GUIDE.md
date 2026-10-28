# ⚔️ 2D Vector Anime Sakuga Engine — Core Style Guide & Production Rules

> **Permanent Production Mandate for @kavy.axstyle**  
> *Updated & Codified on 2026-10-27 per Director Request*

---

## 🚫 1. STRICT BANS (Never Violate)
1. **NO AI Still Photos:** Never use static AI portrait photos with music playing behind them (e.g. the banned `reel_04_ishq` style is permanently prohibited).
2. **NO Static Characters:** Never leave a character standing motionless while audio plays. Characters must have continuous secondary animation (wind-blown hair, billowing haori, breathing cycles, walking bob, hand movements).
3. **NO Japanese Kanji Subtitles Below Lyrics:** Subtitles must remain clean Romanized Hindi/Punjabi/Urdu lyrics without extraneous Japanese translation lines beneath.
4. **NO Outsourced Stock Clips:** 100% of visual cels, background environments, effects, and typography are authored in code via `html-anime` and Remotion SVG vector composition.
5. **NO Short Rush Cuts (< 20s):** Standard production reels must run **25 to 35 seconds** (625 to 875 frames @ 25fps) to build true cinematic curiosity and narrative depth.

---

## ⏱️ 2. RUNTIME & CADENCE SPECIFICATION
- **Target Duration:** **25–35 Seconds** (625 to 875 frames @ 25fps).
- **Shot Count:** 5 to 7 distinct narrative camera setups (average 3.5s to 5.5s per shot).
- **Rhythm & Editing:** Cuts locked to musical phrasing, percussion kicks, vocal entrances, and drop climaxes.

---

## 🌟 3. CORE VISUAL PILLARS

### A. Authentic 2D Anime Anatomy (`html-anime-cel`)
- **Head & Jawline:** Sharp 3/4 tapered anime jaw with crisp chin vertex (`M 350 800 Q 350 1030 450 1130 L 540 1180...`).
- **Neck Proportions:** Natural anime neck height (approx 80–110px, never elongated > 180px); smooth trapezius slope connecting collar to shoulders.
- **Half-Face Cel Shadow:** Hard-edged directional shadow splitting the facial plane (`opacity: 0.85`).
- **Layered Fringe Bangs:** Multi-tiered hair geometry with primary base color and neon/sunlight gloss crescent highlight (`hairHighlight`).
- **Intricate Anime Eyes:** White sclera, multi-stop radial iris bloom (`#38bdf8` -> `#0284c7`), solid pupil, specular white catchlight squares/dots, sharp eyeliner stroke with outer lash taper.
- **Garments & Weaponry:** Samurai haori robes with collar lapels, chest strap, katana scabbard (`saya`), guard (`tsuba`), and diamond-wrapped handle (`tsukamaki`).

### B. Daytime Makoto Shinkai Summer Aesthetic
- **Sky Gradient:** Rich azure `#1d4ed8` -> `#38bdf8` -> `#bae6fd` -> soft horizon `#f0fdf4`.
- **Towering Cumulus Clouds:** Large billowing organic cloud clusters with white sunlit crowns (`#ffffff`, `#fef9c3`) and soft lavender-blue shadows (`#c7d2fe`).
- **Radiant Sunlight & Sunbeams:** Overhead sun with multi-layered SVG bloom filter (`daySunBloom`) and angled god rays slicing through the atmosphere.
- **Drifting Sakura Petals:** Ambient cherry blossom petals dynamically floating and tumbling on the wind vector.

---

## 🎬 4. 6-TO-7 SHOT CINEMATIC NARRATIVE GRAMMAR (25–35s)

Every 25–35s reel follows an escalating visual arc designed to maximize viewer retention and curiosity:

| Scene | Musical Context | Duration / Frames | Visual Action & Camera Choreography |
|---|---|---|---|
| **Shot 1: Establishing Vista** | Song intro / instrumental build | ~4.5s (0–110f) | Wide cinematic daylight clifftop overlooking ocean/mountains; wanderer with kasa hat and billowing haori; hat brim lifts in breeze; eyes lock on horizon. |
| **Shot 2: Journey & Motion** | Opening verse vocals | ~4.5s (111–220f) | Full-body rear tracking shot walking along a mountain ridge trail; animated walking cycle bob, flapping coat tails, scabbard swaying with steps. |
| **Shot 3: Curiosity / Hook** | Verse continuation / mood shift | ~4.0s (221–320f) | Dynamic 3/4 medium camera tracking gaze; sudden gust of wind sweeps cherry blossoms across frame; wanderer notices something ahead; subtle head tilt. |
| **Shot 4: Tension / Iaido Stance** | Pre-chorus / build-up to drop | ~4.5s (321–435f) | Dramatic close-up on hip & katana hilt; gloved hand grips tsuka; thumb clicks golden tsuba guard open; steel blade slides out casting a star lens flare across narrowed eyes. |
| **Shot 5: Sakuga Beat Drop Climax** | Beat drop / chorus climax | ~5.5s (436–575f) | High-velocity combat dash; speedlines tear across frame; massive sweeping cyan & gold plasma crescent shockwave arcs (`strokeWidth: 58px`); screen shake impact. |
| **Shot 6: Kinetic Aftermath** | Chorus continuation / post-drop | ~4.5s (576–690f) | Blade spin or landing transition; sliced cherry blossom petals drift past in slow-mo; character turns towards camera as wind disperses energy shockwaves. |
| **Shot 7: Heroic Sunset/Sun Settle** | Outro / lingering melody | ~4.5s (691–800f) | Low-angle 3/4 heroic resolution pose facing camera; hand resting on sheathed katana hilt; blinding 8-point sunburst flare reflecting off horizon. |

---

## 🎤 5. SUBTITLE & TYPOGRAPHY SYSTEM
- **Word-for-Word Sync:** Subtitle frames must match sung vocals with millisecond precision.
- **Active Word Pop:** Active word scales dynamically via Remotion `spring(damping: 12, stiffness: 220)` with vibrant electric cyan glow (`textShadow: 0 0 24px rgba(56, 189, 248, 0.95)`).
- **Animated Accent:** Active word features an animated electric pink indicator bar below (`#f472b6`).
- **Clean Layout:** Centered translucent dark glass pill (`background: rgba(7, 11, 20, 0.85)`), border in cyan, clean word spacing (`margin: 0 8px`).
- **Zero Japanese Translation:** Keeps all focus on clean lyrical immersion in Romanized Hindi/Urdu.

---

## 🚀 6. CONTINUOUS UPGRADE DIRECTIVE (Future Production Roadmap)

> **Core Production Philosophy:** *"Aapne ko ise bhi upgrade karna hai next"*  
> Har nayi video pichhli video se visual detailing, curiosity hook, aur animation smoothness me ek step aage honi chahiye.

### Priority Upgrade Targets for Next Production Cycle:
1. **Advanced Facial Micro-Expressions & Blinking:**
   - Add natural blink cycles (every 2.5–3.5s) using parabolic eyelid bezier curves.
   - Subtle pupil dilation/contraction on beat drops and emotional vocal moments.
   - Micro-expressions: brow twitches, gentle smiles, and expressive gaze tracking.
2. **Multi-Harmonic Cloth & Physics Rigging:**
   - Multi-wave fabric physics for trench coats, scarves, and robes (combining fundamental frequency + 2nd harmonic breeze with dampening).
   - Realistic secondary inertial lag on belts, bag straps, tassels, and hair locks when characters stop or pivot.
3. **Multi-Plane 2.5D Atmospheric Parallax:**
   - 4-layer depth separation:
     - *Layer 1 (Foreground Blur):* Out-of-focus drifting leaves/rain droplets right in front of camera.
     - *Layer 2 (Focal Plane):* Sharply detailed vector character with cel shading and rim lighting.
     - *Layer 3 (Midground):* Train coaches, platform lamps, steam columns, architecture.
     - *Layer 4 (Background):* Sky gradients, distant skyline silhouettes, and celestial lights.
4. **Cinematic Camera Transitions (Whip Pan & Match Cuts):**
   - Whip pans between intense beats with dynamic speed blur streaks.
   - Object match cuts (e.g., ticking pocket watch transition into locomotive spinning wheel).
5. **Runtime Standard (25–35s Locked):**
   - Keep standard reels strictly between 25.0s and 35.0s (625–875 frames @ 25fps) across 6–7 cinematic shots. Zero rushed cuts.

# 🌸 Skill 01: 2D Anime Reel Engine (`html-anime`)

> Draw authentic Japanese anime sequences entirely in vector code (SVG, HTML5, GSAP, HyperFrames).

---

## 🎨 1. The 5 Core Principles of Code Anime

1. **Closed Color Palette:**
   - Pick 4–6 tones max per scene.
   - Example: Rain Midnight (`#090D16`, `#1E293B`, `#38BDF8`, `#F8FAFC`).
2. **Timing on Twos (12fps / 24fps):**
   - Anime doesn't move with smooth web CSS ease transitions. It moves with **holds**, **anticipation**, and **bursts**.
   - Hold a drawing for 2 to 4 frames before snapping to the next cel.
3. **Hard Shadow Cuts:**
   - Zero soft blurry drop-shadows on characters. Use razor-sharp vector `<path>` shadows (`#000000` with 25% opacity or a darker shade of the base skin tone).
4. **Bold Outer Contours:**
   - 4px–6px dark outer contour with 2px inner detail lines to simulate hand-inked acetate cels.
5. **One Sakuga (Action) Shot per Clip:**
   - In a 10–15s reel, 80% is aesthetic holds (wind blowing hair, glowing cigarette tip, blinking eye), and 20% is one explosive action or camera whip-pan.

---

## 💻 2. Minimal SVG Anime Cel Structure

```html
<svg viewBox="0 0 1080 1920" class="anime-cel">
  <!-- Layer 1: Dark Cinematic Vignette Background -->
  <rect width="1080" height="1920" fill="#0A0E1A" />
  
  <!-- Layer 2: Volumetric Rain & Atmosphere -->
  <g class="rain-streaks" stroke="rgba(255,255,255,0.18)" stroke-width="1.5">
    <line x1="200" y1="0" x2="160" y2="300" />
    <line x1="600" y1="200" x2="560" y2="520" />
  </g>

  <!-- Layer 3: Character Base Contour -->
  <g class="character-cel">
    <!-- Skin Base & Hard Shadow -->
    <path d="M420,500 Q540,650 660,500 L640,400 L440,400 Z" fill="#FDE2D2" />
    <path d="M500,500 Q540,620 580,500 Z" fill="#E8B59B" />
    
    <!-- Bold Eyes with Catchlight -->
    <ellipse cx="480" cy="460" rx="24" ry="32" fill="#0F172A" />
    <circle cx="474" cy="450" r="8" fill="#FFFFFF" />
    
    <!-- Wind-Swept Hair Paths -->
    <path d="M400,420 Q540,280 680,420 Q620,320 540,310 Q460,320 400,420" fill="#1E293B" stroke="#0F172A" stroke-width="5" />
  </g>
</svg>
```

---

## ⚡ 3. Master Prompt for Claude

```
Act as a Lead Japanese Anime Director & SVG Motion Architect.
Generate a 12-second 9:16 vertical 2D anime sequence for a trending Hindi/Punjabi lo-fi audio track.

Visual Requirements:
1. Scene: Night alley in Tokyo/Shimla under neon streetlights with gentle vertical rain.
2. Protagonist: Anime boy with oversized hoodie looking up, raindrops reflecting in his eyes.
3. Lighting: High-contrast neon teal (#00F2FE) rim light on the left, warm amber streetlight on the right.
4. Animation: Hold on twos, smooth blinking every 3 seconds, floating wind in hair, and kinetic lyrics centered on screen.
5. Code Format: Self-contained React Remotion TSX component or pure HTML5+GSAP.
```

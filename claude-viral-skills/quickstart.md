# 🚀 Quick Start Guide: Running Claude Code Skills

Follow these 3 simple steps to generate and render your first animated reel in pure code.

---

### Step 1: Install Antigravity or Remotion CLI

Make sure you have Node.js 18+ installed on your computer.

```bash
# Clone this repository
git clone https://github.com/yasha161/anime.git
cd anime/claude-viral-skills

# If using Remotion for video rendering
npm install remotion
```

---

### Step 2: Open Claude & Pass the Prompt

Open **Claude Code**, **Antigravity**, or **Claude Chat**, and paste your desired prompt from `prompts/master-prompts.md`.

Example command in terminal:
```bash
# Ask Claude to create an Anime Reel
claude "Read skills/html-anime.md and generate a 10s anime reel for a rainy night scene in Remotion"
```

---

### Step 3: Preview & Render in 1 Click

Claude will generate your TSX composition file in `src/compositions/`.

To preview live in your browser:
```bash
npx remotion preview
```

To render to an MP4 video file:
```bash
npx remotion render MyReel out/my_reel.mp4 --concurrency=4
```

---

## 🛠️ Need Help or Custom Workflows?
Reach out directly on Instagram: [@yashwebsites](https://instagram.com/yashwebsites)

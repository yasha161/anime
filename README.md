# 🌸 Anime 24/7 Autonomous Instagram Engine

Autonomous, Ban-Free Instagram Content Publishing System for [@kavy.axstyle](https://www.instagram.com/kavy.axstyle/).

Engineered for **Desi Anime Aesthetic x Deep Soul & Harsh Truths** niche with high retention visual storytelling, word-by-word kinetic lyrics, and editorial carousels.

---

## ⚡ Live Published Proof

* 🎥 **Reel #1:** [https://www.instagram.com/reel/De5xRNED9tI/](https://www.instagram.com/reel/De5xRNED9tI/) *(Barsaat - Banjaare)*
* 📸 **Carousel #1:** [https://www.instagram.com/p/De5yK6HDPp0/](https://www.instagram.com/p/De5yK6HDPp0/) *(4 Truths In Silence)*

---

## 🗓️ 24/7 Schedule Roadmap (Human-Paced)

The GitHub Actions workflow triggers daily at **14:30 UTC (8:00 PM IST)** — the peak engagement window for late-night youth scroll:

| Date & Time | Format | Slug | Content / Concept |
| :--- | :--- | :--- | :--- |
| **Day 1 (Sun)** | **Live** | `barsaat_master` | Neon rain anime visual + Banjaare sound sync |
| **Day 1 (Sun)** | **Live** | `4_truths_silence` | 4 Harsh realities you learn when healing alone |
| **Day 2 (Mon, 8 PM)** | **Reel** | `barsaat_neon_resolve` | Clean Anime Aesthetic *(No Japanese subtitles, high glow, dynamic zoom)* |
| **Day 3 (Tue, 8 PM)** | **Carousel** | `5_anime_quotes_grown_up` | 5 Anime quotes that hit harder when you grow up |
| **Day 4 (Wed, 8 PM)** | **Carousel** | `why_ghibli_skies_heal` | The psychology of Ghibli skies & peaceful solitude |

---

## 🏗️ System Architecture

```
            ┌────────────────────────────────────────┐
            │       GitHub Actions Schedule          │
            │          Daily at 8:00 PM IST          │
            └───────────────────┬────────────────────┘
                                │
            ┌───────────────────▼────────────────────┐
            │   engine/run_pipeline.py               │
            │   - Reads engine/history.json          │
            │   - Reads engine/calendar.json         │
            │   - Dispatches next scheduled post     │
            └───────────────────┬────────────────────┘
                                │
                 ┌──────────────┴──────────────┐
                 │                             │
    ┌────────────▼────────────┐   ┌────────────▼────────────┐
    │    CAROUSEL ENGINE      │   │       REEL ENGINE       │
    │  - Headless Chrome 1080 │   │  - 1080x1920 9:16 Video │
    │  - 6 Editorial Slides   │   │  - Sync audio track     │
    │  - High-res JPEG build  │   │  - Kinetic Typography   │
    └────────────┬────────────┘   └────────────┬────────────┘
                 │                             │
                 └──────────────┬──────────────┘
                                │
            ┌───────────────────▼────────────────────┐
            │     Upload-Post Official API           │
            │     - Safe cloud residential proxies   │
            │     - Auto first-comment engagement    │
            │     - Zero datacenter IP block risk    │
            └───────────────────┬────────────────────┘
                                │
            ┌───────────────────▼────────────────────┐
            │      Git Commit & Auto Push Log        │
            │      - Updates engine/history.json     │
            │      - Prevents duplicate publications │
            └────────────────────────────────────────┘
```

---

## 🔐 GitHub Secrets Configured

* `UPLOAD_POST_KEY`: Verified & Active (Upload-Post API Token)
* `UPLOAD_POST_PROFILE`: `default` (Mapped to `@kavy.axstyle`)
* `OPENROUTER_API_KEY`: Configured for autonomous script variations

---

## 🛠️ Local Testing

```bash
# Test build carousel slides
python engine/carousel_builder.py

# Test full pipeline (or run via GitHub Actions UI -> Run workflow)
python engine/run_pipeline.py
```

import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_05_tutareyan_sohna.mp4"
CAPTION = (
    "Tu taan taareyan ton vi sohna ae... tere warga koi na hona ae! ✨🌙🌹\n\n"
    "Experience the viral soulful romance 'Tu Ta Tareyan Toh V Sohna' (Alfaaz) reimagined in pure 2D vector anime style! "
    "Under a midnight starry galaxy and luminous crescent moon, Kabir steps onto the palace terrace holding a blooming velvet crimson rose for Tara. "
    "As shooting stars streak across the cosmic sky, their eyes lock in an unforgettable anime love story! 💫❤️\n\n"
    "Which shot touched your heart the most? Rate this 2D anime reel from 1 to 10 in the comments below! 👇✨\n\n"
    "#tutareyan #punjabisongs #2danime #desianime #animecouple #romanticanime #alfaaz #hamzamalik #zainzohaib #starlitnight #reelsindia #remotion"
)
FIRST_COMMENT = "Tu taan taareyan ton vi sohna ae! ✨ Drop a ❤️ if you felt this anime romance! Which song should we animate next? 👇"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Scheduling Tu Ta Tareyan Toh V Sohna 2D Anime Reel for Nov 5 at 18:30 IST...")
    scheduled_date = "2026-11-05T13:00:00Z"
    result = post_reel(VIDEO_PATH, CAPTION, FIRST_COMMENT, scheduled_date=scheduled_date, timezone="Asia/Kolkata")
    print(f"[PUBLISHER] Schedule result: {json.dumps(result, indent=2)}")
    
    # Update history.json
    history_file = "D:/motions/anime_repo/engine/history.json"
    history = []
    if os.path.exists(history_file):
        with open(history_file, "r", encoding="utf-8") as f:
            try:
                history = json.load(f)
            except Exception:
                history = []
                
    post_record = {
        "id": "post_tutareyan_05",
        "type": "reel",
        "title_slug": "tu_ta_tareyan_toh_v_sohna_anime_reel",
        "published_at": datetime.now(timezone.utc).isoformat(),
        "scheduled_for": "2026-11-05T18:30:00+05:30",
        "post_url": result.get("post_url", "https://www.instagram.com/reels/"),
        "post_id": result.get("post_id", "pending" if result.get("error") else "scheduled")
    }
    history.append(post_record)
    with open(history_file, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2)
    print(f"[PUBLISHER] Updated history.json with post record.")

if __name__ == "__main__":
    main()

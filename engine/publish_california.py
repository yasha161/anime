import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_california_love.mp4"
CAPTION = (
    "Assi boote California laaye ne... 🌴🕶️🚗\n\n"
    "Ho gaddi kaali vich baithi naar gori gori akh ni! "
    "Cheema Y x Gur Sidhu chartbuster 'California Love' reimagined as a hilarious 2D anime road trip! "
    "When Rhea pops bubblegum right into the windshield and Cheema's swagger shades can't survive the pothole 😂💀\n\n"
    "Which anime reaction was your favorite? Comment below! 👇🔥\n\n"
    "#californialove #cheemay #gursidhu #punjabisongs #animefunny #2danimation #desianime #reelsindia #animeaesthetic #remotion"
)
FIRST_COMMENT = "Cheema's sunglasses slipping vs Rhea's bubblegum pop 😂 What song should we anime-remix next? Drop it below! 👇✨"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Scheduling California Love 2D Anime Reel for Nov 3 at 18:30 IST...")
    scheduled_date = "2026-11-03T13:00:00Z"
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
                
    record = {
        "id": "post_california_love_01",
        "type": "reel",
        "title_slug": "cheema_y_california_love_anime_reel",
        "published_at": datetime.now(timezone.utc).isoformat(),
        "scheduled_for": "2026-11-03T18:30:00+05:30",
        "post_url": "https://www.instagram.com/reels/",
        "post_id": result.get("job_id", "pending")
    }
    history.append(record)
    
    with open(history_file, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2, ensure_ascii=False)
        
    print(f"[PUBLISHER] Logged to history.json: {record}")

if __name__ == "__main__":
    main()

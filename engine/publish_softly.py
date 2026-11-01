import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_aujla_softly.mp4"
CAPTION = (
    "Suit lavender chahi da, photo vich Ferrari laal di... \ud83c\udfce\ufe0f\ud83d\udc9c\n\n"
    "Ve chunni meri rang de lalaariyan, ve meri gaani de naal di!\n\n"
    "Karan Aujla x Ikky's chartbuster 'SOFTLY' reimagined as a sleek 2D anime highway night-cruise. "
    "Featuring Karan in the red drop-top Ferrari and Rhea with her flying lavender chunni.\n\n"
    "Rate this swag & aesthetic from 1 to 10 in the comments! \ud83d\udd25\ud83d\udc47\n\n"
    "#karanaujla #softly #ikky #punjabireels #desianime #2danimation #animeaesthetic #ferrari #nightcruise #remotion"
)
FIRST_COMMENT = "Karan Aujla x Rhea in Red Ferrari Drop-top! Drop your favorite line from SOFTLY below \ud83d\udc9c\ud83d\udd25"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Scheduling Karan Aujla Softly 2D Anime Reel for Nov 2 at 18:30 IST...")
    scheduled_date = "2026-11-02T13:00:00Z"
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
        "id": "post_aujla_softly_01",
        "type": "reel",
        "title_slug": "karan_aujla_softly_anime_reel",
        "published_at": datetime.now(timezone.utc).isoformat(),
        "scheduled_for": "2026-11-02T18:30:00+05:30",
        "post_url": "https://www.instagram.com/reels/",
        "post_id": result.get("job_id", "pending")
    }
    history.append(record)
    
    with open(history_file, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2, ensure_ascii=False)
        
    print(f"[PUBLISHER] Logged to history.json: {record}")

if __name__ == "__main__":
    main()

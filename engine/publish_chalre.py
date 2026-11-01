import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_04_chalre_waal.mp4"
CAPTION = (
    "Mondhe rakhdae kaali shawl, hath chenae ratta rumaal... 👑✨🌾\n\n"
    "The legendary folk anthem 'Chal Re Chal Re Waal' reimagined in authentic 2D anime style! "
    "From the golden sunset mustard fields of Punjab to the carved sandstone jharokha, "
    "watch Saanwal with his signature wavy hair flick and Noor's teasing romantic charm bring pure folk swagger to life! 🔥🌾\n\n"
    "Which shot was your favorite? Rate this 2D anime reel 1-10 in the comments below! 👇💬\n\n"
    "#chalrechalrewal #punjabifolk #2danime #desianime #animeart #reelsindia #punjabisongs #saanwal #folkbeat #remotion"
)
FIRST_COMMENT = "Ve teriyan reesan kaun kare! 👑 Next up: 'Tu Ta Tareyan Toh V Sohna'! Drop your favorite Punjabi song for the next 2D anime reel! 👇🔥"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Scheduling Chal Re Chal Re Waal 2D Anime Reel for Nov 4 at 18:30 IST...")
    scheduled_date = "2026-11-04T13:00:00Z"
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
        "id": "post_chalre_waal_04",
        "type": "reel",
        "title_slug": "chal_re_chal_re_waal_anime_reel",
        "published_at": datetime.now(timezone.utc).isoformat(),
        "scheduled_for": "2026-11-04T18:30:00+05:30",
        "post_url": "https://www.instagram.com/reels/",
        "post_id": result.get("job_id", "pending")
    }
    history.append(record)
    
    with open(history_file, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2, ensure_ascii=False)
        
    print(f"[PUBLISHER] Logged to history.json: {record}")

if __name__ == "__main__":
    main()

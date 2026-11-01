import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_tu_kisi_aur_ka.mp4"
CAPTION = (
    "Rishta na sahi, phir bhi tu apna lagta hai... \ud83c\udf27\ufe0f\ud83d\udc94\n\n"
    "Tu kisi aur ka hokar bhi mera lagta hai.\n\n"
    "A 45-second deep emotional 2D anime narrative crafted frame-by-frame on the pain of unspoken, selfless love. "
    "When someone leaves your life, but their presence never really leaves your heart.\n\n"
    "Save this reel for your quiet late-night thoughts. \ud83e\udd40\u2728\n\n"
    "#sadreel #tu_kisi_aur_ka #animeaesthetic #desianime #2danimation #heartbreak #emotionalreels #brokenheart #midnightvibes #remotion"
)
FIRST_COMMENT = "Kya aapke dil me bhi koi aisa hai jo ab aapka nahi, par phir bhi apna lagta hai? \ud83e\udd40\ud83d\udc47"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Scheduling Tu Kisi Aur Ka Sad 2D Anime Reel for Nov 1 at 18:30 IST...")
    scheduled_date = "2026-11-01T13:00:00Z"
    result = post_reel(VIDEO_PATH, CAPTION, FIRST_COMMENT, scheduled_date=scheduled_date, timezone="Asia/Kolkata")
    print(f"[PUBLISHER] Schedule result: {json.dumps(result, indent=2)}")
    
    post_url = result.get("post_url")
    post_id = result.get("post_id")
    
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
        "id": "post_tu_kisi_aur_ka_01",
        "type": "reel",
        "title_slug": "tu_kisi_aur_ka_sad_anime_reel",
        "published_at": datetime.now(timezone.utc).isoformat(),
        "post_url": post_url or "https://www.instagram.com/reels/",
        "post_id": post_id or "pending"
    }
    history.append(record)
    
    with open(history_file, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2, ensure_ascii=False)
        
    print(f"[PUBLISHER] Logged to history.json: {record}")
    print(f"[PUBLISHER] Live Post URL: {post_url}")

if __name__ == "__main__":
    main()

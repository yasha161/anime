import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_fakira_sakuga.mp4"
CAPTION = (
    "Tu puchh nahio haal fakira da... mileya je maahi mera mainu mileya. 🌸⚔️✨\n\n"
    "Pure 2D vector anime sakuga action with soulful sunset aesthetic.\n\n"
    "Save this reel for your late-night aesthetic playlist.\n\n"
    "#fakira #animeaesthetic #desianime #2danimation #sakuga"
)
FIRST_COMMENT = "Ye Fakira anime sakuga action kaisa laga? 1 se 10 me rate karo niche 🔥👇"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Publishing Fakira Anime Sakuga Reel to Instagram...")
    result = post_reel(VIDEO_PATH, CAPTION, FIRST_COMMENT)
    print(f"[PUBLISHER] Upload result: {json.dumps(result, indent=2)}")
    
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
        "id": "post_fakira_01",
        "type": "reel",
        "title_slug": "fakira_anime_sakuga_reel",
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

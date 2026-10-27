import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_banjaara_sakuga.mp4"
CAPTION = (
    "Kisi shaayar ki ghazal... jaise banjaare ko ghar mila. 🌸⚔️\n\n"
    "Pure 2D vector anime aesthetic with soulful cinematic action.\n\n"
    "Save this reel for your quiet late-night playlist.\n\n"
    "#banjaara #animeaesthetic #ekvillain #2danimation #desianime #peaceofmind #midnightvibes"
)
FIRST_COMMENT = "Ye anime x Bollywood vibe kaisi lagi? 1-10 batao niche ✨👇"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Publishing Banjaara Anime Sakuga Reel to Instagram...")
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
        "id": "post_banjaara_01",
        "type": "reel",
        "title_slug": "banjaara_sakuga_climax",
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

import os
import sys
import json
from datetime import datetime, timezone
from poster import post_reel

# Force UTF-8 stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

VIDEO_PATH = "D:/motions/anime_repo/engine/reels/reel_aujla_winning_speech.mp4"
CAPTION = (
    "2-2 ghode magna ni, 4 G-Wagona ni... Utte nu main 6-6 inch chakkiyan! \ud83c\udfce\ufe0f\ud83d\udd25\n\n"
    "Pure 2D vector boss anime reel crafted frame-by-frame on Karan Aujla's chartbuster 'Winning Speech'. "
    "Featuring the sunlit Mediterranean mafia villa estate, 4 lifted matte-black G-Wagons, "
    "6-inch portal axle suspension acceleration, press conference victory speech, bank vault money rain, "
    "and starlight Rolls-Royce outro.\n\n"
    "Rate this boss energy from 1 to 10 in the comments! \ud83c\udfc6\ud83d\udc47\n\n"
    "#karanaujla #winningspeech #gwagon #amg4x4 #punjabireels #desianime #2danimation #bossmentality #luxuryreels #remotion"
)
FIRST_COMMENT = "Karan Aujla x 4 Lifted G-Wagons in Daylight Mafia Villa. Drop your favorite line from Winning Speech below! \ud83d\udd25\ud83d\udc47"

def main():
    if not os.path.exists(VIDEO_PATH):
        print(f"Error: Video file not found at {VIDEO_PATH}")
        sys.exit(1)
        
    print(f"[PUBLISHER] Publishing Karan Aujla Winning Speech 2D Anime Reel to Instagram...")
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
        "id": "post_aujla_winning_speech",
        "type": "reel",
        "title_slug": "karan_aujla_winning_speech_boss_reel",
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

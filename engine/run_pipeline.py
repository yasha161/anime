import os
import sys
import json
import datetime
from carousel_builder import render_carousel_slides
from poster import post_reel, post_carousel

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CALENDAR_PATH = os.path.join(BASE_DIR, "calendar.json")
HISTORY_PATH = os.path.join(BASE_DIR, "history.json")

def load_json(path, default):
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return default

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def main():
    print("=" * 60)
    print("AUTONOMOUS ANIME ENGINE: EXECUTING SCHEDULED POST")
    print(f"Timestamp: {datetime.datetime.now(datetime.timezone.utc).isoformat()}")
    print("=" * 60)

    calendar = load_json(CALENDAR_PATH, [])
    history = load_json(HISTORY_PATH, [])
    posted_ids = {h.get("id") for h in history}

    next_post = None
    for p in calendar:
        if p["id"] not in posted_ids:
            next_post = p
            break

    if not next_post:
        print("[PIPELINE] All calendar posts have been published! No pending post.")
        return

    print(f"[PIPELINE] Next Post ID: {next_post['id']} | Type: {next_post['type']} | Slug: {next_post.get('title_slug')}")

    post_type = next_post["type"]
    post_result = {}

    if post_type == "carousel":
        slides_data = next_post["slides"]
        slug = next_post.get("title_slug", "carousel")
        out_dir = os.path.join(BASE_DIR, "assets", slug)
        
        print(f"[PIPELINE] Building {len(slides_data)} carousel slides...")
        jpg_files = render_carousel_slides(slides_data, out_dir)
        print(f"[PIPELINE] Rendered {len(jpg_files)} slides.")

        caption = next_post["caption"]
        first_comment = next_post.get("first_comment", "")
        print(f"[PIPELINE] Publishing Carousel via Upload-Post...")
        post_result = post_carousel(jpg_files, caption, first_comment)

    elif post_type == "reel":
        video_rel = next_post.get("video_file")
        video_path = os.path.join(BASE_DIR, video_rel)
        if not os.path.exists(video_path):
            raise FileNotFoundError(f"Reel video not found at: {video_path}")
        
        caption = next_post["caption"]
        first_comment = next_post.get("first_comment", "")
        print(f"[PIPELINE] Publishing Reel via Upload-Post...")
        post_result = post_reel(video_path, caption, first_comment)

    # Log to history
    log_entry = {
        "id": next_post["id"],
        "type": next_post["type"],
        "title_slug": next_post.get("title_slug"),
        "published_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "post_url": post_result.get("post_url"),
        "post_id": post_result.get("post_id")
    }
    history.append(log_entry)
    save_json(HISTORY_PATH, history)

    print("\n" + "=" * 60)
    print(f"SUCCESS: Post {next_post['id']} published successfully!")
    print(f"Post URL: {post_result.get('post_url')}")
    print("=" * 60)

if __name__ == "__main__":
    main()

import os
import sys
import time
import json
import subprocess
import urllib.request

API_BASE = "https://api.upload-post.com/api"

def get_credentials():
    key = os.environ.get("UPLOAD_POST_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyaWxsaW9uZ21lY3JvcmVzQGdtYWlsLmNvbSIsImV4cCI6NDk0NjQ5OTI1NiwianRpIjoiNDA0MzU5N2YtMTY1NC00MTc1LThjODktNTExZjNmNzRmYzE2In0.TUe95DkjCQd_5KDvAAcTbHVL-Qmm7Aq3o_KJaUcRER0")
    profile = os.environ.get("UPLOAD_POST_PROFILE", "default")
    return key, profile

def post_reel(video_path, caption, first_comment=""):
    key, profile = get_credentials()
    print(f"[POSTER] Uploading Reel: {video_path}")
    
    cmd = [
        "curl", "-s", "-X", "POST", f"{API_BASE}/upload",
        "-H", f"Authorization: Apikey {key}",
        "-F", f"user={profile}",
        "-F", "platform[]=instagram",
        "-F", "media_type=REELS",
        "-F", f"video=@{video_path}",
        "-F", f"title={caption}",
        "-F", f"first_comment={first_comment}",
        "-F", "async_upload=true"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    print(f"[POSTER] Response: {res.stdout}")
    data = json.loads(res.stdout)
    request_id = data.get("request_id")
    if not request_id:
        raise Exception(f"Upload failed: {res.stdout}")
    return poll_job(request_id, key)

def post_carousel(photo_paths, caption, first_comment=""):
    key, profile = get_credentials()
    print(f"[POSTER] Uploading {len(photo_paths)} Carousel Photos")

    cmd = [
        "curl", "-s", "-X", "POST", f"{API_BASE}/upload_photos",
        "-H", f"Authorization: Apikey {key}",
        "-F", f"user={profile}",
        "-F", "platform[]=instagram",
        "-F", f"title={caption}",
        "-F", f"first_comment={first_comment}",
        "-F", "async_upload=true"
    ]
    for p in photo_paths:
        cmd.extend(["-F", f"photos[]=@{p}"])

    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    print(f"[POSTER] Response: {res.stdout}")
    data = json.loads(res.stdout)
    request_id = data.get("request_id")
    if not request_id:
        raise Exception(f"Upload failed: {res.stdout}")
    return poll_job(request_id, key)

def poll_job(request_id, key, max_attempts=25):
    url = f"{API_BASE}/uploadposts/status?request_id={request_id}"
    for i in range(max_attempts):
        time.sleep(6)
        req = urllib.request.Request(url, headers={"Authorization": f"Apikey {key}"})
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode())
                status = data.get("status")
                print(f"[POSTER] Attempt {i+1}: {status}")
                if status == "completed":
                    return get_latest_post_url(key)
                if status == "failed":
                    raise Exception(f"Job failed: {data}")
        except Exception as e:
            print(f"[POSTER] Poll notice: {e}")
            
    return get_latest_post_url(key)

def get_latest_post_url(key):
    url = f"{API_BASE}/uploadposts/history"
    req = urllib.request.Request(url, headers={"Authorization": f"Apikey {key}"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode())
        history = data.get("history", [])
        if history:
            latest = history[0]
            return {
                "post_url": latest.get("post_url"),
                "post_id": latest.get("platform_post_id"),
                "media_type": latest.get("media_type")
            }
    return {}

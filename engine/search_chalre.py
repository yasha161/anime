import subprocess
import json

cmd = [
    "yt-dlp",
    "ytsearch5:Chalre chalre waal tu saanwal phull kastoori",
    "--dump-json",
    "--no-playlist"
]
res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")

for line in res.stdout.strip().split("\n"):
    if line:
        try:
            d = json.loads(line)
            print(f"{d.get('id')} | {d.get('duration')}s | {d.get('title')}")
        except Exception:
            pass

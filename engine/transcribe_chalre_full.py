import sys
sys.stdout.reconfigure(encoding='utf-8')
from faster_whisper import WhisperModel
import json

audio_path = "D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_full.mp3"
model = WhisperModel("base", device="cpu", compute_type="int8")
segments, info = model.transcribe(audio_path, beam_size=5)

print(f"Detected language: {info.language}, Duration: {info.duration:.2f}s")
data = []
for s in segments:
    seg_info = {
        "start": s.start,
        "end": s.end,
        "text": s.text
    }
    data.append(seg_info)
    print(f"[{s.start:.1f}s -> {s.end:.1f}s]: {s.text}")

with open("D:/motions/anime_repo/engine/chalre_full_segments.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

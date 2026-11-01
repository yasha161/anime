import sys
sys.stdout.reconfigure(encoding='utf-8')
from faster_whisper import WhisperModel
import json

audio_path = "D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_hook_34s.mp3"
model = WhisperModel("base", device="cpu", compute_type="int8")
segments, info = model.transcribe(audio_path, beam_size=5, word_timestamps=True)

print(f"Duration: {info.duration:.2f}s")
data = []
for s in segments:
    seg_info = {
        "start": s.start,
        "end": s.end,
        "text": s.text,
        "words": [{"word": w.word, "start": w.start, "end": w.end} for w in s.words]
    }
    data.append(seg_info)
    print(f"[{s.start:.2f}s -> {s.end:.2f}s]: {s.text}")
    for w in s.words:
        print(f"   '{w.word}' ({w.start:.2f}s - {w.end:.2f}s)")

with open("D:/motions/anime_repo/engine/chalre_34s_whisper.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

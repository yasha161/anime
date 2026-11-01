import sys
sys.stdout.reconfigure(encoding='utf-8')
from faster_whisper import WhisperModel
import json

audio_path = "D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_exciting_hook_36s.mp3"
model = WhisperModel("base", device="cpu", compute_type="int8")
prompt = "Jha jha te har jha te paye dende lok misaal chalray chalray waal mondhe rakhdae kaali shawl hath chenae ratta rumaal teriyan reesan kaun kare ve teriyan reesan kaun kare"
segments, info = model.transcribe(audio_path, beam_size=5, initial_prompt=prompt, word_timestamps=True)

print(f"Duration: {info.duration:.2f}s, Language: {info.language}")
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

with open("D:/motions/anime_repo/engine/chalre_hook_36s_whisper.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

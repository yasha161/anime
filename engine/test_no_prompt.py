import sys
sys.stdout.reconfigure(encoding='utf-8')
from faster_whisper import WhisperModel

audio_path = "D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_exciting_hook_36s.mp3"
model = WhisperModel("base", device="cpu", compute_type="int8")
segments, info = model.transcribe(audio_path, beam_size=5)

for s in segments:
    print(f"[{s.start:.2f}s -> {s.end:.2f}s]: {s.text}")

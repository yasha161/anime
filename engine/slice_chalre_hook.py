import sys
sys.stdout.reconfigure(encoding='utf-8')
import subprocess

cmd = [
    'E:/Python/Scripts/ffmpeg.EXE', '-y',
    '-ss', '57.0',
    '-t', '36.0',
    '-i', 'D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_full.mp3',
    'D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_exciting_hook_36s.mp3'
]
subprocess.run(cmd, check=True)
print("Sliced 57.0s to 93.0s (36s duration) successfully!")

import sys
sys.stdout.reconfigure(encoding='utf-8')
import subprocess

# Let's slice a 45-second test from 45s to 95s of chalre_full.mp3
cmd = [
    'E:/Python/Scripts/ffmpeg.EXE', '-y',
    '-ss', '45',
    '-t', '55',
    '-i', 'D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_full.mp3',
    'D:/motions/anime_repo/engine/chalre_test_45_100.mp3'
]
subprocess.run(cmd, check=True)
print("Sliced 45s to 100s successfully!")

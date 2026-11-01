import subprocess

cmd = [
    'E:/Python/Scripts/ffmpeg.EXE', '-y',
    '-ss', '61.0',
    '-t', '34.0',
    '-i', 'D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_full.mp3',
    'D:/motions/secret-hider/new/yashwebsites-remotion/public/chalre_hook_34s.mp3'
]
subprocess.run(cmd, check=True)
print("Sliced 61.0s to 95.0s (34.0s) successfully!")

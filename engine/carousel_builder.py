import os
import sys
import subprocess
import shutil
from PIL import Image

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Space+Grotesk:wght@600;700&display=swap');
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}

  body {{
    width: 1080px;
    height: 1350px;
    background-color: #07090e;
    color: #f1f5f9;
    font-family: 'Plus Jakarta Sans', sans-serif;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 110px 90px;
  }}

  .glow-1 {{
    position: absolute;
    top: -150px;
    right: -150px;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 70%);
    pointer-events: none;
  }}
  .glow-2 {{
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0) 70%);
    pointer-events: none;
  }}

  .grid-pattern {{
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }}

  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  }}
  .tag {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
    border: 1px solid rgba(56, 189, 248, 0.25);
    padding: 10px 22px;
    border-radius: 999px;
    text-transform: uppercase;
  }}
  .slide-num {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #64748b;
  }}

  .content {{
    z-index: 2;
    margin: auto 0;
  }}

  h1 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 66px;
    line-height: 1.15;
    font-weight: 800;
    letter-spacing: -1.5px;
    color: #ffffff;
    margin-bottom: 35px;
  }}
  .accent {{
    color: #38bdf8;
    background: linear-gradient(135deg, #38bdf8 0%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }}

  .body-text {{
    font-size: 32px;
    line-height: 1.5;
    color: #94a3b8;
    font-weight: 500;
    max-width: 900px;
  }}

  .checklist {{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
  }}
  .checklist .item {{
    font-size: 28px;
    line-height: 1.4;
    color: #e2e8f0;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: 16px 24px;
    border-radius: 16px;
  }}
  .checklist .item span {{
    color: #38bdf8;
    font-size: 24px;
  }}
  .cta-note {{
    font-size: 26px;
    color: #cbd5e1;
    font-style: italic;
    margin-top: 20px;
  }}

  .footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 30px;
  }}
  .handle {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #94a3b8;
    display: flex;
    align-items: center;
    gap: 10px;
  }}
  .handle-dot {{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 12px #38bdf8;
  }}
  .swipe-hint {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    color: #64748b;
    text-transform: uppercase;
  }}
</style>
</head>
<body>
  <div class="glow-1"></div>
  <div class="glow-2"></div>
  <div class="grid-pattern"></div>

  <div class="header">
    <div class="tag">{tag}</div>
    <div class="slide-num">{num}</div>
  </div>

  <div class="content">
    <h1>{title}</h1>
    <div class="body-text">{body}</div>
  </div>

  <div class="footer">
    <div class="handle">
      <div class="handle-dot"></div>
      @kavy.axstyle
    </div>
    <div class="swipe-hint">{swipe}</div>
  </div>
</body>
</html>
"""

def find_chrome():
    candidates = [
        "google-chrome",
        "chromium-browser",
        "chromium",
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    ]
    for c in candidates:
        if os.path.isabs(c) and os.path.exists(c):
            return c
        path = shutil.which(c)
        if path:
            return path
    return "google-chrome"

def render_carousel_slides(slides_data, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    chrome_bin = find_chrome()
    jpg_files = []

    for idx, s in enumerate(slides_data):
        html_content = TEMPLATE.format(
            tag=s.get("tag", "ANIME SOUL"),
            num=s.get("num", f"0{idx+1} / 0{len(slides_data)}"),
            title=s["title"],
            body=s["body"],
            swipe=s.get("swipe", "Swipe →")
        )
        html_file = os.path.join(out_dir, f"slide_{idx+1}.html")
        png_file = os.path.join(out_dir, f"slide_{idx+1}.png")
        jpg_file = os.path.join(out_dir, f"slide_{idx+1}.jpg")

        with open(html_file, "w", encoding="utf-8") as f:
            f.write(html_content)

        cmd = [
            chrome_bin, "--headless=new", "--disable-gpu",
            "--window-size=1080,1350",
            f"--screenshot={png_file}",
            f"file:///{os.path.abspath(html_file)}"
        ]
        subprocess.run(cmd, check=True)

        im = Image.open(png_file).convert("RGB")
        im.save(jpg_file, "JPEG", quality=95)
        jpg_files.append(jpg_file)

    return jpg_files

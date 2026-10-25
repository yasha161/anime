import os
import sys
import json
import urllib.request
import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CALENDAR_PATH = os.path.join(BASE_DIR, "calendar.json")
HISTORY_PATH = os.path.join(BASE_DIR, "history.json")

def load_json(path, default):
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return default

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def get_openrouter_key():
    return os.environ.get("OPENROUTER_API_KEY", "")

def generate_aesthetic_carousel(topic_theme):
    api_key = get_openrouter_key()
    if not api_key:
        print("[AUTO-GENERATOR] No OPENROUTER_API_KEY found, skipping AI generation.")
        return None

    prompt = f"""You are a master creative director for a top-tier aesthetic Instagram anime page (@kavy.axstyle).
Theme: {topic_theme}

STRICT BRAND RULES:
1. NEVER use cheap, poor, or cringe words ('sasta', 'poor', 'gareeb' are strictly forbidden).
2. TONE: Deep soul vibe, poetic peace of mind, high aesthetic, Ghibli/Shinkai philosophy.
3. Language: Clean, beautiful Hinglish with deep emotional resonance.
4. Return ONLY a valid JSON object matching this exact schema:

{{
  "tag": "PHILOSOPHY · XX",
  "title_slug": "short_snake_case_slug",
  "caption": "Aesthetic Hinglish caption with 3-4 hashtags",
  "first_comment": "Engaging question for followers",
  "slides": [
    {{
      "num": "01 / 06",
      "tag": "SERIES TAG",
      "title": "TITLE IN ALL CAPS<br><span class='accent'>ACCENT LINE</span>",
      "body": "Hook explanation in 1-2 poetic sentences.",
      "swipe": "Swipe →"
    }},
    {{
      "num": "02 / 06",
      "tag": "POINT 1",
      "title": "Short Heading<br><span class='accent'>Key Insight</span>",
      "body": "Poetic lesson in Hinglish.",
      "swipe": "Swipe →"
    }},
    {{
      "num": "03 / 06",
      "tag": "POINT 2",
      "title": "Short Heading<br><span class='accent'>Key Insight</span>",
      "body": "Poetic lesson in Hinglish.",
      "swipe": "Swipe →"
    }},
    {{
      "num": "04 / 06",
      "tag": "POINT 3",
      "title": "Short Heading<br><span class='accent'>Key Insight</span>",
      "body": "Poetic lesson in Hinglish.",
      "swipe": "Swipe →"
    }},
    {{
      "num": "05 / 06",
      "tag": "POINT 4",
      "title": "Short Heading<br><span class='accent'>Key Insight</span>",
      "body": "Poetic lesson in Hinglish.",
      "swipe": "Swipe →"
    }},
    {{
      "num": "06 / 06",
      "tag": "THE REMINDER",
      "title": "Save these<br><span class='accent'>4 reminders:</span>",
      "body": "<div class='checklist'><div class='item'><span>✦</span> Point 1.</div><div class='item'><span>✦</span> Point 2.</div><div class='item'><span>✦</span> Point 3.</div><div class='item'><span>✦</span> Point 4.</div></div><p class='cta-note'>Save this post for your quiet midnight peace.</p>",
      "swipe": "Save Post ⬇"
    }}
  ]
}}
"""

    payload = {
        "model": "google/gemini-2.0-flash-001",
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "response_format": {"type": "json_object"}
    }

    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        data=json.dumps(payload).encode("utf-8")
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            raw = json.loads(resp.read().decode("utf-8"))
            content = raw["choices"][0]["message"]["content"]
            data = json.loads(content)
            return data
    except Exception as e:
        print(f"[AUTO-GENERATOR] Error querying OpenRouter: {e}")
        return None

def check_and_replenish_queue():
    calendar = load_json(CALENDAR_PATH, [])
    history = load_json(HISTORY_PATH, [])
    posted_ids = {h.get("id") for h in history}

    remaining = [p for p in calendar if p.get("id") not in posted_ids]
    print(f"[AUTO-GENERATOR] Status: {len(remaining)} pending posts in calendar queue.")

    if len(remaining) < 3:
        print("[AUTO-GENERATOR] Queue is getting low! Auto-generating new aesthetic carousel...")
        themes = [
            "Why rain in anime heals modern mental burnout",
            "The art of silence: what loneliness in anime teaches us",
            "Why looking at the night sky brings unexpected peace"
        ]
        chosen_theme = themes[len(calendar) % len(themes)]
        post_data = generate_aesthetic_carousel(chosen_theme)

        if post_data:
            next_id_num = len(calendar) + 1
            post_data["id"] = f"post_{next_id_num:02d}"
            post_data["type"] = "carousel"
            calendar.append(post_data)
            save_json(CALENDAR_PATH, calendar)
            print(f"[AUTO-GENERATOR] Successfully created & appended: {post_data['id']} ({post_data.get('title_slug')})")
        else:
            print("[AUTO-GENERATOR] AI generation skipped or failed; buffer remains safe.")
    else:
        print("[AUTO-GENERATOR] Buffer is healthy. No new generation needed.")

if __name__ == "__main__":
    check_and_replenish_queue()

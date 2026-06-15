#!/usr/bin/env bash
# Lädt die Pollinations-Platzhalterbilder einmalig herunter und legt sie
# unter public/images ab, damit die Seite nicht mehr von image.pollinations.ai
# abhängt (das kostenlose Legacy-API liefert inzwischen 402 bei mehreren
# parallelen Requests).
set -euo pipefail

OUT_ROOT="$(dirname "$0")/../public/images"

download() {
  local out="$1" prompt="$2" width="$3" height="$4" seed="$5"
  local encoded
  encoded=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$prompt")
  local url="https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&seed=${seed}&nologo=true&model=flux"
  local dest="$OUT_ROOT/$out"
  mkdir -p "$(dirname "$dest")"

  if [[ -f "$dest" ]]; then
    echo "skip (exists): $out"
    return
  fi

  for attempt in 1 2 3 4 5 6 7 8; do
    code=$(curl -s -o "$dest" -w "%{http_code}" "$url")
    if [[ "$code" == "200" ]]; then
      echo "ok: $out"
      sleep 2
      return
    fi
    echo "retry ($attempt) [$code]: $out"
    rm -f "$dest"
    sleep 5
  done
  echo "FAILED: $out"
}

# Hero (Landing-Page)
download "hero.jpg" "abstract cinematic dark texture, soft light streaks, premium minimal, fine grain, black and warm white" 1600 1200 99

# TrailMark
download "apps/trailmark/hero.jpg" "minimalist hiking app interface on iphone, topographic map, dark mode, elegant, cinematic product shot" 1200 1500 11
download "apps/trailmark/shot-1.jpg" "mobile app map screen with hiking route, dark ui, green accent" 600 1300 12
download "apps/trailmark/shot-2.jpg" "mobile app elevation profile chart, dark ui, green accent" 600 1300 13
download "apps/trailmark/shot-3.jpg" "mobile app tour statistics summary, dark ui, green accent" 600 1300 14

# LedgerLane
download "apps/ledgerlane/hero.jpg" "minimalist finance app on iphone, clean charts, blue accent, dark mode, cinematic product shot" 1200 1500 21
download "apps/ledgerlane/shot-1.jpg" "mobile finance dashboard ui, spending chart, blue accent, dark" 600 1300 22
download "apps/ledgerlane/shot-2.jpg" "mobile budget screen ui, progress bars, blue accent, dark" 600 1300 23
download "apps/ledgerlane/shot-3.jpg" "mobile transactions list ui, categories, blue accent, dark" 600 1300 24

# FocusLoop
download "apps/focusloop/hero.jpg" "minimalist focus timer app on iphone, circular progress, purple accent, dark mode, cinematic" 1200 1500 31
download "apps/focusloop/shot-1.jpg" "mobile pomodoro timer ui, circular ring, purple accent, dark" 600 1300 32
download "apps/focusloop/shot-2.jpg" "mobile focus statistics ui, charts, purple accent, dark" 600 1300 33
download "apps/focusloop/shot-3.jpg" "mobile ambient sounds selection ui, purple accent, dark" 600 1300 34

# PlateHub
download "apps/platehub/hero.jpg" "minimalist meal planner app on iphone, weekly grid, warm orange accent, dark mode, cinematic" 1200 1500 41
download "apps/platehub/shot-1.jpg" "mobile meal planner weekly grid ui, orange accent, dark" 600 1300 42
download "apps/platehub/shot-2.jpg" "mobile shopping list ui, grouped items, orange accent, dark" 600 1300 43
download "apps/platehub/shot-3.jpg" "mobile pantry inventory ui, orange accent, dark" 600 1300 44

echo "done"

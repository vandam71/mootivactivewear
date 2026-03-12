#!/usr/bin/env bash
# Serve the `docs/` folder locally for testing static site (works on Linux/macOS)
# Usage: ./serve_docs.sh [PORT]

PORT=${1:-8000}
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)/docs"

if command -v python3 >/dev/null 2>&1; then
  echo "Serving $ROOT_DIR at http://localhost:$PORT using Python 3"
  exec python3 -m http.server --directory "$ROOT_DIR" "$PORT"
elif command -v python >/dev/null 2>&1; then
  echo "Serving $ROOT_DIR at http://localhost:$PORT using Python"
  exec python -m http.server --directory "$ROOT_DIR" "$PORT"
else
  echo "Python not found. As a fallback, you can run: npx http-server docs -p $PORT"
  exit 1
fi

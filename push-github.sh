#!/bin/bash

# =========
# 📝 CONFIG
# =========

# Commit message, 可加入 timestamp
COMMIT_MSG="Update from Replit on $(date '+%Y-%m-%d %H:%M')"

# =========
# 🚀 ACTION
# =========

echo "🔄 Adding all changes..."
git add .

echo "📝 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Done. All files pushed to GitHub."


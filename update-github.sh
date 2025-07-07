#!/bin/bash

# =========
# 📝 CONFIG
# =========

# 專案路徑
PROJECT_PATH="$HOME/Documents/GitHub/Vernon-website"

# Commit message
COMMIT_MSG="Manual update on $(date '+%Y-%m-%d %H:%M')"

# =========
# 🚀 ACTION
# =========

echo "📁 Changing directory to $PROJECT_PATH"
cd "$PROJECT_PATH" || { echo "❌ Directory not found"; exit 1; }

echo "🔄 Pulling latest from GitHub..."
git pull origin main

echo "✅ Adding all changes..."
git add .

echo "📝 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Done. All files updated to GitHub."


# =========
# 📝 CONFIG
# =========

# 專案路徑
PROJECT_PATH="$HOME/Vernon-website"

# Commit message
COMMIT_MSG="Manual update on $(date '+%Y-%m-%d %H:%M')"

# =========
# 🚀 ACTION
# =========

echo "📁 Changing directory to $PROJECT_PATH"
cd "$PROJECT_PATH" || { echo "❌ Directory not found"; exit 1; }

echo "🔄 Pulling latest from GitHub..."
git pull origin main

echo "✅ Adding all changes..."
git add .

echo "📝 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

git push origin main

echo "🎉 Done. All files updated to GitHub."
#!/bin/bash

# =========
# 📝 CONFIG
# =========

# 專案路徑
PROJECT_PATH="$HOME/Documents/GitHub/Vernon-website"


# Commit message
COMMIT_MSG="Manual update on $(date '+%Y-%m-%d %H:%M')"

# =========
# 🚀 ACTION
# =========

echo "📁 Changing directory to $PROJECT_PATH"
cd "$PROJECT_PATH" || { echo "❌ Directory not found"; exit 1; }

echo "🔄 Pulling latest from GitHub..."
git pull origin main

echo "✅ Adding all changes..."
git add .

echo "📝 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Done. All files updated to GitHub."


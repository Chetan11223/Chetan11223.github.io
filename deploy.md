# Quick Deployment Guide

## Method 1: GitHub Web Upload (Fastest)

1. **Go to**: https://github.com/Chetan11223
2. **Click**: "New repository" (green button)
3. **Settings**:
   - Name: `multi-state-agent-chatbot`
   - Description: `AI-powered Indian states cultural heritage chatbot`
   - Public repository
   - Don't initialize with README
4. **Click**: "Create repository"

5. **Upload files**:
   - Click "uploading an existing file"
   - Drag and drop all files: index.html, script.js, style.css, README.md, LICENSE, .gitignore
   - Commit message: "Initial commit: Multi-State Agent Chatbot"
   - Click "Commit changes"

## Method 2: Command Line (After creating repo)

```bash
git remote set-url origin https://github.com/Chetan11223/multi-state-agent-chatbot.git
git push -u origin main
```

## Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: "main" 
5. Folder: "/ (root)"
6. Click "Save"

**Your live URL will be**: https://chetan11223.github.io/multi-state-agent-chatbot

## Alternative: Create with Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with repo permissions
3. Use token instead of password in git commands
# 🚀 Sentinote Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies
```bash
cd webdev/sentinote
npm install
```

### 2. Run the Application
```bash
npm start
```

### 3. Access the Application
- Frontend: http://localhost:3000

## Features
✅ **100% Client-side** - No server needed  
✅ **Custom sentiment analysis** - No API costs  
✅ **Smart negation detection** - Understands "not loving", "don't like"  
✅ **Context-aware** - Recognizes proposals, love, success, loss  
✅ **Demo data** - Sample entries included  
✅ **Local storage** - Data persists in browser  
✅ **Responsive design** - Works on all devices  

## How It Works

### Smart Sentiment Analysis
The app uses custom AI logic to analyze your journal entries:

**Positive Detection:**
- Love & romance: "I love you", "proposed", "engaged"
- Success: "got the job", "graduated", "promotion"
- Happiness: "happy", "excited", "amazing"

**Negative Detection:**
- Loss & sadness: "lost job", "died", "breakup"
- Negations: "not loving", "don't like", "isn't happy"
- Problems: "sick", "failed", "trouble"

**Context Understanding:**
- "She has proposed me" → **Positive** ✅
- "She is not loving me" → **Negative** ✅
- "I don't feel happy" → **Negative** ✅
- "Got the job!" → **Positive** ✅

## Troubleshooting

### Common Issues
- **Port 3000 in use**: Change port in package.json or kill existing process
- **Build errors**: Run `npm install` to ensure all dependencies are installed
- **Data loss**: Entries are stored in browser localStorage

### Development
- **Add new words**: Edit `src/utils/generateResponse.js`
- **Change styling**: Modify `src/App.css` and `src/components/EntryCard.css`
- **Add features**: Extend components in `src/components/`

## Benefits of Client-Side Only
- ✅ **No server costs** - runs entirely in browser
- ✅ **No API limits** - unlimited usage
- ✅ **Privacy** - data never leaves your device
- ✅ **Offline capable** - works without internet
- ✅ **Instant responses** - no network delays
- ✅ **Simple deployment** - just static files

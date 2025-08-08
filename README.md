# 🧠 Sentinote

**Sentinote** is a minimal, responsive journaling app built with **React** and **plain CSS**. It gives users a clean space to write personal thoughts while offering **intelligent sentiment analysis** powered by custom AI logic with **date-based organization** and **search capabilities**.

---

## 🚀 Features

- ✍️ **Write and store journal entries**  
- 🧠 **Smart sentiment analysis** using custom AI logic with negation detection
- 🔴🟡🟢 **Dynamic badges** reflecting emotional tone of each entry
- 🤖 **Contextual responses** based on tone (positive, negative, neutral)
- 📅 **Date-based organization** - entries grouped by date with today's entries at top
- 🔍 **Advanced search** - search by content, sentiment, or date
- 📄 **Demo entries** loaded from local `entries.json`
- ⚛️ **Clean handcrafted UI** without external libraries
- 🆓 **100% Free** - no API costs or rate limits
- 📱 **Responsive design** - works on all devices

---

## 🛠 Tech Stack

| Layer        | Tech                                       |
|--------------|--------------------------------------------|
| Frontend     | React (Functional Components + Hooks)     |
| Styling      | Plain CSS                                  |
| Sentiment AI | Custom sentiment analysis with negation detection |
| Storage      | Local Storage (browser)                    |
| Search       | Client-side filtering and grouping         |

---

## 📦 Components Overview

- `DateCard.jsx` – Displays entries grouped by date with expand/collapse
- `EntryCard.jsx` – Individual journal entry display with sentiment colors
- `SearchBar.jsx` – Advanced search with filters (content, sentiment, date)
- `JournalEntryForm.jsx` – Entry creation form with loading states
- `generateResponse.js` – Custom sentiment analysis logic

---

## 📁 Project Structure
```
sentinote/
├── src/
│   ├── components/
│   │   ├── DateCard.jsx      # Date-based entry grouping
│   │   ├── DateCard.css      # Date card styling
│   │   ├── EntryCard.jsx     # Individual entry display
│   │   ├── EntryCard.css     # Entry styling with sentiment colors
│   │   ├── SearchBar.jsx     # Search functionality
│   │   ├── SearchBar.css     # Search styling
│   │   └── JournalEntryForm.jsx # Entry creation form
│   ├── utils/
│   │   └── generateResponse.js # Custom sentiment analysis
│   ├── data/
│   │   └── entries.json      # Demo data with realistic dates
│   ├── App.jsx              # Main application component
│   └── App.css              # Main styling
├── public/                  # Static assets
└── package.json            # Dependencies
```

---

## 💻 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/charanHubCommits/sentinote.git
   cd sentinote
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app locally**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to http://localhost:3000

---

## 🎯 Smart Sentiment Analysis

The app uses custom AI logic to analyze your journal entries:

### **Positive Detection:**
- **Love & romance**: "I love you", "proposed", "engaged"
- **Success**: "got the job", "graduated", "promotion"
- **Happiness**: "happy", "excited", "amazing"

### **Negative Detection:**
- **Loss & sadness**: "lost job", "died", "breakup"
- **Health issues**: "headache", "sick", "pain", "tired"
- **Negations**: "not loving", "don't like", "isn't happy"

### **Context Understanding:**
- "She has proposed me" → **Positive** ✅
- "She is not loving me" → **Negative** ✅
- "Had a headache today" → **Negative** ✅
- "Got the job!" → **Positive** ✅

---

## 📅 Date-Based Organization

### **Smart Date Grouping:**
- **Today's entries** appear at the top with special purple styling
- **Past entries** are grouped by date in collapsible cards
- **Chronological order** - newest dates first
- **Visual indicators** - 📅 for today, 📆 for past dates

### **Date Formatting:**
- **"Today"** - for current date
- **"Yesterday"** - for previous day  
- **"Monday, January 15, 2024"** - for older dates

---

## 🔍 Advanced Search

### **Search Capabilities:**
- **Content Search**: Search through journal content and AI comments
- **Sentiment Search**: Find entries by positive/negative/neutral
- **Date Search**: Search by date patterns
- **All Search**: Search across everything at once

### **Search Examples:**
| Search Term | Filter | Finds |
|-------------|--------|-------|
| **"headache"** | Content | Entries mentioning headaches |
| **"positive"** | Sentiment | All positive entries |
| **"2024"** | Date | Entries from 2024 |
| **"love"** | All | Any mention of love |

---

## 🧘‍♂️ Philosophy Behind Sentinote

Sentinote was built with one goal: to make journaling smarter and emotionally aware.

By attaching emotional context to your thoughts, the app encourages:
- **Emotional clarity & reflection**
- **Pattern tracking over time**
- **Intentional writing habits**
- **Chronological organization**
- **Easy entry discovery**

Whether you're riding high or feeling like shit, Sentinote is there to listen—minus the therapy bill.

---

## 🎨 UI/UX Features

### **Modern Design:**
- **Clean, minimalist interface**
- **Responsive layout** - works on mobile and desktop
- **Smooth animations** and transitions
- **Color-coded sentiment** indicators
- **Intuitive navigation**

### **User Experience:**
- **Instant sentiment analysis** - no API delays
- **Date-based browsing** - find entries quickly
- **Advanced search** - discover patterns
- **Local storage** - data persists in browser
- **Offline capable** - works without internet

---

## 🚀 Benefits

### **For Users:**
- ✅ **No costs** - completely free to use
- ✅ **No limits** - unlimited journal entries
- ✅ **Privacy** - data never leaves your device
- ✅ **Instant responses** - no network delays
- ✅ **Pattern recognition** - track emotions over time

### **For Developers:**
- ✅ **Simple deployment** - just static files
- ✅ **No server maintenance** - client-side only
- ✅ **Easy customization** - modify sentiment logic
- ✅ **Open source** - MIT license

---

## ✨ Author

Charan Mandakuriti

---

## 📜 License

This project is open-source under the MIT License.
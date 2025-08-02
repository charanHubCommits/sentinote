# 🧠 Sentinote

**Sentinote** is a minimalistic and responsive journaling app built with **React** and **plain CSS**. It provides a space for users to document personal thoughts while offering **real-time sentiment analysis** using natural language processing.

---

## 🚀 Features

- ✍️ **Write and store journal entries**  
- 🧠 **AI-powered sentiment analysis** using [`sentiment`](https://www.npmjs.com/package/sentiment)
- 🔴🟡🟢 **Dynamic badges** indicating emotional tone of each entry
- 📄 **Demo entries** loaded from a local `entries.json` file
- ⚛️ **Clean UI** with handcrafted components (no UI libraries)

---

## 🛠 Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React (Functional Components + Hooks) |
| Styling     | Plain CSS                    |
| Sentiment Analysis | [`sentiment`](https://www.npmjs.com/package/sentiment) (NPM) |

---

## 📦 Components Overview

- `EntryCard.jsx` – Displays individual journal entries  
- `EntryList.jsx` – Renders all journal entries  
- `JournalEntryForm.jsx` – Form to submit a new entry  
- `SentimentBadge.jsx` – Shows emotional tone using color-coded badges

---

## 📁 Project Structure
src/
├── components/
│   ├── EntryCard.jsx
│   ├── EntryCard.css
│   ├── EntryList.jsx
│   ├── JournalEntryForm.jsx
│   └── SentimentBadge.jsx
├── data/
│   └── entries.json
├── utils/
│   └── responses.js
├── App.js
├── App.css
└── index.js

---

## 💻 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/charanHubCommits/sentinote.git
   cd sentinote
2.	**Install dependencies**
    npm install
3   **Run the app locally**
    npm start
4.	**Visit the app**
    Open http://localhost:3000 in your browser.

💡 Philosophy Behind Sentinote

Sentinote is rooted in the belief that reflection brings clarity. By attaching emotional context to your thoughts, the app encourages:
	•	Better emotional awareness
	•	Pattern recognition over time
	•	Intentional journaling habits

✨ Author
	•	Charan Mandakuriti

📜 License

This project is open-source under the MIT License.

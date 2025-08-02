# 🧠 Sentinote

**Sentinote** is a minimal, responsive journaling app built with **React** and **plain CSS**. It gives users a clean space to write personal thoughts while offering **real-time sentiment analysis** powered by state-of-the-art NLP.

---

## 🚀 Features

- ✍️ **Write and store journal entries**  
- 🧠 **AI-powered sentiment analysis** using `cardiffnlp/twitter-roberta-base-sentiment`
- 🔴🟡🟢 **Dynamic badges** reflecting emotional tone of each entry
- 🤖 **Contextual AI responses** based on tone (positive, negative, neutral)
- 📄 **Demo entries** loaded from local `entries.json`
- ⚛️ **Clean handcrafted UI** without external libraries

---

## 🛠 Tech Stack

| Layer        | Tech                                       |
|--------------|--------------------------------------------|
| Frontend     | React (Functional Components + Hooks)     |
| Styling      | Plain CSS                                  |
| Sentiment AI | [Twitter-RoBERTa-base](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment) (via `transformers`) |

---

## 📦 Components Overview

- `EntryCard.jsx` – Displays individual journal entries  
- `EntryList.jsx` – Renders all journal entries  
- `JournalEntryForm.jsx` – Form to submit new thoughts  
- `SentimentBadge.jsx` – Shows colored badge based on sentiment  
- `responses.js` – Houses AI-generated tone-based responses  

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
├── sentiment/
│   └── sentiment.js (HuggingFace pipeline logic)
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
3.  **Run the app locally**
    npm start
4.	**Open in browser**
    Navigate to http://localhost:3000

🧘‍♂️ Philosophy Behind Sentinote

Sentinote was built with one goal: to make journaling smarter and emotionally aware.

By attaching emotional context to your thoughts, the app encourages:
	•	Emotional clarity & reflection
	•	Pattern tracking over time
	•	Intentional writing habits

Whether you’re riding high or feeling like shit, Sentinote is there to listen—minus the therapy bill.

✨ Author

Charan Mandakuriti


📜 License

This project is open-source under the MIT License.
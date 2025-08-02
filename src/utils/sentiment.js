// sentiment.js

import axios from "axios";

// HuggingFace Inference API URL
const API_URL = "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment";
const API_TOKEN = process.env.REACT_APP_HF_API_TOKEN;

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
};

// Heuristic keyword maps
const POSITIVE_KEYWORDS = [
  "completed", "finished", "achieved", "success", "won", "promotion", "passed",
  "selected", "cleared", "accepted", "joined", "hired", "got job", "offer letter",
  "she said yes", "approved", "solved", "fixed"
];
const NEGATIVE_KEYWORDS = [
  "failed", "missed", "incomplete", "postponed", "delayed", "cancelled", "rejected",
  "sick", "broke", "argued", "lost", "injured", "declined", "error", "issue", "crashed",
  "did not accept", "not accepted", "denied", "ignored", "blocked", "unfollowed", "left me", "she left"
];

/**
 * Checks if any keyword exists in the input text
 */
const hasKeyword = (text, keywords) => {
  const textLower = text.toLowerCase();
  return keywords.some((kw) => textLower.includes(kw.toLowerCase()));
};

/**
 * Analyze sentiment of input text using HF model + keyword heuristics
 * @param {string} text
 * @returns {Promise<'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'>}
 */
export const analyzeSentiment = async (text) => {
  try {
    const res = await axios.post(API_URL, { inputs: text }, { headers });

    // Format check
    if (!Array.isArray(res.data) || !Array.isArray(res.data[0])) {
      console.warn("Unexpected response from HF:", res.data);
      return heuristicSentiment(text);
    }

    const sorted = res.data[0].sort((a, b) => b.score - a.score);
    let topLabel = sorted[0].label.toUpperCase();

    // Override NEUTRAL with keyword-based sentiment
    if (topLabel === "NEUTRAL") {
      return heuristicSentiment(text);
    }

    return topLabel;
  } catch (err) {
    console.error("Error fetching sentiment:", err.message);
    return heuristicSentiment(text);
  }
};

/**
 * Heuristic-only fallback sentiment prediction
 */
const heuristicSentiment = (text) => {
  if (hasKeyword(text, POSITIVE_KEYWORDS)) return "POSITIVE";
  if (hasKeyword(text, NEGATIVE_KEYWORDS)) return "NEGATIVE";
  return "NEUTRAL";
};
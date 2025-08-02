// utils/sentiment.js
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

/**
 * Analyzes the sentiment of a given text and returns 'positive', 'neutral', or 'negative'
 * based on sentiment score.
 */
export const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);
  const score = result.score;

  if (score > 1) return 'positive';
  if (score < -1) return 'negative';
  return 'neutral';
};
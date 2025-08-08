// Enhanced sentiment analysis with context understanding and negation detection
const positiveWords = [
  'love', 'happy', 'joy', 'excited', 'amazing', 'wonderful', 'great', 'fantastic',
  'proposed', 'proposal', 'engaged', 'marriage', 'wedding', 'celebrate', 'celebration',
  'success', 'achieved', 'accomplished', 'proud', 'blessed', 'grateful', 'thankful',
  'beautiful', 'perfect', 'awesome', 'incredible', 'outstanding', 'brilliant',
  'win', 'won', 'victory', 'triumph', 'promotion', 'raise', 'bonus', 'award',
  'graduated', 'degree', 'certificate', 'diploma', 'scholarship', 'acceptance',
  'baby', 'pregnant', 'birth', 'anniversary', 'birthday', 'party', 'gift',
  'vacation', 'holiday', 'trip', 'adventure', 'explore', 'discover', 'learn',
  'friend', 'family', 'together', 'reunion', 'meeting', 'date', 'romance',
  'dream', 'goal', 'aspiration', 'hope', 'future', 'opportunity', 'chance'
];

const negativeWords = [
  'hate', 'angry', 'sad', 'depressed', 'anxious', 'worried', 'scared', 'fear',
  'death', 'died', 'loss', 'lost', 'miss', 'missing', 'gone', 'left', 'abandoned',
  'divorce', 'breakup', 'separated', 'alone', 'lonely', 'isolated', 'rejected',
  'fired', 'laid off', 'unemployed', 'jobless', 'poor', 'broke', 'debt', 'owe',
  'sick', 'ill', 'disease', 'cancer', 'pain', 'hurt', 'injury', 'accident',
  'fail', 'failed', 'failure', 'disappointed', 'disappointment', 'regret',
  'stress', 'pressure', 'overwhelmed', 'exhausted', 'tired', 'burnout',
  'fight', 'argument', 'conflict', 'war', 'battle', 'struggle', 'difficult',
  'problem', 'issue', 'trouble', 'crisis', 'emergency', 'disaster', 'catastrophe',
  // Health-related negative words
  'headache', 'migraine', 'pain', 'ache', 'sore', 'hurt', 'injury', 'wound',
  'fever', 'cold', 'flu', 'cough', 'sneeze', 'sick', 'illness', 'disease',
  'nausea', 'vomit', 'dizzy', 'dizziness', 'weak', 'weakness', 'fatigue',
  'exhausted', 'tired', 'sleepy', 'drowsy', 'numb', 'numbness', 'swelling',
  'bruise', 'cut', 'bleeding', 'infection', 'rash', 'itch', 'itching',
  'stomachache', 'stomach', 'nausea', 'diarrhea', 'constipation', 'bloating',
  'cramp', 'cramps', 'spasm', 'spasms', 'twitch', 'twitching', 'tremor',
  'shaking', 'shiver', 'shivering', 'chills', 'sweat', 'sweating', 'hot',
  'cold', 'freezing', 'burning', 'stinging', 'throbbing', 'pounding',
  'aching', 'soreness', 'tenderness', 'stiffness', 'rigidity', 'tightness'
];

const neutralWords = [
  'think', 'thought', 'believe', 'feel', 'seem', 'appear', 'look', 'sound',
  'work', 'job', 'office', 'meeting', 'project', 'task', 'assignment',
  'study', 'learn', 'read', 'write', 'research', 'analysis', 'review',
  'walk', 'run', 'exercise', 'workout', 'gym', 'sport', 'game',
  'eat', 'food', 'meal', 'breakfast', 'lunch', 'dinner', 'snack',
  'sleep', 'rest', 'relax', 'watch', 'listen', 'play', 'enjoy'
];

// Negation words that flip the sentiment
const negationWords = [
  'not', 'no', 'never', 'none', 'nobody', 'nothing', 'neither', 'nowhere',
  'hardly', 'barely', 'scarcely', 'doesn\'t', 'don\'t', 'didn\'t', 'won\'t',
  'can\'t', 'couldn\'t', 'shouldn\'t', 'wouldn\'t', 'isn\'t', 'aren\'t',
  'wasn\'t', 'weren\'t', 'hasn\'t', 'haven\'t', 'hadn\'t', 'doesn\'t',
  'don\'t', 'didn\'t', 'won\'t', 'can\'t', 'couldn\'t', 'shouldn\'t',
  'wouldn\'t', 'isn\'t', 'aren\'t', 'wasn\'t', 'weren\'t', 'hasn\'t',
  'haven\'t', 'hadn\'t'
];

// Enhanced sentiment analysis function with negation detection
const analyzeSentiment = (text) => {
  const words = text.toLowerCase().split(/\s+/);
  let positiveScore = 0;
  let negativeScore = 0;
  let neutralScore = 0;

  // Check for specific positive phrases and contexts
  const positivePhrases = [
    'proposed', 'proposal', 'engaged', 'marriage', 'wedding',
    'love you', 'i love', 'falling in love', 'in love',
    'got the job', 'hired', 'promotion', 'raise', 'bonus',
    'graduated', 'degree', 'certificate', 'diploma',
    'baby', 'pregnant', 'birth', 'anniversary',
    'vacation', 'holiday', 'trip', 'adventure',
    'dream come true', 'wish granted', 'goal achieved'
  ];

  const negativePhrases = [
    'hate you', 'i hate', 'break up', 'divorce', 'separated',
    'lost job', 'fired', 'laid off', 'unemployed',
    'died', 'death', 'passed away', 'funeral',
    'sick', 'ill', 'disease', 'cancer', 'pain',
    'failed', 'failure', 'disappointed', 'regret',
    'alone', 'lonely', 'isolated', 'rejected',
    'not loving', 'don\'t love', 'doesn\'t love', 'isn\'t loving',
    'not happy', 'don\'t like', 'doesn\'t like', 'isn\'t happy',
    'not good', 'don\'t want', 'doesn\'t want', 'isn\'t good',
    'not working', 'don\'t care', 'doesn\'t care', 'isn\'t working',
    // Health-related negative phrases
    'had a headache', 'have a headache', 'got a headache',
    'feeling sick', 'feeling ill', 'not feeling well',
    'in pain', 'hurting', 'aching', 'sore',
    'feeling tired', 'exhausted', 'weak', 'dizzy',
    'stomach ache', 'stomach pain', 'nausea', 'vomiting'
  ];

  const textLower = text.toLowerCase();

  // Check for negative phrases first (including negations and health issues)
  for (const phrase of negativePhrases) {
    if (textLower.includes(phrase)) {
      negativeScore += 3;
    }
  }

  // Check for positive phrases
  for (const phrase of positivePhrases) {
    if (textLower.includes(phrase)) {
      positiveScore += 3;
    }
  }

  // Analyze individual words with negation detection
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const cleanWord = word.replace(/[^\w]/g, '');
    
    // Check if this word is negated by previous words
    let isNegated = false;
    for (let j = Math.max(0, i - 3); j < i; j++) {
      if (negationWords.includes(words[j])) {
        isNegated = true;
        break;
      }
    }
    
    if (positiveWords.includes(cleanWord)) {
      if (isNegated) {
        negativeScore += 2; // Negated positive word becomes negative
      } else {
        positiveScore += 1;
      }
    } else if (negativeWords.includes(cleanWord)) {
      if (isNegated) {
        positiveScore += 2; // Negated negative word becomes positive
      } else {
        negativeScore += 1;
      }
    } else if (neutralWords.includes(cleanWord)) {
      neutralScore += 0.5;
    }
  }

  // Special negation patterns
  const negationPatterns = [
    /not\s+\w+ing/, // "not loving", "not working"
    /don'?t\s+\w+/, // "don't love", "don't like"
    /doesn'?t\s+\w+/, // "doesn't love", "doesn't like"
    /isn'?t\s+\w+/, // "isn't happy", "isn't good"
    /aren'?t\s+\w+/, // "aren't happy", "aren't good"
    /wasn'?t\s+\w+/, // "wasn't happy", "wasn't good"
    /weren'?t\s+\w+/, // "weren't happy", "weren't good"
    /never\s+\w+/, // "never happy", "never good"
    /no\s+\w+/, // "no love", "no happiness"
  ];

  for (const pattern of negationPatterns) {
    if (pattern.test(textLower)) {
      negativeScore += 2;
    }
  }

  // Health-related context detection
  const healthPatterns = [
    /had\s+a\s+\w+/, // "had a headache", "had a cold"
    /have\s+a\s+\w+/, // "have a fever", "have a pain"
    /got\s+a\s+\w+/, // "got a headache", "got sick"
    /feeling\s+\w+/, // "feeling sick", "feeling tired"
    /in\s+pain/, // "in pain"
    /hurting/, // "hurting"
    /aching/, // "aching"
    /sore/, // "sore"
  ];

  for (const pattern of healthPatterns) {
    if (pattern.test(textLower)) {
      negativeScore += 2;
    }
  }

  // Context-based adjustments
  if (textLower.includes('proposed') || textLower.includes('proposal')) {
    positiveScore += 5;
  }
  
  if (textLower.includes('love') && textLower.includes('you') && !textLower.includes('not')) {
    positiveScore += 4;
  }

  if (textLower.includes('hate') || textLower.includes('terrible')) {
    negativeScore += 4;
  }

  // Health-related context adjustments
  if (textLower.includes('headache') || textLower.includes('pain') || textLower.includes('sick')) {
    negativeScore += 3;
  }

  // Determine sentiment based on scores
  if (positiveScore > negativeScore && positiveScore > 0) {
    return 'positive';
  } else if (negativeScore > positiveScore && negativeScore > 0) {
    return 'negative';
  } else {
    return 'neutral';
  }
};

const getComment = (sentiment, content) => {
  const comments = {
    positive: [
      "Great vibes! Keep that energy going! 🌟",
      "You're on fire today! 🔥",
      "Love this positive energy! ✨",
      "Someone's having a good day! 😊",
      "This is the energy we need! 💪",
      "Amazing news! So happy for you! 🎉",
      "This calls for celebration! 🎊",
      "You deserve all the happiness! 💖",
      "Incredible! Keep shining! ⭐",
      "This is what dreams are made of! 🌈"
    ],
    negative: [
      "Rough day? Tomorrow will be better. 💪",
      "Hang in there, you've got this! 🤗",
      "Every cloud has a silver lining. ☁️",
      "This too shall pass. 🌅",
      "You're stronger than you think! 💪",
      "Sending you virtual hugs! 🤗",
      "Better days are ahead! 🌅",
      "You're not alone in this! 💙",
      "Take it one day at a time. 🌱",
      "Your feelings are valid. 💜",
      "Hope you feel better soon! 🤗",
      "Take care of yourself! 💙",
      "Rest and recover! 😴",
      "Sending healing vibes! 💚",
      "You'll get through this! 💪"
    ],
    neutral: [
      "Interesting perspective. 🤔",
      "Thanks for sharing your thoughts. 📝",
      "Every day is a new opportunity. 🌅",
      "Life is full of possibilities. ✨",
      "Keep exploring and growing! 🌱",
      "Thanks for the update! 📋",
      "Appreciate you sharing this. 🙏",
      "Life has its ups and downs. 📈",
      "You're doing great! 👍",
      "Keep moving forward! 🚶‍♂️"
    ]
  };
  
  const commentArray = comments[sentiment];
  return commentArray[Math.floor(Math.random() * commentArray.length)];
};

export default async function generateResponse(userText) {
  try {
    // Use enhanced sentiment analysis
    const sentimentType = analyzeSentiment(userText);
    const comment = getComment(sentimentType, userText);

    return {
      sentiment: sentimentType,
      comment: comment
    };
  } catch (err) {
    console.error("generateResponse error:", err);
    throw new Error("Failed to analyze sentiment. Please try again.");
  }
}
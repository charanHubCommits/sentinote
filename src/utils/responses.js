const responses = {
  POSITIVE: [
    "Nice one! Progress is progress.",
    "You did it — even if it’s small, it matters.",
    "Momentum is your secret weapon.",
    "Another step forward. Keep stacking wins.",
    "You crushed that. Take a second to feel it.",
    "That’s what I’m talking about. Keep this energy.",
    "Success isn’t loud. It just shows up like this.",
    "You didn’t just do it — you owned it.",
    "Killing it silently? Respect.",
    "Little wins stack up to big shifts.",
    "Execution over excuses — and you chose right.",
    "Another notch on the belt. Keep slaying.",
    "Progress over perfection. You're on track.",
  ],
  NEGATIVE: [
    "Yeah, not every day’s a win. Just don’t stop.",
    "Failure isn’t final — unless you quit.",
    "Take the L, learn, and keep swinging.",
    "Bad day? Happens. Just don’t stay stuck.",
    "Tough days reveal tough people. Be that.",
    "Bruised ego? Good. Growth hurts sometimes.",
    "Even the best miss shots. Reset, go again.",
    "Lost today? Find yourself tomorrow.",
    "It sucked. Own it. Bounce back.",
    "You fumbled. But the game isn’t over.",
    "Crisis = feedback. You’re learning.",
    "Struggle now, flex later.",
  ],
  NEUTRAL: [
    "Just another day? That’s fine — consistency builds resilience.",
    "Nothing wild, but staying steady beats burning out.",
    "Not everything needs drama. Chill and carry on.",
    "Keep it boring if it means staying on track.",
    "Discipline is doing it even when it's dull.",
    "Neutral isn’t nothing — it’s maintenance.",
    "Middle ground days still matter.",
    "No highs, no lows — that’s focus.",
    "Steady work beats erratic hustle.",
    "Routine = stability = compound growth.",
    "Consistency makes chaos jealous.",
    "No fireworks? Still a win in disguise.",
  ],
};

export const getResponse = (sentiment) => {
  const options = responses[sentiment.toUpperCase()];
  if (!options || options.length === 0) return "Keep going.";
  return options[Math.floor(Math.random() * options.length)];
};
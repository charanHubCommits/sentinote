// utils/response.js

const positiveResponses = [
    "That's the spirit! Keep that fire alive 🔥",
    "You're glowing today — mentally and emotionally ✨",
    "That’s a win, even if it doesn’t feel like one.",
    "Damn, life’s on your side today! Enjoy it 😎",
    "This kind of energy can punch negativity in the face 💪",
    "You’re vibing hard — don’t stop now.",
    "You deserve this peace, don’t let guilt creep in.",
    "That joy? Bookmark it. Revisit it often."
  ];
  
  const neutralResponses = [
    "Hmm, just another day in the simulation huh?",
    "You survived. That’s good enough sometimes.",
    "Not great, not terrible — just existence doing its thing.",
    "Steady is underrated. Respect the calm.",
    "Processing... like a potato in a slow cooker.",
    "That’s the kind of day that just... existed.",
    "Might not feel big, but showing up still counts.",
    "Neutral days often build strong foundations."
  ];
  
  const negativeResponses = [
    "Damn, that sucks. But hey, it’s not permanent.",
    "Life gave you a gut punch, huh? Swing back tomorrow.",
    "Whatever dragged you down — bury it, don’t carry it.",
    "Some days hit like bricks. Rest. Reset. Reload.",
    "Feel it. Don’t fake it. Then let that shit go.",
    "You’ve been through worse, don't forget that.",
    "Pain’s just a shitty teacher with no chill — learn and ghost it.",
    "You didn’t fold — that’s already a win, soldier."
  ];
  
  /**
   * Returns a random response based on the sentiment type
   */
  export const getResponse = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
      case 'neutral':
        return neutralResponses[Math.floor(Math.random() * neutralResponses.length)];
      case 'negative':
        return negativeResponses[Math.floor(Math.random() * negativeResponses.length)];
      default:
        return "Your vibes confused the system. Try again.";
    }
  };
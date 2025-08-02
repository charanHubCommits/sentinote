const sentimentColors = {
    positive: "bg-green-100 text-green-800",
    negative: "bg-red-100 text-red-800",
    neutral: "bg-yellow-100 text-yellow-800",
  };
  
  const sentimentLabels = {
    positive: "😊 Positive",
    negative: "😞 Negative",
    neutral: "😐 Neutral",
  };
  
  export default function SentimentBadge({ sentiment }) {
    const color = sentimentColors[sentiment] || "bg-gray-100 text-gray-800";
    const label = sentimentLabels[sentiment] || "Unknown";
  
    return (
      <span className={`text-sm font-medium px-2 py-1 rounded ${color}`}>
        {label}
      </span>
    );
  }
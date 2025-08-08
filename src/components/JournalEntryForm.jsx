import { useState } from "react";

export default function JournalEntryForm({ onAddEntry, isLoading }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() || isLoading) return;
    onAddEntry(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="journal-form">
      <textarea
        className=""
        rows="5"
        placeholder="Write today's thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading || !content.trim()}>
        {isLoading ? "Processing..." : "Add Entry"}
      </button>
    </form>
  );
}